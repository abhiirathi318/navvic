import { Resend } from "resend";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type QuoteRequest = {
  company: string;
  contactName: string;
  email: string;
  phone?: string;
  origin?: string;
  destinationPort: string;
  mode?: string;
  incoterm?: string;
  volume?: string;
  sourcing: string;
};

export async function sendQuoteEmail(data: QuoteRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "Navvic <onboarding@resend.dev>";
  const to = process.env.QUOTE_TO_EMAIL ?? "support@navvic.com";

  const { company, contactName, email, phone, origin, destinationPort, mode, incoterm, volume, sourcing } = data;

  const row = (label: string, value?: string) =>
    value && value.trim()
      ? `<tr><td style="padding:6px;border-bottom:1px solid #eee"><strong>${label}</strong></td><td style="padding:6px;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`
      : "";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Quote request — ${company}`,
    html: `
      <h2>New quote request</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${row("Company", company)}
        ${row("Contact name", contactName)}
        ${row("Email", email)}
        ${row("Phone / WhatsApp", phone)}
        ${row("Sourcing from", origin)}
        ${row("Destination port", destinationPort)}
        ${row("Shipping mode", mode)}
        ${row("Incoterm", incoterm)}
        ${row("Estimated volume", volume)}
      </table>
      <h3>What they are sourcing</h3>
      <p style="white-space:pre-wrap">${escapeHtml(sourcing)}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
