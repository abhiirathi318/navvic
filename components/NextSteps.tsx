"use client";

import Link from "next/link";
import {
  ScanSearch,
  Calculator,
  ShieldCheck,
  Scale,
  FileText,
  Container,
  ArrowRight,
} from "lucide-react";
import { getTool, type Tool, type ToolIcon } from "@/lib/tools";

const icons: Record<ToolIcon, typeof ScanSearch> = {
  ScanSearch,
  Calculator,
  ShieldCheck,
  Scale,
  FileText,
  Container,
};

export type ToolContext = {
  hs?: string;
  product?: string;
  country?: string;
  origin?: string;
  value?: string | number;
  incoterm?: string;
};

export function buildHref(href: string, ctx: ToolContext = {}) {
  const p = new URLSearchParams();
  if (ctx.hs) p.set("hs", ctx.hs);
  if (ctx.product) p.set("product", ctx.product);
  if (ctx.country) p.set("country", ctx.country);
  if (ctx.origin) p.set("origin", ctx.origin);
  if (ctx.value) p.set("value", String(ctx.value));
  if (ctx.incoterm) p.set("incoterm", ctx.incoterm);
  const qs = p.toString();
  return qs ? `${href}?${qs}` : href;
}

export default function NextSteps({
  from,
  context = {},
  heading = "Recommended next steps",
}: {
  from: string;
  context?: ToolContext;
  heading?: string;
}) {
  const tool = getTool(from);
  if (!tool) return null;
  const related = tool.related
    .map((s) => getTool(s))
    .filter((t): t is Tool => Boolean(t));
  if (!related.length) return null;

  return (
    <div className="mt-8 rounded-3xl border border-ocean-400/25 bg-gradient-to-br from-ocean-400/5 to-transparent p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ocean-400/15 text-ocean-400">
          <ArrowRight size={15} />
        </span>
        <h3 className="font-display text-lg font-bold">{heading}</h3>
      </div>
      <p className="mt-1 text-sm text-muted">
        Carry these details straight into your next tool — no re-typing.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {related.map((t) => {
          const Icon = icons[t.icon];
          return (
            <Link
              key={t.slug}
              href={buildHref(t.href, context)}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-surface p-4 transition-all hover:-translate-y-1 hover:border-ocean-400/40 hover:shadow-lg hover:shadow-ocean-600/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-400/20 to-ocean-600/10 text-ocean-400">
                <Icon size={17} />
              </span>
              <div className="mt-3 font-display text-sm font-bold">{t.name}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.business}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ocean-400">
                Continue
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
