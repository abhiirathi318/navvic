"use client";

const brands = [
  "Tony's Chocolonely",
  "Lindt",
  "Barilla",
  "Ritter Sport",
  "Ferrero",
  "Pringles",
  "Oreo",
  "Haribo",
  "Illy",
  "Twinings",
  "De Cecco",
  "Maple Joe",
];

export default function BrandMarquee() {
  const row = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-surface/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {row.map((b, i) => (
          <span
            key={i}
            className="font-display text-lg font-bold uppercase tracking-wider text-muted/70 transition-colors hover:text-ocean-400"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
