"use client";

/* Renders a brand's official logo, fetched at runtime from a logo CDN by the
   brand's domain. If no logo is available (or it fails to load) it falls back
   to a typographic wordmark treatment so the card never looks broken. */

import { useState } from "react";
import { brandDomains } from "@/lib/products";

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

/**
 * Build the logo URL. Prefers logo.dev (high-quality, consistent wordmarks) when
 * a publishable token is configured via NEXT_PUBLIC_LOGO_DEV_TOKEN; otherwise
 * falls back to unavatar.io which needs no token and proxies official logos.
 */
function logoUrl(domain: string, big: boolean) {
  const token = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN;
  const size = big ? 320 : 200;
  if (token) {
    return `https://img.logo.dev/${domain}?token=${token}&size=${size}&format=png&retina=true`;
  }
  return `https://unavatar.io/${domain}?fallback=false`;
}

export default function BrandLogo({
  brand,
  accent,
  size = "md",
  domain,
}: {
  brand: string;
  accent: string;
  size?: "md" | "lg";
  domain?: string;
}) {
  const big = size === "lg";
  const [failed, setFailed] = useState(false);

  const d = domain ?? brandDomains[brand];
  const src = d ? logoUrl(d, big) : undefined;
  const showLogo = Boolean(src) && !failed;

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
      {/* faint monogram backdrop */}
      <span
        className="pointer-events-none absolute -right-4 -top-6 select-none font-display font-extrabold leading-none opacity-[0.08]"
        style={{ color: accent, fontSize: big ? "16rem" : "9rem" }}
      >
        {initials(brand)}
      </span>

      {showLogo ? (
        /* real brand logo on a clean white plate */
        <div
          className={`relative flex items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5 ${
            big ? "h-36 w-52 p-6" : "h-24 w-36 p-4"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${brand} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        /* typographic fallback */
        <>
          <span
            className={`flex items-center justify-center rounded-2xl font-display font-extrabold text-white shadow-lg ${
              big ? "h-24 w-24 text-4xl" : "h-14 w-14 text-xl"
            }`}
            style={{ backgroundColor: accent }}
          >
            {initials(brand)}
          </span>
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
        </>
      )}
    </div>
  );
}
