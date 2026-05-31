import Link from "next/link";
import { ArrowLeft, ScanSearch } from "lucide-react";
import HsCodeTool from "@/components/HsCodeTool";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getTool } from "@/lib/tools";
import { toolSeo } from "@/lib/tool-seo";
import { buildToolMetadata, softwareAppSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildToolMetadata("hs-code");

const tool = getTool("hs-code")!;
const seo = toolSeo["hs-code"];

export default function HsCodePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 -z-10 h-96 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ocean-400"
          >
            <ArrowLeft size={16} /> All tools
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 text-white shadow-lg">
              <ScanSearch size={24} />
            </span>
            <span className="rounded-full border border-ocean-400/30 bg-ocean-400/10 px-3 py-1 text-xs font-semibold text-ocean-400">
              AI-powered
            </span>
          </div>

          <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            HS Code <span className="gradient-text">Classifier</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Describe any product the way you'd say it out loud, or just upload a photo. Navvic's
            classifier maps it to the full Harmonized System hierarchy: Chapter (H2), Heading (H4),
            Subheading (H6) and the national tariff line (H8), so you can quote duties and file
            paperwork faster.
          </p>

          <div className="mt-10">
            <HsCodeTool />
          </div>

          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display text-2xl font-extrabold tracking-tight">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-4">
              {seo.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[var(--border)] bg-surface/60 p-5">
                  <dt className="font-display font-bold">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <JsonLd
        data={[
          softwareAppSchema({
            name: tool.name,
            description: tool.description,
            path: tool.href,
            features: seo.features,
          }),
          faqSchema(seo.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: tool.name, path: tool.href },
          ]),
        ]}
      />
      <Footer />
    </main>
  );
}
