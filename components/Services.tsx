"use client";

import { Ship, Warehouse, FileCheck2, Boxes, Thermometer, Headset } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL & LCL container shipping across all major trade lanes with priority port handling.",
  },
  {
    icon: FileCheck2,
    title: "Customs & Compliance",
    desc: "End-to-end documentation, HS classification, and clearance handled by our in-house brokers.",
  },
  {
    icon: Warehouse,
    title: "Bonded Warehousing",
    desc: "Strategically located bonded storage near key ports for just-in-time distribution.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain",
    desc: "Reefer containers and temperature-controlled handling for chocolate and perishables.",
  },
  {
    icon: Boxes,
    title: "Consolidation",
    desc: "Mixed-SKU consolidation so you fill containers efficiently and cut per-unit freight cost.",
  },
  {
    icon: Headset,
    title: "Dedicated Desk",
    desc: "A single account manager and real-time tracking from purchase order to final mile.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <span className="font-display text-sm font-bold uppercase tracking-widest text-ocean-400">
          What we handle
        </span>
        <h2 className="font-display mt-2 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Freight, customs and everything in between.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-surface p-7 transition-all hover:-translate-y-1 hover:border-ocean-400/40 hover:shadow-2xl hover:shadow-ocean-600/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ocean-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-400/20 to-ocean-600/10 text-ocean-400">
                <s.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
