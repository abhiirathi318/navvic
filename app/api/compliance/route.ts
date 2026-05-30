import { NextRequest, NextResponse } from "next/server";
import { callGemini, countryName, GeminiImage } from "@/lib/gemini";

export const runtime = "nodejs";
export const maxDuration = 30;

const item = {
  type: "object",
  properties: {
    name: { type: "string" },
    detail: { type: "string", description: "One concise sentence." },
    agency: { type: "string", description: "Issuing/enforcing authority, if known." },
  },
  required: ["name", "detail"],
};

const responseSchema = {
  type: "object",
  properties: {
    product: { type: "string" },
    destination: { type: "string", description: "Destination market name." },
    verdict: {
      type: "string",
      enum: ["allowed", "restricted", "prohibited", "needs_review"],
      description: "Overall import status for this product in this market.",
    },
    summary: { type: "string", description: "One or two sentence plain-English summary of importability." },
    licences: { type: "array", description: "Import licences/permits/registrations required.", items: item },
    certifications: { type: "array", description: "Mandatory certifications/standards (CE, FDA, BIS, FSSAI, etc.).", items: item },
    labelling: { type: "array", description: "Labelling/marking/packaging requirements.", items: item },
    restrictions: { type: "array", description: "Quotas, bans, sanitary/phytosanitary controls, age/quantity limits.", items: item },
    documents: { type: "array", description: "Special documents needed at the border for this product.", items: { type: "string" } },
    confidence: { type: "number" },
    notes: { type: "string", description: "Caveats + reminder to confirm with the customs authority/broker." },
  },
  required: ["product", "destination", "verdict", "summary"],
};

export async function POST(req: NextRequest) {
  let body: {
    product?: string;
    hsCode?: string;
    destination?: string;
    image?: GeminiImage;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const product = (body.product ?? "").trim();
  const hsCode = (body.hsCode ?? "").trim();
  const destination = (body.destination ?? "GENERIC").toUpperCase();
  const image = body.image;

  if (product.length < 3 && !hsCode && !image) {
    return NextResponse.json(
      { error: "Describe the product, give an HS code, or upload an image." },
      { status: 400 }
    );
  }

  const prompt = `You are a trade-compliance specialist. Assess whether the following product can be imported into the destination market and what regulatory requirements apply.

Destination market: ${countryName(destination)}
Product: ${product || "(see HS code / image)"}
HS code: ${hsCode || "(not provided)"}
${image ? "An image of the product is attached — use it to identify the commodity." : ""}

INSTRUCTIONS:
- Set verdict to "allowed" (freely importable subject to normal duties), "restricted" (importable only with licences/permits/conditions), "prohibited" (cannot be imported), or "needs_review" if it genuinely depends on details not given.
- List concrete import licences/permits/registrations, mandatory certifications and standards, labelling/marking rules, and any quotas/bans/SPS controls — only those that realistically apply to THIS product in THIS market. Do not pad with generic items.
- Name the responsible agency where you can (e.g. FDA, USDA, DGFT, BIS, FSSAI, CE/EU notified body, UKCA).
- List any product-specific border documents.
- Keep each detail to one crisp sentence. Be accurate and conservative; clearly remind the user to confirm with the customs authority or a licensed broker.`;

  const result = await callGemini<Record<string, unknown>>(prompt, responseSchema, image);
  if (!result.ok) {
    return NextResponse.json({ error: result.error, detail: result.detail }, { status: result.status });
  }
  return NextResponse.json({ destinationKey: destination, ...result.data });
}
