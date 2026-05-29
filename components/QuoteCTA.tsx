"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function QuoteCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-ocean-400/20 bg-gradient-to-br from-abyss-800 to-abyss-950 p-8 text-foam-100 sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ocean-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-coral-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let's fill your next container.
              </h2>
              <p className="mt-4 max-w-md text-foam-200/80">
                Tell us what you need and where it's going. Our trade desk replies with indicative
                pricing and transit times within one business day.
              </p>
              <div className="mt-8 space-y-3 text-sm text-foam-200/80">
                <div>📦 Mixed-SKU consolidation welcome</div>
                <div>🚢 FCL &amp; LCL options on every lane</div>
                <div>📄 Full customs documentation included</div>
              </div>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-3xl bg-white/5 p-10 text-center backdrop-blur"
              >
                <CheckCircle2 size={56} className="text-ocean-300" />
                <h3 className="font-display mt-4 text-2xl font-bold">Quote request received</h3>
                <p className="mt-2 text-foam-200/80">Our trade desk will reach out within one business day.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company" placeholder="Acme Distribution" />
                  <Field label="Email" type="email" placeholder="you@company.com" />
                </div>
                <Field label="Destination port" placeholder="Jebel Ali, Dubai" />
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-foam-200/80">What are you sourcing?</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g. 2 x 20ft of assorted chocolate & pasta"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foam-100 placeholder:text-foam-200/40 outline-none transition focus:border-ocean-300/60"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ocean-400 to-ocean-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Send request
                  <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-foam-200/80">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foam-100 placeholder:text-foam-200/40 outline-none transition focus:border-ocean-300/60"
      />
    </div>
  );
}
