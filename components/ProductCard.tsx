"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import BrandLogo from "./BrandLogo";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-surface transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ocean-600/15"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <BrandLogo brand={product.brand} accent={product.accent} />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {product.originFlag} {product.origin}
          </span>
          <span
            className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
            style={{ backgroundColor: product.accent }}
          >
            {product.category}
          </span>
          <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-abyss-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-ocean-400">{product.brand}</div>
          <h3 className="font-display mt-1 line-clamp-2 text-lg font-bold leading-snug">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{product.blurb}</p>

          <div className="mt-auto flex items-end justify-between pt-5">
            <div className="text-xs text-muted">
              <div className="font-semibold text-[var(--text)]">MOQ {product.moq}</div>
              <div>Lead time {product.leadTime}</div>
            </div>
            <span className="text-xs font-semibold text-ocean-400">View details →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
