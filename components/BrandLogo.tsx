/* Typographic wordmark logo treatment: renders a brand's name as a styled
   monogram + wordmark on a branded gradient panel. No trademarked artwork. */

function initials(brand: string) {
  return brand
    .replace(/['’]/g, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BrandLogo({
  brand,
  accent,
  size = "md",
}: {
  brand: string;
  accent: string;
  size?: "md" | "lg";
}) {
  const big = size === "lg";
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${hexToRgba(accent, 0.28)}, transparent 60%), linear-gradient(145deg, ${hexToRgba(
          accent,
          0.16
        )}, ${hexToRgba(accent, 0.04)})`,
      }}
    >
      {/* faint repeating monogram backdrop */}
      <span
        className="pointer-events-none absolute -right-4 -top-6 select-none font-display font-extrabold leading-none opacity-[0.08]"
        style={{ color: accent, fontSize: big ? "16rem" : "9rem" }}
      >
        {initials(brand)}
      </span>

      {/* monogram badge */}
      <span
        className={`flex items-center justify-center rounded-2xl font-display font-extrabold text-white shadow-lg ${
          big ? "h-24 w-24 text-4xl" : "h-14 w-14 text-xl"
        }`}
        style={{ backgroundColor: accent }}
      >
        {initials(brand)}
      </span>

      {/* wordmark */}
      <span
        className={`relative mt-4 max-w-[90%] text-center font-display font-extrabold tracking-tight ${
          big ? "text-4xl" : "text-xl"
        }`}
        style={{ color: accent }}
      >
        {brand}
      </span>
      <span
        className="relative mt-1 h-1 rounded-full"
        style={{ width: big ? 64 : 36, backgroundColor: accent }}
      />
    </div>
  );
}
