import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { postsByDate } from "@/lib/blog";
import { url, breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Trade Insights — Import, Export, Freight & Sourcing Blog",
  description:
    "Practical playbooks for importers and exporters: landed cost, HS code classification, Incoterms 2020, ocean vs air freight and FMCG sourcing — written by the Navvic trade desk.",
  keywords: [
    "import export blog",
    "international trade guides",
    "landed cost",
    "HS code classification",
    "Incoterms 2020",
    "freight forwarding tips",
    "FMCG sourcing",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Trade Insights | Navvic",
    description:
      "Practical, no-fluff guides on importing, exporting, freight and sourcing from the Navvic trade desk.",
    url: url("/blog"),
  },
};

export default function BlogIndexPage() {
  const all = postsByDate();
  const [featured, ...rest] = all;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Navvic Trade Insights",
    url: url("/blog"),
    description: metadata.description,
    blogPost: all.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: url(`/blog/${p.slug}`),
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <main className="overflow-x-hidden">
      <JsonLd
        data={[
          blogSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <section className="relative pt-36 pb-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-ocean-400">
            Trade insights
          </span>
          <h1 className="font-display mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Move goods <span className="gradient-text">smarter</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            No-fluff playbooks on landed cost, HS codes, Incoterms, freight and sourcing — the same
            thinking we use to move our own containers. Written for importers and exporters who want
            to protect margin and clear customs cleanly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {featured && (
          <div className="mb-6">
            <BlogCard post={featured} featured />
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
