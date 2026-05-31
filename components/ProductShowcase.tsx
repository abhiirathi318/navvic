"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { products, categories } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function ProductShowcase() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <span className="font-display text-sm font-bold uppercase tracking-widest text-ocean-400">
          Featured catalog
        </span>
        <h2 className="font-display mt-2 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Premium FMCG brands, ready to ship.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A curated selection of the most-loved European and North American brands, fully traceable,
          certified, and priced for container-scale distribution.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              active === c
                ? "bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg shadow-ocean-600/25"
                : "border border-[var(--border)] bg-surface text-muted hover:border-ocean-400/50 hover:text-ocean-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
