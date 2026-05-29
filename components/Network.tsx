"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const lanes = [
  { from: "Rotterdam", to: "Mumbai", days: "18 days" },
  { from: "Hamburg", to: "Singapore", days: "22 days" },
  { from: "New York", to: "Dubai", days: "24 days" },
  { from: "Montreal", to: "Colombo", days: "26 days" },
  { from: "Genoa", to: "Jakarta", days: "25 days" },
];

export default function Network() {
  return (
    <section id="network" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ocean-400/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="font-display text-sm font-bold uppercase tracking-widest text-ocean-400">
              Global network
            </span>
            <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Trade lanes that connect continents.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              From the ports of Northern Europe to North American gateways, Navvic runs a resilient
              multi-carrier network engineered for transit-time reliability.
            </p>

            <div className="mt-8 space-y-3">
              {lanes.map((l, i) => (
                <Reveal key={l.from} delay={i * 0.05}>
                  <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-surface px-5 py-3.5">
                    <div className="flex items-center gap-3 font-semibold">
                      <span>{l.from}</span>
                      <span className="text-ocean-400">⟶</span>
                      <span>{l.to}</span>
                    </div>
                    <span className="text-sm text-muted">{l.days}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-square w-full">
              {/* radar globe */}
              <div className="absolute inset-0 rounded-full border border-ocean-400/20" />
              <div className="absolute inset-6 rounded-full border border-ocean-400/20" />
              <div className="absolute inset-14 rounded-full border border-ocean-400/20" />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(34,167,201,0.35) 60deg, transparent 120deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {[
                { t: "12%", l: "30%" },
                { t: "40%", l: "70%" },
                { t: "65%", l: "22%" },
                { t: "55%", l: "55%" },
                { t: "28%", l: "60%" },
              ].map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-coral-500 shadow-lg shadow-coral-500/50"
                  style={{ top: p.t, left: p.l }}
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl">
                🌊
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
