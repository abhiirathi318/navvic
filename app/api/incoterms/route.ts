import { NextRequest, NextResponse } from "next/server";
import { callGemini } from "@/lib/gemini";

export const runtime = "nodejs";
export const maxDuration = 30;

const party = { type: "string", enum: ["Seller", "Buyer"] };

const responseSchema = {
  type: "object",
  properties: {
    incoterm: { type: "string", description: "Recommended Incoterm 2020 code, e.g. 'FOB', 'CIF', 'DAP'." },
    incoterm_name: { type: "string", description: "Full name, e.g. 'Free On Board'." },
    suitable_modes: { type: "string", description: "Which transport modes it's valid for, e.g. 'Sea & inland waterway only'." },
    summary: { type: "string", description: "Two-sentence plain-English explanation of the deal under this term." },
    risk_transfer: { type: "string", description: "The exact point where risk passes from seller to buyer." },
    responsibilities: {
      type: "array",
      description: "Each major cost/task in the journey and who bears it.",
      items: {
        type: "object",
        properties: {
          stage: { type: "string", description: "e.g. 'Export packing', 'Main carriage / freight', 'Import duties & taxes', 'Insurance'." },
          party,
        },
        required: ["stage", "party"],
      },
    },
    seller_duties: { type: "array", items: { type: "string" } },
    buyer_duties: { type: "array", items: { type: "string" } },
    alternatives: {
      type: "array",
      description: "1-3 other Incoterms worth considering and why.",
      items: {
        type: "object",
        properties: { incoterm: { type: "string" }, why: { type: "string" } },
        required: ["incoterm", "why"],
      },
    },
    tips: { type: "string", description: "Practical negotiation tips / pitfalls." },
  },
  required: ["incoterm", "incoterm_name", "summary", "risk_transfer", "responsibilities", "seller_duties", "buyer_duties"],
};

export async function POST(req: NextRequest) {
  let body: { scenario?: string; role?: string; mode?: string; incoterm?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const scenario = (body.scenario ?? "").trim();
  const role = (body.role ?? "").trim();
  const mode = (body.mode ?? "").trim();
  const incoterm = (body.incoterm ?? "").trim().toUpperCase();

  if (scenario.length < 5 && !incoterm) {
    return NextResponse.json(
      { error: "Describe your shipping scenario or pick an Incoterm to explain." },
      { status: 400 }
    );
  }

  const prompt = `You are an international trade advisor and expert in Incoterms 2020. ${
    incoterm
      ? `Explain the Incoterm "${incoterm}" clearly and practically.`
      : "Recommend the most appropriate Incoterm 2020 rule for the scenario below and explain it."
  }

${scenario ? `Scenario: """${scenario}"""` : ""}
${role ? `The user is the: ${role}` : ""}
${mode ? `Transport mode: ${mode}` : ""}

INSTRUCTIONS:
- Use only valid Incoterms 2020 rules (EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP).
- Remember FAS/FOB/CFR/CIF are for sea/inland-waterway transport only; the others work for any mode (incl. containers/air). Recommend a mode-appropriate term.
- responsibilities must cover, at minimum: export packing & checks, export customs clearance, origin handling/loading, main carriage (freight), insurance, destination handling/unloading, and import duties & taxes, each assigned to Seller or Buyer under the chosen term.
- Clearly state the precise point of risk transfer.
- Give a short list of concrete seller_duties and buyer_duties.
- Suggest 1-3 sensible alternative terms and when they'd be better.
- Keep it accurate, neutral and practical.`;

  const result = await callGemini<Record<string, unknown>>(prompt, responseSchema, undefined, 0.2);
  if (!result.ok) {
    return NextResponse.json({ error: result.error, detail: result.detail }, { status: result.status });
  }
  return NextResponse.json(result.data);
}
