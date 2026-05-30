"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Loader2, AlertTriangle, Sparkles } from "lucide-react";
import NextSteps from "./NextSteps";

type Charge = { name: string; rate: string; basis?: string; amount: number };
type Result = {
  product: string;
  hs_code: string;
  currency: string;
  customs_value: number;
  charges: Charge[];
  total_duties_taxes: number;
  landed_cost: number;
  effective_rate: string;
  confidence?: number;
  assumptions?: string;
  notes?: string;
  destination: string;
};

const COUNTRIES = [
  { code: "IN", label: "🇮🇳 India" },
  { code: "US", label: "🇺🇸 USA" },
  { code: "EU", label: "🇪🇺 EU" },
  { code: "UK", label: "🇬🇧 UK" },
  { code: "CA", label: "🇨🇦 Canada" },
  { code: "AE", label: "🇦🇪 UAE" },
  { code: "AU", label: "🇦🇺 Australia" },
  { code: "GENERIC", label: "🌐 Generic" },
];
const INCOTERMS = ["CIF", "FOB", "EXW", "CFR", "DAP", "DDP"];

function money(n: number, ccy: string) {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency: ccy }).format(n);
  } catch {
    return `${ccy} ${n.toLocaleString()}`;
  }
}

export default function DutyTool() {
  const q = useSearchParams();
  const [hsCode, setHsCode] = useState(q.get("hs") ?? "");
  const [product, setProduct] = useState(q.get("product") ?? "");
  const [origin, setOrigin] = useState(q.get("origin") ?? "");
  const [destination, setDestination] = useState(
    (q.get("country") ?? "IN").toUpperCase()
  );
  const [value, setValue] = useState(q.get("value") ?? "");
  const [incoterm, setIncoterm] = useState((q.get("incoterm") ?? "CIF").toUpperCase());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function estimate(e?: React.FormEvent) {
    e?.preventDefault();
    if (!hsCode.trim() && !product.trim()) {
      setError("Enter an HS code or product description.");
      return;
    }
    if (!value || Number(value) <= 0) {
      setError("Enter the shipment value.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/duty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hsCode,
          product,
          origin,
          destination,
          value: Number(value),
          incoterm,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setResult(data as Result);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-2xl border border-[var(--border)] bg-surface px-4 py-3 outline-none transition focus:border-ocean-400/60";

  return (
    <div className="mx-auto max-w-4xl">
      <div className="glass rounded-3xl p-5 sm:p-7">
        <form onSubmit={estimate}>
          <label className="flex items-center gap-2 text-sm font-semibold text-ocean-400">
            <Sparkles size={16} /> Estimate duty &amp; landed cost
          </label>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <span className="mb-1 block text-xs text-muted">HS code</span>
              <input
                value={hsCode}
                onChange={(e) => setHsCode(e.target.value)}
                placeholder="e.g. 6203.42"
                className={field}
              />
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Product (optional)</span>
              <input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="e.g. Men's cotton jeans"
                className={field}
              />
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Shipment value</span>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="e.g. 10000"
                className={field}
              />
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Country of origin (optional)</span>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="e.g. China"
                className={field}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-end gap-4">
            <div>
              <span className="mb-1 block text-xs text-muted">Destination market</span>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-surface px-3 py-2.5 text-sm outline-none focus:border-ocean-400/60"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Incoterm (value basis)</span>
              <select
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-surface px-3 py-2.5 text-sm outline-none focus:border-ocean-400/60"
              >
                {INCOTERMS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-ocean-600/25 transition-transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Calculator size={17} />}
              {loading ? "Calculating…" : "Estimate"}
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-3 rounded-2xl border border-coral-500/30 bg-coral-500/10 p-4 text-sm"
          >
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-coral-500" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <div className="mt-6 h-48 animate-pulse rounded-3xl border border-[var(--border)] bg-surface/60" />
      )}

      <AnimatePresence>
        {result && !loading && (
          <motion.div
            key={result.hs_code + result.landed_cost}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-surface">
              <div className="border-b border-[var(--border)] bg-surface/60 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ocean-400">
                      Estimated landed cost · {result.hs_code}
                    </div>
                    <h2 className="font-display mt-1 text-3xl font-extrabold tracking-tight">
                      {money(result.landed_cost, result.currency)}
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-ocean-400/30 bg-ocean-400/10 px-4 py-3 text-center">
                    <div className="text-xs text-muted">Duties &amp; taxes</div>
                    <div className="font-display text-xl font-bold text-ocean-400">
                      {result.effective_rate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-muted">
                      <th className="pb-2 font-semibold">Charge</th>
                      <th className="pb-2 font-semibold">Rate</th>
                      <th className="hidden pb-2 font-semibold sm:table-cell">Basis</th>
                      <th className="pb-2 text-right font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--border)]">
                      <td className="py-2.5 font-medium">Customs value</td>
                      <td className="py-2.5 text-muted">—</td>
                      <td className="hidden py-2.5 text-muted sm:table-cell">{incoterm}</td>
                      <td className="py-2.5 text-right">{money(result.customs_value, result.currency)}</td>
                    </tr>
                    {result.charges?.map((c, i) => (
                      <tr key={i} className="border-t border-[var(--border)]">
                        <td className="py-2.5 font-medium">{c.name}</td>
                        <td className="py-2.5 text-muted">{c.rate}</td>
                        <td className="hidden py-2.5 text-muted sm:table-cell">{c.basis ?? "—"}</td>
                        <td className="py-2.5 text-right">{money(c.amount, result.currency)}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-[var(--border)] font-semibold text-ocean-400">
                      <td className="py-2.5">Total duties &amp; taxes</td>
                      <td className="py-2.5" />
                      <td className="hidden py-2.5 sm:table-cell" />
                      <td className="py-2.5 text-right">
                        {money(result.total_duties_taxes, result.currency)}
                      </td>
                    </tr>
                    <tr className="border-t-2 border-ocean-400/30 font-bold">
                      <td className="py-2.5">Landed cost</td>
                      <td className="py-2.5" />
                      <td className="hidden py-2.5 sm:table-cell" />
                      <td className="py-2.5 text-right">{money(result.landed_cost, result.currency)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 border-t border-[var(--border)] p-5 text-xs leading-relaxed text-muted sm:p-6">
                {result.assumptions && (
                  <p>
                    <span className="font-semibold text-[var(--text)]">Assumptions: </span>
                    {result.assumptions}
                  </p>
                )}
                {result.notes && (
                  <p>
                    <span className="font-semibold text-[var(--text)]">Notes: </span>
                    {result.notes}
                  </p>
                )}
                <p>Indicative estimate — verify against the official tariff and your broker before filing.</p>
              </div>
            </div>

            <NextSteps
              from="duty"
              context={{
                hs: result.hs_code,
                product: result.product,
                country: result.destination,
                origin,
                incoterm,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
