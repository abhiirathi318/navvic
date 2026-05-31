/** WCO HS chapters are 01–97; chapter 77 is reserved. */
const CHAPTER_MIN = 1;
const CHAPTER_MAX = 97;
const RESERVED_CHAPTERS = new Set([77]);

/** Standard nomenclature levels: heading (4), subheading (6), national (8/10). */
const VALID_HS_LENGTHS = new Set([4, 6, 8, 10]);

export type HsCodeValidation = { ok: true; normalized: string; digits: string } | { ok: false; error: string };

function formatHsCode(digits: string): string {
  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 4)}.${digits.slice(4)}`;
  }
  if (digits.length <= 8) {
    return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6)}`;
  }
  return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6)}`;
}

function chapterError(chapter: number): string | null {
  if (chapter < CHAPTER_MIN || chapter > CHAPTER_MAX) {
    return `Invalid HS chapter. Chapters run from 01 to 97 (got ${String(chapter).padStart(2, "0")}).`;
  }
  if (RESERVED_CHAPTERS.has(chapter)) {
    return "Chapter 77 is reserved and not used in the HS nomenclature.";
  }
  return null;
}

function lengthError(digits: string, minDigits: number): string | null {
  if (digits.length < minDigits) {
    return minDigits >= 6
      ? "Enter a 6-digit (or longer) HS code, e.g. 6203.42."
      : "HS code must be at least 4 digits, e.g. 6203.";
  }
  if (digits.length > 10) {
    return "HS code cannot exceed 10 digits.";
  }
  if (!VALID_HS_LENGTHS.has(digits.length)) {
    return `Invalid HS code length (${digits.length} digits). Use 4, 6, 8, or 10 digits, e.g. 6203.42.`;
  }
  return null;
}

/** True when the input is digits/dots only — not a product description. */
export function looksLikeHsCodeInput(input: string): boolean {
  const trimmed = input.trim();
  if (!trimmed) return false;
  const letters = (trimmed.match(/[a-zA-Z]/g) ?? []).length;
  const digits = trimmed.replace(/[\s.\-]/g, "").length;
  return letters === 0 && digits >= 3;
}

/**
 * Validates an HS / HTS code. Empty input is invalid unless you skip calling this.
 * @param minDigits Minimum digit count (use 6 when HS is the sole identifier).
 */
export function validateHsCode(input: string, minDigits = 4): HsCodeValidation {
  const trimmed = input.trim();
  if (!trimmed) {
    return { ok: false, error: "Enter an HS code." };
  }

  if (!/^[\d.\s-]+$/.test(trimmed)) {
    return {
      ok: false,
      error: "HS code must contain only digits (dots optional), e.g. 6203.42 or 620342.",
    };
  }

  const digits = trimmed.replace(/[\s.\-]/g, "");
  const lenErr = lengthError(digits, minDigits);
  if (lenErr) return { ok: false, error: lenErr };

  const chapter = parseInt(digits.slice(0, 2), 10);
  const chapErr = chapterError(chapter);
  if (chapErr) return { ok: false, error: chapErr };

  if (/^0+$/.test(digits)) {
    return { ok: false, error: "HS code cannot be all zeros." };
  }

  return { ok: true, normalized: formatHsCode(digits), digits };
}

/** Validate when an HS field was filled in; pass through when empty. */
export function validateHsCodeIfPresent(
  input: string | undefined,
  minDigits = 4
): HsCodeValidation | { ok: true; normalized: string | null; digits: string | null } {
  const trimmed = (input ?? "").trim();
  if (!trimmed) {
    return { ok: true, normalized: null, digits: null };
  }
  const result = validateHsCode(trimmed, minDigits);
  if (!result.ok) return result;
  return result;
}
