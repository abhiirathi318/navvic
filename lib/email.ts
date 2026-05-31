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
  email: string;
  destinationPort: string;
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

  const { company, email, destinationPort, sourcing } = data;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Quote request — ${company}`,
    html: `
      <h2>New quote request</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Destination port</strong></td><td>${escapeHtml(destinationPort)}</td></tr>
      </table>
      <h3>What they are sourcing</h3>
      <p style="white-space:pre-wrap">${escapeHtml(sourcing)}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
