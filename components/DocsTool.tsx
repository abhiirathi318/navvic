"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Printer, Plus, Trash2, FileText } from "lucide-react";
import NextSteps from "./NextSteps";

type Line = {
  description: string;
  hs: string;
  qty: string;
  unit: string;
  price: string;
  netKg: string;
  grossKg: string;
};

const emptyLine = (description = "", hs = ""): Line => ({
  description,
  hs,
  qty: "1",
  unit: "pcs",
  price: "0",
  netKg: "0",
  grossKg: "0",
});

function n(v: string) {
  const x = parseFloat(v);
  return isNaN(x) ? 0 : x;
}

export default function DocsTool() {
  const q = useSearchParams();
  const today = new Date().toISOString().slice(0, 10);

  const [exporter, setExporter] = useState("Navvic Trading LLP\n12 Harbour Road, Mumbai 400001, India\nGSTIN / IEC: ABCDE1234F");
  const [consignee, setConsignee] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("INV-0001");
  const [date, setDate] = useState(today);
  const [incoterm, setIncoterm] = useState((q.get("incoterm") ?? "FOB").toUpperCase());
  const [origin, setOrigin] = useState("India");
  const [destination, setDestination] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [terms, setTerms] = useState("100% advance via T/T");
  const [lines, setLines] = useState<Line[]>([
    emptyLine(q.get("product") ?? "", q.get("hs") ?? ""),
  ]);

  function updateLine(i: number, patch: Partial<Line>) {
    setLines((ls) => ls.map((l, idx) => (idx === i ? { ...l, ...patch } : l)));
  }

  const totalValue = lines.reduce((s, l) => s + n(l.qty) * n(l.price), 0);
  const totalNet = lines.reduce((s, l) => s + n(l.netKg), 0);
  const totalGross = lines.reduce((s, l) => s + n(l.grossKg), 0);
  const totalQty = lines.reduce((s, l) => s + n(l.qty), 0);

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-surface px-3 py-2 text-sm outline-none transition focus:border-ocean-400/60";

  return (
    <div className="mx-auto max-w-5xl">
      {/* form */}
      <div className="glass no-print rounded-3xl p-5 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-ocean-400">
          <FileText size={16} /> Shipment details
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Exporter (you)</span>
            <textarea rows={3} value={exporter} onChange={(e) => setExporter(e.target.value)} className={`resize-none ${field}`} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Consignee (buyer)</span>
            <textarea rows={3} value={consignee} onChange={(e) => setConsignee(e.target.value)} placeholder="Buyer name & full address" className={`resize-none ${field}`} />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Invoice no.</span>
            <input value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} className={field} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Date</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Incoterm</span>
            <input value={incoterm} onChange={(e) => setIncoterm(e.target.value.toUpperCase())} className={field} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Currency</span>
            <input value={currency} onChange={(e) => setCurrency(e.target.value.toUpperCase())} className={field} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Country of origin</span>
            <input value={origin} onChange={(e) => setOrigin(e.target.value)} className={field} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Destination</span>
            <input value={destination} onChange={(e) => setDestination(e.target.value)} className={field} />
          </label>
          <label className="col-span-2 block">
            <span className="mb-1 block text-xs text-muted">Payment terms</span>
            <input value={terms} onChange={(e) => setTerms(e.target.value)} className={field} />
          </label>
        </div>

        {/* line items */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Line items</span>
            <button
              onClick={() => setLines((ls) => [...ls, emptyLine()])}
              className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-xs font-semibold transition hover:border-ocean-400/50 hover:text-ocean-400"
            >
              <Plus size={13} /> Add line
            </button>
          </div>

          <div className="mt-3 space-y-3">
            {lines.map((l, i) => (
              <div key={i} className="rounded-2xl border border-[var(--border)] p-3">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-12">
                  <input className={`sm:col-span-4 ${field}`} placeholder="Description" value={l.description} onChange={(e) => updateLine(i, { description: e.target.value })} />
                  <input className={`sm:col-span-2 ${field}`} placeholder="HS code" value={l.hs} onChange={(e) => updateLine(i, { hs: e.target.value })} />
                  <input className={`sm:col-span-1 ${field}`} placeholder="Qty" value={l.qty} onChange={(e) => updateLine(i, { qty: e.target.value })} />
                  <input className={`sm:col-span-1 ${field}`} placeholder="Unit" value={l.unit} onChange={(e) => updateLine(i, { unit: e.target.value })} />
                  <input className={`sm:col-span-2 ${field}`} placeholder="Unit price" value={l.price} onChange={(e) => updateLine(i, { price: e.target.value })} />
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <input className={field} placeholder="Net kg" value={l.netKg} onChange={(e) => updateLine(i, { netKg: e.target.value })} />
                    {lines.length > 1 && (
                      <button onClick={() => setLines((ls) => ls.filter((_, idx) => idx !== i))} className="shrink-0 text-coral-500" aria-label="Remove">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-12">
                  <input className={`sm:col-span-2 sm:col-start-11 ${field}`} placeholder="Gross kg" value={l.grossKg} onChange={(e) => updateLine(i, { grossKg: e.target.value })} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-ocean-600/25 transition-transform hover:scale-105"
        >
          <Printer size={17} /> Print / Save as PDF
        </button>
      </div>

      {/* printable preview */}
      <div className="print-area mt-6 space-y-6">
        <Document
          title="Commercial Invoice"
          exporter={exporter}
          consignee={consignee}
          invoiceNo={invoiceNo}
          date={date}
          incoterm={incoterm}
          origin={origin}
          destination={destination}
          terms={terms}
          lines={lines}
          currency={currency}
          mode="invoice"
          totals={{ totalValue, totalQty, totalNet, totalGross }}
        />
        <div className="page-break" />
        <Document
          title="Packing List"
          exporter={exporter}
          consignee={consignee}
          invoiceNo={invoiceNo}
          date={date}
          incoterm={incoterm}
          origin={origin}
          destination={destination}
          terms={terms}
          lines={lines}
          currency={currency}
          mode="packing"
          totals={{ totalValue, totalQty, totalNet, totalGross }}
        />
      </div>

      <div className="no-print">
        <NextSteps from="docs" heading="Before you ship" />
      </div>
    </div>
  );
}

function Document({
  title,
  exporter,
  consignee,
  invoiceNo,
  date,
  incoterm,
  origin,
  destination,
  terms,
  lines,
  currency,
  mode,
  totals,
}: {
  title: string;
  exporter: string;
  consignee: string;
  invoiceNo: string;
  date: string;
  incoterm: string;
  origin: string;
  destination: string;
  terms: string;
  lines: Line[];
  currency: string;
  mode: "invoice" | "packing";
  totals: { totalValue: number; totalQty: number; totalNet: number; totalGross: number };
}) {
  const cell = "border border-[var(--border)] px-3 py-2 align-top";
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-surface p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-tight">{title}</div>
          <div className="mt-0.5 text-xs uppercase tracking-widest text-ocean-400">Navvic | International Trade</div>
        </div>
        <div className="text-right text-sm">
          <div><span className="text-muted">No.: </span><span className="font-semibold">{invoiceNo}</span></div>
          <div><span className="text-muted">Date: </span>{date}</div>
          <div><span className="text-muted">Incoterm: </span>{incoterm}</div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase text-muted">Exporter</div>
          <div className="mt-1 whitespace-pre-line">{exporter}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase text-muted">Consignee</div>
          <div className="mt-1 whitespace-pre-line">{consignee || "-"}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase text-muted">Country of origin</div>
          <div className="mt-1">{origin || "-"}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase text-muted">Destination</div>
          <div className="mt-1">{destination || "-"}</div>
        </div>
      </div>

      <table className="mt-5 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-ocean-400/10 text-left text-xs uppercase tracking-wide">
            <th className={cell}>#</th>
            <th className={cell}>Description</th>
            <th className={cell}>HS code</th>
            <th className={cell}>Qty</th>
            {mode === "invoice" ? (
              <>
                <th className={cell}>Unit price</th>
                <th className={cell}>Amount</th>
              </>
            ) : (
              <>
                <th className={cell}>Net (kg)</th>
                <th className={cell}>Gross (kg)</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {lines.map((l, i) => (
            <tr key={i}>
              <td className={cell}>{i + 1}</td>
              <td className={cell}>{l.description || "-"}</td>
              <td className={cell}>{l.hs || "-"}</td>
              <td className={cell}>{n(l.qty)} {l.unit}</td>
              {mode === "invoice" ? (
                <>
                  <td className={cell}>{currency} {n(l.price).toFixed(2)}</td>
                  <td className={cell}>{currency} {(n(l.qty) * n(l.price)).toFixed(2)}</td>
                </>
              ) : (
                <>
                  <td className={cell}>{n(l.netKg).toFixed(2)}</td>
                  <td className={cell}>{n(l.grossKg).toFixed(2)}</td>
                </>
              )}
            </tr>
          ))}
          <tr className="font-bold">
            <td className={cell} colSpan={3}>Total</td>
            <td className={cell}>{totals.totalQty}</td>
            {mode === "invoice" ? (
              <>
                <td className={cell} />
                <td className={cell}>{currency} {totals.totalValue.toFixed(2)}</td>
              </>
            ) : (
              <>
                <td className={cell}>{totals.totalNet.toFixed(2)}</td>
                <td className={cell}>{totals.totalGross.toFixed(2)}</td>
              </>
            )}
          </tr>
        </tbody>
      </table>

      {mode === "invoice" && (
        <div className="mt-4 text-sm">
          <span className="text-muted">Payment terms: </span>
          {terms || "-"}
        </div>
      )}

      <div className="mt-8 flex items-end justify-between text-sm">
        <div className="text-xs text-muted">
          {mode === "invoice"
            ? "We certify the above information is true and correct."
            : "Packing details as declared by the exporter."}
        </div>
        <div className="text-center">
          <div className="h-12 w-44 border-b border-[var(--border)]" />
          <div className="mt-1 text-xs text-muted">Authorised signatory</div>
        </div>
      </div>
    </div>
  );
}
