"use client";

import { useMemo, useState } from "react";
import { Container, Boxes, Plane, Ship, Weight, Box } from "lucide-react";
import NextSteps from "./NextSteps";

const CONTAINERS = [
  { key: "20", label: "20ft Standard", cbm: 33.2, payload: 28200 },
  { key: "40", label: "40ft Standard", cbm: 67.7, payload: 28800 },
  { key: "40HC", label: "40ft High Cube", cbm: 76.3, payload: 28560 },
];

function num(v: string) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

export default function FreightTool() {
  const [l, setL] = useState("60");
  const [w, setW] = useState("40");
  const [h, setH] = useState("40");
  const [weight, setWeight] = useState("15");
  const [qty, setQty] = useState("100");
  const [container, setContainer] = useState("40");

  const r = useMemo(() => {
    const unitCbm = (num(l) * num(w) * num(h)) / 1_000_000; // cm³ → m³
    const cartons = Math.max(0, Math.round(num(qty)));
    const unitWeight = num(weight);
    const totalCbm = unitCbm * cartons;
    const totalWeight = unitWeight * cartons;

    // Air: IATA volumetric divisor 6000 cm³/kg ⇒ 167 kg per m³
    const airVolWeight = totalCbm * 167;
    const airChargeable = Math.max(totalWeight, airVolWeight);

    // Sea LCL: revenue ton = greater of CBM or metric tonnes (W/M)
    const seaRevenueTons = Math.max(totalCbm, totalWeight / 1000);

    const spec = CONTAINERS.find((c) => c.key === container) ?? CONTAINERS[1];
    const byVolume = unitCbm > 0 ? Math.floor(spec.cbm / unitCbm) : 0;
    const byWeight = unitWeight > 0 ? Math.floor(spec.payload / unitWeight) : 0;
    const perContainer = Math.max(0, Math.min(byVolume, byWeight));
    const limited = byVolume <= byWeight ? "volume" : "weight";
    const containersNeeded = perContainer > 0 ? Math.ceil(cartons / perContainer) : 0;
    const volUtil = spec.cbm > 0 ? Math.min(100, (totalCbm / (spec.cbm * Math.max(1, containersNeeded))) * 100) : 0;
    const wtUtil =
      spec.payload > 0 ? Math.min(100, (totalWeight / (spec.payload * Math.max(1, containersNeeded))) * 100) : 0;

    // Mode recommendation heuristic
    let mode = "Sea FCL";
    let modeWhy = "Volume justifies a full container — usually the lowest cost per unit.";
    if (totalCbm < 2 && totalWeight < 200) {
      mode = "Air freight";
      modeWhy = "Small, light shipment — air is fast and the volume is too low for sea economics.";
    } else if (totalCbm < spec.cbm * 0.6) {
      mode = "Sea LCL";
      modeWhy = "Too little volume to fill a container — share one and pay only for the space you use.";
    }

    return {
      unitCbm,
      cartons,
      totalCbm,
      totalWeight,
      airVolWeight,
      airChargeable,
      seaRevenueTons,
      spec,
      perContainer,
      limited,
      containersNeeded,
      volUtil,
      wtUtil,
      mode,
      modeWhy,
    };
  }, [l, w, h, weight, qty, container]);

  const field =
    "w-full rounded-2xl border border-[var(--border)] bg-surface px-4 py-3 outline-none transition focus:border-ocean-400/60";

  return (
    <div className="mx-auto max-w-4xl">
      <div className="glass rounded-3xl p-5 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-ocean-400">
          <Box size={16} /> Carton &amp; shipment details
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div>
            <span className="mb-1 block text-xs text-muted">Length (cm)</span>
            <input type="number" value={l} onChange={(e) => setL(e.target.value)} className={field} />
          </div>
          <div>
            <span className="mb-1 block text-xs text-muted">Width (cm)</span>
            <input type="number" value={w} onChange={(e) => setW(e.target.value)} className={field} />
          </div>
          <div>
            <span className="mb-1 block text-xs text-muted">Height (cm)</span>
            <input type="number" value={h} onChange={(e) => setH(e.target.value)} className={field} />
          </div>
          <div>
            <span className="mb-1 block text-xs text-muted">Gross wt / carton (kg)</span>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className={field} />
          </div>
          <div>
            <span className="mb-1 block text-xs text-muted">Number of cartons</span>
            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} className={field} />
          </div>
          <div>
            <span className="mb-1 block text-xs text-muted">Container</span>
            <select
              value={container}
              onChange={(e) => setContainer(e.target.value)}
              className="w-full rounded-2xl border border-[var(--border)] bg-surface px-3 py-3 text-sm outline-none focus:border-ocean-400/60"
            >
              {CONTAINERS.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* summary stats */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={Boxes} label="Total volume" value={`${r.totalCbm.toFixed(2)} m³`} sub={`${r.unitCbm.toFixed(3)} m³/carton`} />
        <Stat icon={Weight} label="Total gross weight" value={`${r.totalWeight.toLocaleString()} kg`} sub={`${r.cartons} cartons`} />
        <Stat icon={Plane} label="Air chargeable wt" value={`${Math.round(r.airChargeable).toLocaleString()} kg`} sub={`vol wt ${Math.round(r.airVolWeight).toLocaleString()} kg`} />
        <Stat icon={Ship} label="Sea LCL (W/M)" value={`${r.seaRevenueTons.toFixed(2)} RT`} sub="revenue tons" />
      </div>

      {/* container fit */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-surface">
        <div className="border-b border-[var(--border)] bg-surface/60 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Container size={18} className="text-ocean-400" />
            <h2 className="font-display text-lg font-bold">{r.spec.label} loading</h2>
          </div>
        </div>
        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-3">
          <Cell label="Cartons per container" value={r.perContainer.toLocaleString()} sub={`limited by ${r.limited}`} />
          <Cell label="Containers required" value={r.containersNeeded.toLocaleString()} sub={`for ${r.cartons} cartons`} />
          <Cell label="Utilisation" value={`${Math.round(Math.max(r.volUtil, r.wtUtil))}%`} sub={`vol ${Math.round(r.volUtil)}% · wt ${Math.round(r.wtUtil)}%`} />
        </div>
        <div className="border-t border-[var(--border)] p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-ocean-400/15 px-3 py-1 text-xs font-bold text-ocean-400">
              Suggested mode: {r.mode}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{r.modeWhy}</p>
          <p className="mt-3 text-xs text-muted">
            Capacities use practical loadable volume ({r.spec.cbm} m³) and max payload ({r.spec.payload.toLocaleString()} kg).
            Real fill depends on stacking, pallet patterns and carrier limits.
          </p>
        </div>
      </div>

      <NextSteps from="freight" heading="Now cost and document the shipment" />
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Boxes;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-surface p-4">
      <div className="flex items-center gap-2 text-xs text-muted">
        <Icon size={14} className="text-ocean-400" /> {label}
      </div>
      <div className="font-display mt-1.5 text-xl font-bold">{value}</div>
      <div className="text-[11px] text-muted">{sub}</div>
    </div>
  );
}

function Cell({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-surface p-5 text-center sm:p-6">
      <div className="text-xs text-muted">{label}</div>
      <div className="font-display mt-1 text-2xl font-extrabold text-ocean-400">{value}</div>
      <div className="text-[11px] text-muted">{sub}</div>
    </div>
  );
}
