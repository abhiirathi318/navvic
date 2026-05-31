"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  HelpCircle,
  Loader2,
  AlertTriangle,
  Sparkles,
  ImagePlus,
  X,
  FileBadge,
  Stamp,
  Tag,
  Ban,
  FileText,
} from "lucide-react";
import NextSteps from "./NextSteps";
import { validateHsCodeIfPresent } from "@/lib/hs-code";

type Item = { name: string; detail: string; agency?: string };
type Result = {
  product: string;
  destination: string;
  destinationKey: string;
  verdict: "allowed" | "restricted" | "prohibited" | "needs_review";
  summary: string;
  licences?: Item[];
  certifications?: Item[];
  labelling?: Item[];
  restrictions?: Item[];
  documents?: string[];
  notes?: string;
};
type ImageState = { preview: string; mimeType: string; data: string } | null;

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

const VERDICTS = {
  allowed: { Icon: ShieldCheck, label: "Importable", cls: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
  restricted: { Icon: ShieldAlert, label: "Restricted", cls: "text-gold-400 bg-gold-400/10 border-gold-400/30" },
  prohibited: { Icon: ShieldX, label: "Prohibited", cls: "text-coral-500 bg-coral-500/10 border-coral-500/30" },
  needs_review: { Icon: HelpCircle, label: "Needs review", cls: "text-ocean-400 bg-ocean-400/10 border-ocean-400/30" },
} as const;

export default function ComplianceTool() {
  const q = useSearchParams();
  const [product, setProduct] = useState(q.get("product") ?? "");
  const [hsCode, setHsCode] = useState(q.get("hs") ?? "");
  const [destination, setDestination] = useState((q.get("country") ?? "US").toUpperCase());
  const [image, setImage] = useState<ImageState>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function onFile(file?: File) {
    if (!file) return;
    if (!file.type.startsWith("image/")) return setError("Please upload an image file.");
    if (file.size > 5 * 1024 * 1024) return setError("Image must be under 5 MB.");
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const comma = dataUrl.indexOf(",");
      const mime = dataUrl.slice(0, comma).match(/data:(.*);base64/)?.[1] || file.type;
      setImage({ preview: dataUrl, mimeType: mime, data: dataUrl.slice(comma + 1) });
      setError(null);
    };
    reader.readAsDataURL(file);
  }

  async function check(e?: React.FormEvent) {
    e?.preventDefault();
    if (product.trim().length < 3 && !hsCode.trim() && !image) {
      setError("Describe the product, add an HS code, or upload an image.");
      return;
    }
    const hsMinDigits = hsCode.trim() && product.trim().length < 3 && !image ? 6 : 4;
    const hsCheck = validateHsCodeIfPresent(hsCode, hsMinDigits);
    if (!hsCheck.ok) {
      setError(hsCheck.error);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/compliance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          hsCode: hsCheck.normalized ?? hsCode,
          destination,
          image: image ? { mimeType: image.mimeType, data: image.data } : undefined,
        }),
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
        <form onSubmit={check}>
          <label className="flex items-center gap-2 text-sm font-semibold text-ocean-400">
            <Sparkles size={16} /> Check import requirements
          </label>

          <div className="mt-3 flex gap-3">
            <div className="min-w-0 flex-1 space-y-3">
              <input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Product, e.g. Raw honey in glass jars"
                className={field}
              />
              <input
                value={hsCode}
                onChange={(e) => setHsCode(e.target.value)}
                placeholder="HS code (optional), e.g. 0409.00"
                className={field}
              />
            </div>
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onFile(e.dataTransfer.files?.[0]);
              }}
              className="relative flex w-28 shrink-0 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-surface text-center transition hover:border-ocean-400/60"
            >
              {image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image.preview} alt="upload" className="h-full w-full rounded-2xl object-cover" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setImage(null);
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white"
                  >
                    <X size={13} />
                  </button>
                </>
              ) : (
                <div className="px-2 py-4 text-muted">
                  <ImagePlus size={22} className="mx-auto" />
                  <span className="mt-1 block text-[11px] leading-tight">Upload / drop image</span>
                </div>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onFile(e.target.files?.[0] ?? undefined)}
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
            <button
              type="submit"
              disabled={loading}
              className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-ocean-600/25 transition-transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? <Loader2 size={17} className="animate-spin" /> : <ShieldCheck size={17} />}
              {loading ? "Checking…" : "Check compliance"}
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
            key={result.product + result.verdict}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-surface">
              <div className="border-b border-[var(--border)] bg-surface/60 p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-ocean-400">
                      {result.product} → {result.destination}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{result.summary}</p>
                  </div>
                  {(() => {
                    const v = VERDICTS[result.verdict] ?? VERDICTS.needs_review;
                    return (
                      <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold ${v.cls}`}>
                        <v.Icon size={15} /> {v.label}
                      </span>
                    );
                  })()}
                </div>
              </div>

              <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
                <Section icon={FileBadge} title="Licences & permits" items={result.licences} />
                <Section icon={Stamp} title="Certifications & standards" items={result.certifications} />
                <Section icon={Tag} title="Labelling & marking" items={result.labelling} />
                <Section icon={Ban} title="Restrictions & controls" items={result.restrictions} />
              </div>

              {result.documents && result.documents.length > 0 && (
                <div className="border-t border-[var(--border)] p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <FileText size={16} className="text-ocean-400" /> Border documents
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.documents.map((d) => (
                      <span key={d} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-muted">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-[var(--border)] p-5 text-xs leading-relaxed text-muted sm:p-6">
                {result.notes && (
                  <p>
                    <span className="font-semibold text-[var(--text)]">Notes: </span>
                    {result.notes}
                  </p>
                )}
                <p className="mt-2">
                  Indicative guidance: always confirm with the destination customs authority or a licensed broker
                  before shipping.
                </p>
              </div>
            </div>

            <NextSteps
              from="compliance"
              context={{ hs: hsCode, product: result.product, country: result.destinationKey }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof FileBadge;
  title: string;
  items?: Item[];
}) {
  return (
    <div className="bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Icon size={16} className="text-ocean-400" /> {title}
      </div>
      {items && items.length > 0 ? (
        <ul className="mt-3 space-y-3">
          {items.map((it, i) => (
            <li key={i} className="text-sm">
              <div className="font-medium">{it.name}</div>
              <div className="text-xs leading-relaxed text-muted">
                {it.detail}
                {it.agency && <span className="ml-1 font-semibold text-ocean-400">· {it.agency}</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-xs text-muted">None identified.</p>
      )}
    </div>
  );
}
