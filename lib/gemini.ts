const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export type GeminiImage = { mimeType: string; data: string };

export type GeminiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; error: string; detail?: string };

/**
 * Calls Gemini with a JSON response schema and returns parsed structured output.
 * Centralises auth, error handling and rate-limit messaging for every tool.
 */
export async function callGemini<T>(
  prompt: string,
  responseSchema: Record<string, unknown>,
  image?: GeminiImage,
  temperature = 0.1
): Promise<GeminiResult<T>> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      status: 500,
      error:
        "Server is missing GEMINI_API_KEY. Add it to .env.local (local) or the Vercel project env.",
    };
  }

  const parts: Array<Record<string, unknown>> = [{ text: prompt }];
  if (image?.data && image?.mimeType) {
    parts.push({ inlineData: { mimeType: image.mimeType, data: image.data } });
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: {
          temperature,
          responseMimeType: "application/json",
          responseSchema,
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      const error =
        res.status === 429
          ? "Gemini free-tier rate limit hit. Please wait a moment and try again."
          : `Gemini API error (${res.status}).`;
      return { ok: false, status: 502, error, detail: detail.slice(0, 300) };
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return { ok: false, status: 502, error: "Gemini returned no content." };
    }

    return { ok: true, data: JSON.parse(text) as T };
  } catch (err) {
    return {
      ok: false,
      status: 500,
      error: "Request failed.",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

export const COUNTRY_LABELS: Record<string, string> = {
  IN: "India (ITC-HS 8-digit tariff)",
  US: "United States (HTS 8/10-digit tariff)",
  EU: "European Union (Combined Nomenclature, CN 8-digit)",
  UK: "United Kingdom (UK Global Tariff, 8-digit)",
  CA: "Canada (Customs Tariff, 8/10-digit)",
  AE: "United Arab Emirates (GCC Common Customs Tariff)",
  AU: "Australia (Customs Tariff)",
  GENERIC: "a generic national tariff",
};

export function countryName(key: string): string {
  return COUNTRY_LABELS[key?.toUpperCase()] ?? COUNTRY_LABELS.GENERIC;
}
