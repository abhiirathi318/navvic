import Link from "next/link";

export default function ExportDocumentsChecklist() {
  return (
    <>
      <p>
        International trade runs on paper. Not the goods, not the ship, not the money &mdash; the
        documents. A shipment with perfect cargo and the wrong paperwork is a stranded shipment: held at
        the port, refused by the bank, or rejected by customs. Get the documents right and everything
        flows; get one wrong and the whole chain stalls. This is the complete checklist of export and
        import documents, what each one does, and the mistakes that cost importers time and money.
      </p>

      <h2>The core commercial documents</h2>
      <p>
        These travel with almost every shipment and form the backbone of the transaction:
      </p>
      <ul>
        <li>
          <strong>Commercial invoice.</strong> The seller&rsquo;s bill to the buyer &mdash; description,
          quantity, unit and total price, currency, Incoterm, and the parties. It&rsquo;s the basis for
          customs valuation and duty, so it&rsquo;s the most scrutinised document of all. The declared
          value here drives your <Link href="/tools/duty">duty calculation</Link>.
        </li>
        <li>
          <strong>Packing list.</strong> A detailed breakdown of what&rsquo;s physically in the shipment:
          cartons, dimensions, net and gross weights, and how SKUs map to packages. Customs reconciles a
          physical inspection against this, so it must match the invoice exactly.
        </li>
        <li>
          <strong>Proforma invoice.</strong> A preliminary invoice issued before the sale is finalised &mdash;
          used for quotes, to open a <Link href="/blog/letters-of-credit">letter of credit</Link>, or to
          arrange import permits and financing.
        </li>
      </ul>

      <h2>The transport documents</h2>
      <ul>
        <li>
          <strong>Bill of lading (B/L).</strong> For ocean freight, this is the big one. It&rsquo;s three
          things at once: a receipt for the goods, the contract of carriage, and a document of title.
          Whoever holds an original negotiable B/L controls the cargo &mdash; which is why it sits at the
          centre of payment via letters of credit.
        </li>
        <li>
          <strong>Sea waybill.</strong> A non-negotiable alternative to the B/L &mdash; faster and
          simpler, but it doesn&rsquo;t confer title, so it&rsquo;s used when payment security
          isn&rsquo;t in question.
        </li>
        <li>
          <strong>Air waybill (AWB).</strong> The equivalent for air freight &mdash; a receipt and
          contract of carriage, but never a document of title.
        </li>
      </ul>

      <h2>The origin and compliance documents</h2>
      <ul>
        <li>
          <strong>Certificate of origin.</strong> States where the goods were manufactured. This
          isn&rsquo;t a formality &mdash; a valid certificate under a trade agreement can unlock
          preferential (lower or zero) duty. Getting it right can change your landed cost materially.
        </li>
        <li>
          <strong>Import/export licences and permits.</strong> Many products need them. For FMCG, this
          often means food-safety registrations, health certificates or product-specific approvals.
          Confirm what your product and destination require with a{" "}
          <Link href="/tools/compliance">compliance checker</Link> before you ship.
        </li>
        <li>
          <strong>Inspection &amp; quality certificates.</strong> Some buyers and some customs regimes
          require pre-shipment inspection or third-party quality certification.
        </li>
      </ul>

      <h2>The FMCG-specific documents</h2>
      <p>
        Food and consumer goods carry an extra documentary layer that catches first-time importers off
        guard:
      </p>
      <ul>
        <li>
          <strong>Health / sanitary certificate.</strong> Issued by the origin country&rsquo;s
          authority, certifying the goods are fit for human consumption.
        </li>
        <li>
          <strong>Phytosanitary certificate.</strong> For plant-based products, certifying they&rsquo;re
          free of pests and disease.
        </li>
        <li>
          <strong>Certificate of analysis.</strong> Lab confirmation of composition, especially for
          ingredients with regulated limits.
        </li>
        <li>
          <strong>Halal / Kosher / organic certificates.</strong> Where the product claims or the
          destination market requires them.
        </li>
        <li>
          <strong>Ingredient and allergen documentation.</strong> Increasingly required for labelling
          compliance and customs review.
        </li>
        <li>
          <strong>For <Link href="/blog/cold-chain-shipping">cold-chain goods</Link>:</strong>{" "}
          temperature logs and data-logger records that prove the chain held in transit.
        </li>
      </ul>

      <h2>The financial documents</h2>
      <ul>
        <li>
          <strong>Letter of credit (L/C).</strong> A bank&rsquo;s guarantee of payment against compliant
          documents &mdash; the backbone of secure trade between parties who don&rsquo;t yet trust each
          other. (See our <Link href="/blog/letters-of-credit">guide to letters of credit</Link>.)
        </li>
        <li>
          <strong>Bill of exchange / draft.</strong> A written order to pay, used in documentary
          collections.
        </li>
        <li>
          <strong>Insurance certificate.</strong> Proof of cargo insurance &mdash; required under CIF and
          CIP Incoterms, and simply wise on every shipment.
        </li>
      </ul>

      <h2>The mistakes that stall shipments</h2>
      <p>
        Documentary errors are the quiet killers of trade. The recurring ones:
      </p>
      <ul>
        <li>
          <strong>Inconsistency across documents.</strong> The invoice says 1,000 units, the packing
          list says 1,020, the B/L weight doesn&rsquo;t match. Any mismatch invites an inspection or a
          bank rejection. Use one source of truth and copy it identically everywhere.
        </li>
        <li>
          <strong>Wrong or missing HS code.</strong> If the classification on your documents is wrong,
          the duty is wrong and customs will challenge it.{" "}
          <Link href="/tools/hs-code">Classify once, correctly</Link>, and use it consistently.
        </li>
        <li>
          <strong>Vague goods descriptions.</strong> &ldquo;Foodstuffs&rdquo; or &ldquo;samples&rdquo;
          invites scrutiny. Customs wants specific, classifiable descriptions.
        </li>
        <li>
          <strong>Letter-of-credit discrepancies.</strong> Banks reject documents over the tiniest
          mismatch with the L/C terms &mdash; a misspelled name, a date out of range. Most L/C
          presentations fail on first submission for exactly this reason.
        </li>
        <li>
          <strong>Missing permits discovered at the port.</strong> The most expensive error of all.
          Check requirements before the goods leave origin, never after they arrive.
        </li>
      </ul>

      <h2>Build a document pack, not a pile</h2>
      <p>
        The importers who clear fast treat documentation as a system, not a scramble. Before any shipment
        moves, assemble a complete pack: classify the goods, confirm the destination&rsquo;s
        requirements, draft the commercial invoice and packing list from a single dataset, line up the
        certificates of origin and any permits, and check every document against every other for
        consistency. A <Link href="/tools/docs">document generator</Link> that produces consistent,
        customs-ready paperwork from one input removes most of the human error in one step.
      </p>

      <h2>The bottom line</h2>
      <p>
        In international trade, the paperwork <em>is</em> the shipment. The cargo can be flawless, but if
        the documents are inconsistent, incomplete or wrong, the goods don&rsquo;t move. Treat the
        document pack with the same seriousness you treat the product &mdash; assemble it early, keep it
        internally consistent, and confirm every requirement before origin departure &mdash; and customs
        becomes a formality instead of a fight.
      </p>
      <p>
        Navvic prepares and manages the full document set in-house as part of end-to-end clearance, so
        nothing surfaces at the port that should have been caught at origin.{" "}
        <Link href="/#quote">Tell our trade desk what you&rsquo;re shipping</Link> and we&rsquo;ll make
        sure the paperwork is airtight.
      </p>
    </>
  );
}
