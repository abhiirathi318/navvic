import { NextRequest, NextResponse } from "next/server";
import { callGemini, countryName } from "@/lib/gemini";
import { validateHsCodeIfPresent } from "@/lib/hs-code";

export const runtime = "nodejs";
export const maxDuration = 30;

const responseSchema = {
  type: "object",
  properties: {
    product: { type: "string" },
    hs_code: { type: "string", description: "The HS code used, formatted." },
    currency: { type: "string", description: "ISO currency of the destination market, e.g. USD, EUR, INR." },
    customs_value: { type: "number", description: "Dutiable/customs value used as the basis, in destination currency." },
    charges: {
      type: "array",
      description: "Each duty/tax/levy applied, in the order they stack.",
      items: {
        type: "object",
        properties: {
          name: { type: "string", description: "e.g. 'Basic Customs Duty', 'IGST', 'VAT', 'Social Welfare Surcharge'." },
          rate: { type: "string", description: "Rate as shown, e.g. '10%', '18%', '0%'." },
          basis: { type: "string", description: "What the rate is applied to, e.g. 'CIF value', 'value + duty'." },
          amount: { type: "number", description: "Computed amount in destination currency." },
        },
        required: ["name", "rate", "amount"],
      },
    },
    total_duties_taxes: { type: "number", description: "Sum of all charges." },
    landed_cost: { type: "number", description: "customs_value + total_duties_taxes (+ any freight/insurance already included)." },
    effective_rate: { type: "string", description: "total_duties_taxes / customs_value as a percentage string." },
    confidence: { type: "number" },
    assumptions: { type: "string", description: "Key assumptions made (trade agreements ignored, standard rates, etc.)." },
    notes: { type: "string", description: "Caveats + reminder to verify against the official tariff." },
  },
  required: ["product", "hs_code", "currency", "customs_value", "charges", "total_duties_taxes", "landed_cost", "effective_rate"],
};

export async function POST(req: NextRequest) {
  let body: {
    hsCode?: string;
    product?: string;
    origin?: string;
    destination?: string;
    value?: number;
    incoterm?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const hsCode = (body.hsCode ?? "").trim();
  const product = (body.product ?? "").trim();
  const origin = (body.origin ?? "").trim() || "unspecified origin";
  const destination = (body.destination ?? "GENERIC").toUpperCase();
  const value = Number(body.value);
  const incoterm = (body.incoterm ?? "CIF").toUpperCase();

  if (!hsCode && !product) {
    return NextResponse.json({ error: "Provide an HS code or a product description." }, { status: 400 });
  }
  if (!value || value <= 0) {
    return NextResponse.json({ error: "Enter the shipment value (greater than 0)." }, { status: 400 });
  }

  const hsMinDigits = hsCode && !product ? 6 : 4;
  const hsCheck = validateHsCodeIfPresent(hsCode, hsMinDigits);
  if (!hsCheck.ok) {
    return NextResponse.json({ error: hsCheck.error }, { status: 400 });
  }
  const normalizedHs = hsCheck.normalized ?? "";

  const prompt = `You are a senior customs broker. Estimate the import duties, taxes and landed cost for the following shipment.

Destination market: ${countryName(destination)}
Country/region of origin: ${origin}
HS code: ${normalizedHs || "(not given; infer from the product description)"}
Product: ${product || "(not given; rely on the HS code)"}
Declared/transaction value: ${value} (treat as the ${incoterm} value)
Incoterm: ${incoterm}

INSTRUCTIONS:
- Determine the customs (dutiable) value for the destination. If the incoterm is FOB/EXW and the market assesses duty on CIF, note that freight/insurance would normally be added; since they are unknown, use the given value as the customs value and state this in assumptions.
- Apply the duties and taxes that the destination market actually levies on this HS code, in the correct stacking order (e.g. India: Basic Customs Duty on assessable value, then Social Welfare Surcharge on BCD, then IGST on value+duties; EU/UK: customs duty then VAT on value+duty; US: HTS duty rate, plus MPF/HMF where relevant).
- Use standard MFN rates. Do NOT assume any preferential/free-trade-agreement rate unless origin clearly qualifies; state this in assumptions.
- Compute every amount numerically in the destination currency and make the totals add up.
- Set effective_rate to total duties & taxes as a percentage of the customs value.
- Be conservative and clearly flag that these are indicative estimates to verify against the official tariff.`;

  const result = await callGemini<Record<string, unknown>>(prompt, responseSchema);
  if (!result.ok) {
    return NextResponse.json({ error: result.error, detail: result.detail }, { status: result.status });
  }
  return NextResponse.json({ destination, ...result.data });
}
