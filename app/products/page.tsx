import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Catalog — Navvic",
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden pt-36 pb-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            The <span className="gradient-text">Catalog</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Every SKU we move — browse by category and dive into specs, MOQs and container loads.
          </p>
        </div>
      </section>
      <ProductShowcase />
      <Footer />
    </main>
  );
}
