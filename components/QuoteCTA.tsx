"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

type FormState = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  origin: string;
  destinationPort: string;
  mode: string;
  incoterm: string;
  volume: string;
  sourcing: string;
};

const emptyForm: FormState = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  origin: "",
  destinationPort: "",
  mode: "",
  incoterm: "",
  volume: "",
  sourcing: "",
};

const MODES = ["Sea — FCL", "Sea — LCL", "Air freight", "Not sure yet"];
const INCOTERMS = ["EXW", "FOB", "CIF", "CFR", "DAP", "DDP", "Not sure yet"];

export default function QuoteCTA() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const origin = params.get("origin");
    const incoterm = params.get("incoterm");
    setForm((prev) => ({
      ...prev,
      sourcing: prev.sourcing || (product ? `Quote request for: ${product}` : ""),
      origin: prev.origin || origin || "",
      incoterm:
        prev.incoterm ||
        (incoterm && INCOTERMS.includes(incoterm.toUpperCase())
          ? incoterm.toUpperCase()
          : ""),
    }));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section id="quote" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-ocean-400/20 bg-gradient-to-br from-abyss-800 to-abyss-950 p-8 text-foam-100 sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ocean-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-coral-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let&apos;s fill your next container.
              </h2>
              <p className="mt-4 max-w-md text-foam-200/80">
                Tell us what you need and where it&apos;s going. The more you share, the sharper our
                first quote. Our trade desk replies with indicative pricing and transit times within
                one business day.
              </p>
              <div className="mt-8 space-y-3 text-sm text-foam-200/80">
                <div>📦 Mixed-SKU consolidation welcome</div>
                <div>🚢 FCL &amp; LCL options on every lane</div>
                <div>📄 Full customs documentation included</div>
                <div>🔒 Your details are used only to prepare your quote</div>
              </div>
              <p className="mt-8 text-sm text-foam-200/60">
                Prefer email?{" "}
                <a href="mailto:support@navvic.com" className="text-ocean-300 hover:underline">
                  support@navvic.com
                </a>
              </p>
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
              <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Company"
                    placeholder="Acme Distribution"
                    value={form.company}
                    onChange={(v) => updateField("company", v)}
                  />
                  <Field
                    label="Contact name"
                    placeholder="Jordan Lee"
                    value={form.contactName}
                    onChange={(v) => updateField("contactName", v)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                  />
                  <Field
                    label="Phone / WhatsApp"
                    type="tel"
                    required={false}
                    optional
                    placeholder="+971 50 123 4567"
                    value={form.phone}
                    onChange={(v) => updateField("phone", v)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Sourcing from"
                    required={false}
                    optional
                    placeholder="Italy, Germany, USA…"
                    value={form.origin}
                    onChange={(v) => updateField("origin", v)}
                  />
                  <Field
                    label="Destination port / city"
                    placeholder="Jebel Ali, Dubai"
                    value={form.destinationPort}
                    onChange={(v) => updateField("destinationPort", v)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Select
                    label="Shipping mode"
                    optional
                    placeholder="Select mode"
                    options={MODES}
                    value={form.mode}
                    onChange={(v) => updateField("mode", v)}
                  />
                  <Select
                    label="Incoterm"
                    optional
                    placeholder="Select Incoterm"
                    options={INCOTERMS}
                    value={form.incoterm}
                    onChange={(v) => updateField("incoterm", v)}
                  />
                </div>
                <Field
                  label="Estimated volume"
                  required={false}
                  optional
                  placeholder="e.g. 2 × 20ft / 10 pallets / 5,000 units / month"
                  value={form.volume}
                  onChange={(v) => updateField("volume", v)}
                />
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-foam-200/80">What are you sourcing?</label>
                  <textarea
                    required
                    rows={3}
                    value={form.sourcing}
                    onChange={(e) => updateField("sourcing", e.target.value)}
                    placeholder="e.g. 2 x 20ft of assorted chocolate & pasta"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foam-100 placeholder:text-foam-200/40 outline-none transition focus:border-ocean-300/60"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-xl border border-coral-500/30 bg-coral-500/10 px-4 py-3 text-sm text-coral-200">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ocean-400 to-ocean-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send request
                      <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-foam-200/50">
                  No obligation. We reply within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FieldLabel({ label, optional }: { label: string; optional?: boolean }) {
  return (
    <label className="text-sm font-medium text-foam-200/80">
      {label}
      {optional && <span className="ml-1 text-xs font-normal text-foam-200/40">(optional)</span>}
    </label>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
  optional = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <FieldLabel label={label} optional={optional} />
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foam-100 placeholder:text-foam-200/40 outline-none transition focus:border-ocean-300/60"
      />
    </div>
  );
}

function Select({
  label,
  options,
  placeholder,
  value,
  onChange,
  optional = false,
}: {
  label: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  optional?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <FieldLabel label={label} optional={optional} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-ocean-300/60 ${
          value ? "text-foam-100" : "text-foam-200/40"
        }`}
      >
        <option value="" className="text-abyss-900">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-abyss-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
