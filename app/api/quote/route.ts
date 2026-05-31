import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export const runtime = "nodejs";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: {
    company?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    origin?: string;
    destinationPort?: string;
    mode?: string;
    incoterm?: string;
    volume?: string;
    sourcing?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const company = body.company?.trim() ?? "";
  const contactName = body.contactName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const origin = body.origin?.trim() ?? "";
  const destinationPort = body.destinationPort?.trim() ?? "";
  const mode = body.mode?.trim() ?? "";
  const incoterm = body.incoterm?.trim() ?? "";
  const volume = body.volume?.trim() ?? "";
  const sourcing = body.sourcing?.trim() ?? "";

  if (!company || !contactName || !email || !destinationPort || !sourcing) {
    return NextResponse.json(
      { error: "Please fill in company, contact name, email, destination port and what you're sourcing." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await sendQuoteEmail({
      company,
      contactName,
      email,
      phone,
      origin,
      destinationPort,
      mode,
      incoterm,
      volume,
      sourcing,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("[quote]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
