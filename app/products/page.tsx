import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { url, breadcrumbSchema } from "@/lib/seo";
import { products } from "@/lib/products";

export const metadata = {
  title: "FMCG Product Catalog — Import & Export",
  description:
    "Browse Navvic's catalog of premium FMCG brands for import and export — chocolate, pasta, snacks, beverages and pantry. See specs, MOQs and container loads, and request a quote.",
  keywords: [
    "FMCG products",
    "FMCG wholesale",
    "import export catalog",
    "FMCG brands distributor",
    "bulk FMCG sourcing",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    title: "FMCG Product Catalog | Navvic",
    description:
      "Premium FMCG brands for import & export — specs, MOQs and container loads.",
    url: url("/products"),
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Navvic FMCG catalog",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: url(`/products/${p.slug}`),
    name: p.name,
  })),
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd
        data={[
          catalogSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Catalog", path: "/products" },
          ]),
        ]}
      />
      <section className="relative overflow-hidden pt-36 pb-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            The <span className="gradient-text">Catalog</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Every SKU we move: browse by category and dive into specs, MOQs and container loads.
          </p>
        </div>
      </section>
      <ProductShowcase />
      <Footer />
    </main>
  );
}
