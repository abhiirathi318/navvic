import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export const runtime = "nodejs";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: {
    company?: string;
    email?: string;
    destinationPort?: string;
    sourcing?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const company = body.company?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const destinationPort = body.destinationPort?.trim() ?? "";
  const sourcing = body.sourcing?.trim() ?? "";

  if (!company || !email || !destinationPort || !sourcing) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await sendQuoteEmail({ company, email, destinationPort, sourcing });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("[quote]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
