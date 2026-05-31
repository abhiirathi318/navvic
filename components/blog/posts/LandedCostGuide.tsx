import Link from "next/link";

export default function LandedCostGuide() {
  return (
    <>
      <p>
        Ask ten importers what a product costs them and most will quote the number on the
        supplier&rsquo;s invoice. That number is almost always wrong — sometimes by 30% or more. The
        figure that should drive your pricing, your margins and your go/no-go decision is the{" "}
        <strong>landed cost</strong>: everything you spend to get one unit sitting in your warehouse,
        cleared and ready to sell.
      </p>
      <p>
        Get landed cost right and you can price aggressively without bleeding margin. Get it wrong and
        you discover the problem only when the customs bill, the demurrage invoice and the bank&rsquo;s
        FX spread all land in the same week. This guide breaks the number down piece by piece, walks
        through a worked example, and points you at a free calculator so you never have to do it on a
        napkin again.
      </p>

      <h2>What &ldquo;landed cost&rdquo; actually includes</h2>
      <p>
        Landed cost is the sum of every cost incurred between the factory gate and your shelf. It
        falls into five buckets:
      </p>
      <ul>
        <li>
          <strong>Product cost</strong> — the unit price you negotiated, plus any tooling, sampling or
          packaging charges amortised across the order.
        </li>
        <li>
          <strong>Freight</strong> — ocean, air or road. For a sea shipment this includes origin
          haulage, terminal handling (THC) at both ends, the ocean leg, and destination delivery.
        </li>
        <li>
          <strong>Insurance</strong> — typically a small percentage of (goods + freight), but
          non-negotiable for anything you can&rsquo;t afford to lose.
        </li>
        <li>
          <strong>Duties &amp; taxes</strong> — import duty (driven by your HS code and country of
          origin), plus VAT/GST, and any anti-dumping, excise or special levies.
        </li>
        <li>
          <strong>The &ldquo;everything else&rdquo; bucket</strong> — customs brokerage, port fees,
          documentation, bank charges, FX spread, and the financing cost of capital tied up in
          transit.
        </li>
      </ul>
      <p>
        That last bucket is where margins quietly disappear. A $0.40 documentation fee here, a 2% FX
        spread there, a $300 demurrage charge because paperwork was late — none of it shows up on the
        commercial invoice, and all of it comes out of your margin.
      </p>

      <h2>The landed-cost formula</h2>
      <p>The mechanics are simple arithmetic; the discipline is in not skipping a line:</p>
      <blockquote>
        Landed cost = Product cost + Freight + Insurance + Duties &amp; taxes + Other fees
        <br />
        Landed cost per unit = Total landed cost ÷ Units in the shipment
      </blockquote>
      <p>
        The subtlety most people miss: <strong>duty is usually charged on the customs value</strong>,
        which depends on your Incoterm. Under CIF, duty is assessed on goods + insurance + freight;
        under FOB-based valuation it may exclude international freight. The same shipment can attract
        a different duty bill purely because of the three letters in your contract — which is exactly
        why Incoterms and landed cost have to be modelled together.
      </p>

      <h2>A worked example</h2>
      <p>
        Say you&rsquo;re importing 5,000 units of a packaged-food SKU. The factory price is $2.00/unit
        and you&rsquo;re shipping one 20ft container CIF to your port.
      </p>
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Product (5,000 × $2.00)</td><td>$10,000</td></tr>
          <tr><td>Ocean freight + THC</td><td>$2,200</td></tr>
          <tr><td>Insurance (0.4% of goods + freight)</td><td>$49</td></tr>
          <tr><td>Customs value (CIF)</td><td>$12,249</td></tr>
          <tr><td>Import duty @ 8%</td><td>$980</td></tr>
          <tr><td>VAT/GST @ 5% on (CIF + duty)</td><td>$662</td></tr>
          <tr><td>Brokerage, port &amp; docs</td><td>$350</td></tr>
          <tr><td>Bank &amp; FX (≈1.5%)</td><td>$184</td></tr>
          <tr><td><strong>Total landed cost</strong></td><td><strong>$14,374</strong></td></tr>
          <tr><td><strong>Per unit</strong></td><td><strong>$2.87</strong></td></tr>
        </tbody>
      </table>
      <p>
        The invoice said $2.00. The truth is $2.87 — a 44% uplift. Price off the invoice number and
        your &ldquo;healthy&rdquo; 30% margin is actually a loss. This is the single most common way
        first-time importers get burned.
      </p>

      <h2>The fees that catch people out</h2>
      <ul>
        <li>
          <strong>Demurrage &amp; detention</strong> — the meter starts when your container sits at
          the port or your driver holds the box too long. Late documents are the usual culprit.
        </li>
        <li>
          <strong>Anti-dumping &amp; countervailing duties</strong> — these can dwarf the base duty
          rate on specific products from specific countries. Always check before you commit.
        </li>
        <li>
          <strong>FX spread</strong> — your bank&rsquo;s 2–3% markup on the exchange rate is a real
          cost most spreadsheets ignore.
        </li>
        <li>
          <strong>Cost of capital</strong> — money tied up for a 35-day ocean transit isn&rsquo;t
          free. For thin-margin FMCG, financing cost matters.
        </li>
      </ul>

      <h2>How the tools landscape handles this</h2>
      <p>
        Plenty of software touches landed cost, but most of it is built for a different buyer.{" "}
        <strong>Zonos</strong> and <strong>Avalara</strong> focus on duty and tax calculation at
        e-commerce checkout — excellent for cross-border DTC, heavier than a wholesale importer needs.{" "}
        <strong>Freightos</strong> is strong on comparing freight rates but stops short of the full
        duty-plus-tax landed picture. <strong>Flexport</strong> bundles landed-cost visibility into a
        full freight-forwarding platform, which is great if you&rsquo;ve already moved your logistics
        there. And of course every customs broker will give you a number — usually after you&rsquo;ve
        already booked.
      </p>
      <p>
        The gap we kept hitting was a fast, free way to model the whole number <em>before</em>{" "}
        committing — at the quoting stage, when you&rsquo;re still deciding whether a deal even makes
        sense. That&rsquo;s why Navvic&rsquo;s{" "}
        <Link href="/tools/duty">Duty &amp; Landed-Cost Estimator</Link> exists: punch in an HS code,
        value and destination and get duty, VAT/GST and a full per-unit landed cost in seconds, with
        no account required.
      </p>

      <h2>Build the habit, not just the spreadsheet</h2>
      <p>
        The importers who consistently make money treat landed cost as a pre-deal gate, not a
        post-mortem. Before you confirm an order, run the full number. Stress-test it: what happens to
        per-unit cost if freight rates spike 20%, or the currency moves against you, or duty turns out
        to be 12% instead of 8% because the HS code was off by a digit?
      </p>
      <p>
        If you want to tighten the inputs, start one step upstream with your{" "}
        <Link href="/tools/hs-code">HS code</Link> (it sets your duty rate) and model your{" "}
        <Link href="/tools/freight">freight and container fill</Link> so you&rsquo;re not paying to
        ship air. Do that consistently and landed cost stops being a nasty surprise and becomes your
        sharpest pricing weapon.
      </p>
    </>
  );
}
