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
import { tools, type ToolIcon } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Trade Tools | Navvic",
  description:
    "A free, connected toolkit for importers and exporters: classify HS codes, estimate landed cost, check compliance, choose Incoterms, generate documents and plan freight.",
};

const icons: Record<ToolIcon, typeof ScanSearch> = {
  ScanSearch,
  Calculator,
  ShieldCheck,
  Scale,
  FileText,
  Container,
};

export default function ToolsPage() {
  const ordered = [...tools].sort((a, b) => a.step - b.step);

  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-36 pb-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-ocean-400">
            Free trade tools
          </span>
          <h1 className="font-display mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
            One toolkit for <span className="gradient-text">every shipment</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            From &ldquo;what is this product?&rdquo; to a printed packing list, Navvic&rsquo;s tools
            walk a shipment through every cross-border decision. Each one hands its answer to the
            next, so you never re-type a thing.
          </p>
        </div>
      </section>

      {/* workflow */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl border border-[var(--border)] bg-surface/60 p-5 sm:p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-ocean-400">
            The Navvic trade workflow
          </div>
          <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {ordered.map((t, i) => {
              const Icon = icons[t.icon];
              return (
                <div key={t.slug} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-0">
                  <Link
                    href={t.href}
                    className="group flex w-full flex-1 items-center gap-3 rounded-2xl border border-[var(--border)] bg-surface p-3 transition-all hover:-translate-y-0.5 hover:border-ocean-400/40 hover:shadow-lg lg:flex-col lg:items-start lg:gap-2"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-400/20 to-ocean-600/10 text-ocean-400">
                      <Icon size={19} />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-ocean-400">
                        Step {t.step}
                      </div>
                      <div className="font-display text-sm font-bold leading-tight">{t.name}</div>
                    </div>
                  </Link>
                  {i < ordered.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="shrink-0 rotate-90 text-ocean-400/50 lg:rotate-0"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          All tools are free to use. Indicative results: always verify against official tariffs and
          confirm with a licensed customs broker before you file.
        </p>
      </section>
      <Footer />
    </main>
  );
}
