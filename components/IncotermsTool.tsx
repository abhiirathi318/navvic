"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Loader2, AlertTriangle, Sparkles, MapPin, ArrowRightLeft } from "lucide-react";
import NextSteps from "./NextSteps";

type Responsibility = { stage: string; party: "Seller" | "Buyer" };
type Alt = { incoterm: string; why: string };
type Result = {
  incoterm: string;
  incoterm_name: string;
  suitable_modes?: string;
  summary: string;
  risk_transfer: string;
  responsibilities: Responsibility[];
  seller_duties: string[];
  buyer_duties: string[];
  alternatives?: Alt[];
  tips?: string;
};

const ALL_TERMS = ["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CPT", "CIP", "DAP", "DPU", "DDP"];
const MODES = ["Sea / ocean", "Air", "Road / truck", "Rail", "Multimodal / container"];
const ROLES = ["Seller / Exporter", "Buyer / Importer"];

export default function IncotermsTool() {
  const q = useSearchParams();
  const [scenario, setScenario] = useState(
    q.get("product") ? `Shipping ${q.get("product")}.` : ""
  );
  const [role, setRole] = useState("");
  const [mode, setMode] = useState("");
  const [incoterm, setIncoterm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function advise(opts?: { term?: string }) {
    const term = opts?.term ?? incoterm;
    if (scenario.trim().length < 5 && !term) {
      setError("Describe your scenario or pick an Incoterm to explain.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/incoterms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario, role, mode, incoterm: term }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setResult(data as Result);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-2xl border border-[var(--border)] bg-surface px-4 py-3 outline-none transition focus:border-ocean-400/60";

  return (
    <div className="mx-auto max-w-4xl">
      <div className="glass rounded-3xl p-5 sm:p-7">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            advise();
          }}
        >
          <label className="flex items-center gap-2 text-sm font-semibold text-ocean-400">
            <Sparkles size={16} /> Describe your deal and get the right Incoterm
          </label>
          <textarea
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            rows={3}
            placeholder="e.g. I'm in India selling cotton garments to a buyer in Germany. I can deliver to Mumbai port but don't want to handle insurance or German customs."
            className={`mt-3 resize-none ${field}`}
          />

          <div className="mt-4 flex flex-wrap items-end gap-4">
            <div>
              <span className="mb-1 block text-xs text-muted">You are</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-surface px-3 py-2.5 text-sm outline-none focus:border-ocean-400/60"
              >
                <option value="">Select</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className="mb-1 block text-xs text-muted">Transport mode</span>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-surface px-3 py-2.5 text-sm outline-none focus:border-ocean-400/60"
              >
                <option value="">Select</option>
                {MODES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-ocean-600/25 transition-transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Scale size={17} />}
              {loading ? "Advising…" : "Recommend term"}
            </button>
          </div>
        </form>

        <div className="mt-5">
          <span className="text-xs text-muted">Or explain a specific term:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {ALL_TERMS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setIncoterm(t);
                  advise({ term: t });
                }}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-ocean-400/50 hover:text-ocean-400"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
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
            key={result.incoterm + result.summary}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-surface">
              <div className="border-b border-[var(--border)] bg-surface/60 p-5 sm:p-6">
                <h2 className="font-display text-3xl font-extrabold tracking-tight">
                  <span className="gradient-text">{result.incoterm}</span>{" "}
                  <span className="text-muted">: {result.incoterm_name}</span>
                </h2>
                {result.suitable_modes && (
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-ocean-400">
                    {result.suitable_modes}
                  </div>
                )}
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{result.summary}</p>
                <div className="mt-4 flex items-start gap-2 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-3 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>
                    <span className="font-semibold">Risk transfers: </span>
                    {result.risk_transfer}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ArrowRightLeft size={16} className="text-ocean-400" /> Who bears each cost
                </div>
                <div className="mt-3 space-y-1.5">
                  {result.responsibilities?.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-sm"
                    >
                      <span>{r.stage}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          r.party === "Seller"
                            ? "bg-ocean-400/15 text-ocean-400"
                            : "bg-coral-500/15 text-coral-500"
                        }`}
                      >
                        {r.party}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-px border-t border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
                <Duties title="Seller's responsibilities" items={result.seller_duties} tone="ocean" />
                <Duties title="Buyer's responsibilities" items={result.buyer_duties} tone="coral" />
              </div>

              {result.alternatives && result.alternatives.length > 0 && (
                <div className="border-t border-[var(--border)] p-5 sm:p-6">
                  <div className="text-sm font-semibold">Worth considering instead</div>
                  <div className="mt-3 space-y-2">
                    {result.alternatives.map((a) => (
                      <div key={a.incoterm} className="text-sm">
                        <span className="font-bold text-ocean-400">{a.incoterm}</span>
                        <span className="text-muted">: {a.why}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {result.tips && (
                <div className="border-t border-[var(--border)] p-5 text-xs leading-relaxed text-muted sm:p-6">
                  <span className="font-semibold text-[var(--text)]">Tips: </span>
                  {result.tips}
                </div>
              )}
            </div>

            <NextSteps from="incoterms" context={{ incoterm: result.incoterm }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Duties({ title, items, tone }: { title: string; items: string[]; tone: "ocean" | "coral" }) {
  const dot = tone === "ocean" ? "bg-ocean-400" : "bg-coral-500";
  return (
    <div className="bg-surface p-5 sm:p-6">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2">
        {items?.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
