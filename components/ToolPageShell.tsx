import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense, type ReactNode } from "react";
import Footer from "./Footer";

export default function ToolPageShell({
  icon,
  badge,
  title,
  gradient,
  description,
  wide = false,
  children,
}: {
  icon: ReactNode;
  badge: string;
  title: string;
  gradient: string;
  description: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const maxW = wide ? "max-w-5xl" : "max-w-4xl";
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 -z-10 h-96 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />

        <div className={`mx-auto px-4 sm:px-6 ${maxW}`}>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ocean-400"
          >
            <ArrowLeft size={16} /> All tools
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 text-white shadow-lg">
              {icon}
            </span>
            <span className="rounded-full border border-ocean-400/30 bg-ocean-400/10 px-3 py-1 text-xs font-semibold text-ocean-400">
              {badge}
            </span>
          </div>

          <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title} <span className="gradient-text">{gradient}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{description}</p>

          <div className="mt-10">
            <Suspense
              fallback={<div className="h-64 animate-pulse rounded-3xl border border-[var(--border)] bg-surface/60" />}
            >
              {children}
            </Suspense>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
