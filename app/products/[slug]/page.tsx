import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Package, Clock, Anchor, ShieldCheck } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import BrandLogo from "@/components/BrandLogo";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} | Navvic` : "Product | Navvic" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const fallback = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-32">
        <div className="absolute inset-0 -z-10 h-80 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ocean-400"
          >
            <ArrowLeft size={16} /> Back to catalog
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--border)] bg-surface">
                <BrandLogo brand={product.brand} accent={product.accent} size="lg" />
                <span
                  className="absolute left-4 top-4 rounded-full px-4 py-1.5 text-sm font-bold text-white shadow"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.category}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ocean-400">
                {product.brand}
                <span className="text-muted">·</span>
                <span className="text-muted">
                  {product.originFlag} {product.origin}
                </span>
              </div>
              <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{product.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Spec icon={Package} label="Min. order" value={product.moq} />
                <Spec icon={Clock} label="Lead time" value={product.leadTime} />
                <Spec icon={Anchor} label="Container load" value={product.containerLoad} />
                <Spec icon={ShieldCheck} label="Certifications" value={product.certifications.join(", ")} />
              </div>

              <div className="mt-8">
                <h3 className="font-display font-bold">Why buyers love it</h3>
                <ul className="mt-3 space-y-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <Check size={18} className="mt-0.5 shrink-0 text-ocean-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/?product=${encodeURIComponent(product.name)}#quote`}
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-7 py-4 font-semibold text-white shadow-xl shadow-ocean-600/30 transition-transform hover:scale-105"
              >
                Request a quote for this SKU
              </Link>
            </Reveal>
          </div>

          <div className="mt-24">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">You may also ship</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-surface p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
        <Icon size={15} className="text-ocean-400" />
        {label}
      </div>
      <div className="mt-1.5 font-semibold">{value}</div>
    </div>
  );
}
