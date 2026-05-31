"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Ship, ShieldCheck } from "lucide-react";
import OceanScene from "./OceanScene";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* deep ocean gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foam-100 via-[var(--bg)] to-ocean-300/20 dark:from-abyss-950 dark:via-abyss-900 dark:to-abyss-800" />
      <div className="absolute inset-0 -z-10 grid-texture opacity-60" />

      {/* floating glow orbs */}
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-ocean-400/20 blur-3xl animate-float" />
      <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-coral-500/15 blur-3xl animate-float-slow" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-4 pb-40 pt-32 sm:px-6"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ocean-400/30 bg-ocean-400/10 px-4 py-1.5 text-sm font-medium text-ocean-400 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean-400" />
          </span>
          Global FMCG sourcing & ocean freight
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          We move the world's <span className="gradient-text">favorite brands</span> across every ocean.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-muted">
          Navvic is your end-to-end import &amp; export partner, sourcing premium FMCG products
          from Europe, the US and Canada and delivering them container-by-container to your shelves.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="#products"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-ocean-600/30 transition-all hover:scale-105 hover:shadow-ocean-600/50"
          >
            Explore products
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-surface px-6 py-3.5 font-semibold transition-colors hover:border-ocean-400/50"
          >
            Request a quote
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {[
            { icon: Globe2, label: "Countries served", value: "40+" },
            { icon: Ship, label: "TEUs shipped / yr", value: "12k" },
            { icon: ShieldCheck, label: "On-time delivery", value: "99.2%" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4">
              <s.icon size={20} className="text-ocean-400" />
              <div className="font-display mt-2 text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <OceanScene />
    </section>
  );
}
