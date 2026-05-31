import Link from "next/link";

export default function Incoterms2020Guide() {
  return (
    <>
      <p>
        Three letters in a sales contract decide who pays for freight, who carries the risk if a
        container goes overboard, and who deals with customs on each side of the border. Those three
        letters are an <strong>Incoterm</strong> — and choosing the wrong one is one of the most
        expensive mistakes in international trade, precisely because it looks like a triviality.
      </p>
      <p>
        Incoterms (International Commercial Terms) are published by the International Chamber of
        Commerce (ICC). The current edition, <strong>Incoterms 2020</strong>, defines 11 rules. This
        guide explains what they govern, walks the rules most importers actually use, and flags the
        traps that catch people out.
      </p>

      <h2>What Incoterms do — and don&rsquo;t — cover</h2>
      <p>An Incoterm allocates three things between buyer and seller:</p>
      <ul>
        <li>
          <strong>Costs</strong> — who pays for carriage, loading, terminal handling, insurance and
          duties at each stage.
        </li>
        <li>
          <strong>Risk</strong> — the exact point where responsibility for loss or damage transfers
          from seller to buyer.
        </li>
        <li>
          <strong>Obligations</strong> — who arranges transport, export/import clearance and
          documents.
        </li>
      </ul>
      <p>
        Crucially, Incoterms do <strong>not</strong> transfer ownership, set payment terms, or replace
        your sales contract. They are a shorthand for delivery responsibilities — powerful, but
        narrow.
      </p>

      <h2>The 11 rules at a glance</h2>
      <p>Seven rules work for any mode of transport; four are sea-freight only.</p>
      <table>
        <thead>
          <tr><th>Rule</th><th>Meaning</th><th>Mode</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>EXW</strong></td><td>Ex Works — buyer collects from seller&rsquo;s premises and does everything</td><td>Any</td></tr>
          <tr><td><strong>FCA</strong></td><td>Free Carrier — seller delivers, cleared for export, to a named place</td><td>Any</td></tr>
          <tr><td><strong>CPT</strong></td><td>Carriage Paid To — seller pays carriage to destination, risk passes early</td><td>Any</td></tr>
          <tr><td><strong>CIP</strong></td><td>Carriage &amp; Insurance Paid To — CPT plus seller buys insurance</td><td>Any</td></tr>
          <tr><td><strong>DAP</strong></td><td>Delivered At Place — seller delivers to destination, buyer clears import</td><td>Any</td></tr>
          <tr><td><strong>DPU</strong></td><td>Delivered At Place Unloaded — DAP, but seller unloads</td><td>Any</td></tr>
          <tr><td><strong>DDP</strong></td><td>Delivered Duty Paid — seller does everything, including import duty</td><td>Any</td></tr>
          <tr><td><strong>FAS</strong></td><td>Free Alongside Ship — seller delivers alongside the vessel</td><td>Sea</td></tr>
          <tr><td><strong>FOB</strong></td><td>Free On Board — risk passes once goods are on board the vessel</td><td>Sea</td></tr>
          <tr><td><strong>CFR</strong></td><td>Cost &amp; Freight — seller pays freight, risk passes at origin port</td><td>Sea</td></tr>
          <tr><td><strong>CIF</strong></td><td>Cost, Insurance &amp; Freight — CFR plus seller buys insurance</td><td>Sea</td></tr>
        </tbody>
      </table>

      <h2>The four you&rsquo;ll meet most</h2>
      <h3>FOB — the importer&rsquo;s workhorse</h3>
      <p>
        Under FOB, the seller delivers the goods on board the vessel at the origin port and clears
        them for export; risk and cost then pass to you. It&rsquo;s popular because it gives the buyer
        control over the main freight leg (and the freight margin) while keeping origin logistics with
        the party who knows them best. The catch: FOB is strictly for sea freight. Using it for
        containerised cargo handed over at an inland depot is technically wrong — FCA is the correct
        rule there.
      </p>
      <h3>CIF — convenient, but you&rsquo;re not in control</h3>
      <p>
        With CIF the seller arranges and pays for freight and insurance to your destination port. It
        feels easier, and it&rsquo;s common for first-time importers, but you inherit risk at the
        origin port while the seller picks the carrier and the (minimum) insurance cover. You also pay
        whatever freight margin the seller builds in. Note too that CIF raises your{" "}
        <strong>customs value</strong>, because duty is assessed on goods + insurance + freight.
      </p>
      <h3>DAP — delivered, but you still clear customs</h3>
      <p>
        DAP puts the goods at your door (or a named place) with the seller carrying cost and risk for
        the whole journey — except import clearance and duties, which remain yours. It&rsquo;s a clean,
        balanced term for many B2B deals.
      </p>
      <h3>DDP — maximum convenience, maximum seller risk</h3>
      <p>
        Under DDP the seller does literally everything, including paying import duty and taxes in your
        country. Buyers love it; sensible sellers are wary of it, because being on the hook for
        clearance and duty in a market they don&rsquo;t operate in is genuinely risky. Expect to pay
        for that convenience in the unit price.
      </p>

      <h2>Common traps</h2>
      <ul>
        <li>
          <strong>Using EXW for exports.</strong> EXW looks cheap for the seller but leaves the buyer
          responsible for export clearance in a foreign country — often impractical. FCA is almost
          always the better choice.
        </li>
        <li>
          <strong>FOB/CIF on containers.</strong> These sea-only terms assume goods cross the
          ship&rsquo;s rail. For containerised freight handed over at a terminal, FCA/CPT/CIP fit the
          reality and your insurance better.
        </li>
        <li>
          <strong>Forgetting to name the place precisely.</strong> &ldquo;FOB&rdquo; means little;
          &ldquo;FOB Jebel Ali&rdquo; means something. Always specify the named port or place.
        </li>
        <li>
          <strong>Assuming insurance is adequate.</strong> CIF and CIP only oblige the seller to buy
          minimum cover. For valuable goods, arrange your own.
        </li>
      </ul>

      <h2>How the rest of the market helps</h2>
      <p>
        The ICC sells the definitive rulebook and most freight forwarders — from{" "}
        <strong>DHL</strong> and <strong>Kuehne+Nagel</strong> to digital players like{" "}
        <strong>Flexport</strong> — publish helpful Incoterms charts. Those charts are great
        reference, but they don&rsquo;t tell <em>you</em> which term fits <em>your</em> specific deal,
        or what it does to your landed cost.
      </p>
      <p>
        That&rsquo;s the gap Navvic&rsquo;s <Link href="/tools/incoterms">Incoterms Advisor</Link>{" "}
        fills: describe your trade and it returns a plain-English breakdown of cost and risk at every
        step and recommends the right rule. Pair it with the{" "}
        <Link href="/tools/duty">landed-cost estimator</Link> to see exactly how your chosen Incoterm
        moves the final number, and the <Link href="/tools/docs">document generator</Link> to get the
        wording onto your invoice correctly.
      </p>

      <h2>The bottom line</h2>
      <p>
        Don&rsquo;t default to whatever your supplier quotes. Decide which Incoterm matches how much of
        the journey you want to control, model its impact on your costs, and name the place precisely
        in writing. Three letters, chosen deliberately, are worth more than they look.
      </p>
    </>
  );
}
