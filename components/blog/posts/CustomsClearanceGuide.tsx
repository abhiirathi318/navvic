import Link from "next/link";

export default function CustomsClearanceGuide() {
  return (
    <>
      <p>
        Customs clearance is where well-planned shipments go to die. A container can sail flawlessly
        across an ocean and then sit for a week at the destination port because one document had the
        wrong value, one HS code was off, or one permit was missing. Clearance feels like a black box to
        most importers &mdash; you hand paperwork to a broker and hope. This guide opens the box: what
        actually happens, in what order, and where you can control the outcome.
      </p>

      <h2>What customs clearance is for</h2>
      <p>
        Every country&rsquo;s customs authority has three jobs at the border: collect the right amount of
        duty and tax, enforce the rules on what may enter (safety, health, licensing, sanctions), and
        gather trade statistics. Clearance is the process of satisfying all three for your specific
        shipment so the goods are legally released into the country. Until that release happens, your
        cargo is the government&rsquo;s concern, not yours &mdash; and it isn&rsquo;t going anywhere.
      </p>

      <h2>The clearance process, step by step</h2>
      <ol>
        <li>
          <strong>Pre-arrival filing.</strong> Increasingly, customs wants information <em>before</em>{" "}
          the vessel arrives &mdash; manifest data and, in many regimes, an advance entry. Filing early
          means the system can risk-assess your shipment and, ideally, pre-approve it for fast release.
        </li>
        <li>
          <strong>Entry declaration.</strong> Your broker or you submit the formal import declaration:
          the goods, their <Link href="/tools/hs-code">HS classification</Link>, declared value, origin,
          quantity and the Incoterm. This is the document everything else is checked against.
        </li>
        <li>
          <strong>Duty and tax assessment.</strong> Customs calculates the duty (based on HS code and
          value), plus import VAT/GST and any excise. You can model this in advance with a{" "}
          <Link href="/tools/duty">duty &amp; landed-cost estimator</Link> so there are no surprises.
        </li>
        <li>
          <strong>Document and risk review.</strong> The system &mdash; and sometimes an officer &mdash;
          reviews your declaration and supporting documents. Most shipments are cleared on paper. A
          minority are selected for inspection.
        </li>
        <li>
          <strong>Inspection (if selected).</strong> This ranges from a documentary check to an X-ray
          scan to a full physical examination where the container is opened and goods are verified
          against the declaration.
        </li>
        <li>
          <strong>Payment and release.</strong> Once duty and tax are paid (or deferred under a bond or
          duty-deferment account), customs issues the release and the goods can leave the port.
        </li>
      </ol>

      <h2>The documents that drive it</h2>
      <p>
        Clearance runs on paperwork, and the same few documents do most of the work:
      </p>
      <ul>
        <li>
          <strong>Commercial invoice</strong> &mdash; the declared value and terms of sale. The
          single most scrutinised document, because it drives the duty.
        </li>
        <li>
          <strong>Packing list</strong> &mdash; what&rsquo;s physically in the shipment, by carton and
          weight, so an inspection can be reconciled.
        </li>
        <li>
          <strong>Bill of lading / air waybill</strong> &mdash; the transport contract and title
          document that proves who controls the cargo.
        </li>
        <li>
          <strong>Certificate of origin</strong> &mdash; where the goods were made, which can unlock
          preferential (lower) duty under a trade agreement.
        </li>
        <li>
          <strong>Permits, licences and certificates</strong> &mdash; for FMCG, often food-safety,
          health or product-specific approvals. (Our{" "}
          <Link href="/blog/export-documents-checklist">export documents checklist</Link> covers the
          full set.)
        </li>
      </ul>

      <h2>Where clearance goes wrong</h2>
      <p>
        Delays are rarely random. The recurring causes:
      </p>
      <ul>
        <li>
          <strong>Wrong HS code.</strong> Misclassification means the wrong duty, and customs will
          challenge it. Get classification right up front &mdash; it&rsquo;s the foundation everything
          else rests on.
        </li>
        <li>
          <strong>Value discrepancies.</strong> An invoice value that looks low for the goods, or
          doesn&rsquo;t match other documents, triggers a valuation query &mdash; one of the most common
          hold-ups.
        </li>
        <li>
          <strong>Missing permits.</strong> Discovering at the port that your product needed a health
          certificate or import licence is the expensive way to learn the rules.
        </li>
        <li>
          <strong>Inconsistent paperwork.</strong> Weights, quantities and descriptions that
          don&rsquo;t agree across the invoice, packing list and bill of lading invite inspection.
        </li>
        <li>
          <strong>Incoterm confusion.</strong> Disputes over who is the importer of record and who pays
          duty &mdash; usually traceable to a poorly chosen{" "}
          <Link href="/blog/incoterms-2020-guide">Incoterm</Link>.
        </li>
      </ul>

      <h2>The customs broker&rsquo;s role</h2>
      <p>
        A licensed customs broker is your agent at the border. They prepare and file the declaration,
        interface with customs, advise on classification and valuation, and arrange duty payment. A good
        broker is worth far more than their fee &mdash; they know the local quirks, the documentary
        traps, and how to get a held container released. But the broker can only work with what you give
        them. Garbage in, delay out. The importer who hands over clean, consistent, complete
        documentation gets cleared fast; the one who improvises does not.
      </p>

      <h2>How to clear faster, every time</h2>
      <ul>
        <li>
          <strong>Classify before you ship.</strong> Lock the HS code early with an{" "}
          <Link href="/tools/hs-code">HS classifier</Link> and use it consistently across every
          document.
        </li>
        <li>
          <strong>Check requirements for the destination.</strong> Run the product and country through a{" "}
          <Link href="/tools/compliance">compliance checker</Link> so every permit is in hand before the
          goods move.
        </li>
        <li>
          <strong>Make documents agree.</strong> One source of truth for value, weight and quantity,
          copied identically across invoice, packing list and bill of lading.
        </li>
        <li>
          <strong>File early.</strong> Pre-arrival submission gives the system time to clear you before
          the ship docks.
        </li>
        <li>
          <strong>Consider duty deferment.</strong> A duty-deferment account or{" "}
          <Link href="/blog/bonded-warehousing-guide">bonded warehouse</Link> can decouple payment from
          release and protect your cash flow.
        </li>
      </ul>

      <h2>Why fast clearance is worth obsessing over</h2>
      <p>
        Every day a container sits uncleared, the meter runs &mdash; port storage, and after the free
        days expire, <Link href="/blog/demurrage-and-detention">demurrage and detention</Link> charges
        that compound daily. For perishable and{" "}
        <Link href="/blog/cold-chain-shipping">cold-chain FMCG</Link>, a clearance delay isn&rsquo;t just
        a cost; it&rsquo;s a quality risk as goods sit in a hold. Clean clearance is one of the highest-
        leverage things an importer can get right.
      </p>

      <h2>The bottom line</h2>
      <p>
        Customs clearance isn&rsquo;t a black box once you see the steps: declare accurately, pay or
        defer, satisfy the rules, get released. The importers who clear quickly aren&rsquo;t lucky &mdash;
        they classify correctly, document consistently, file early, and confirm every requirement before
        the goods leave origin.
      </p>
      <p>
        Navvic handles end-to-end clearance with in-house brokers, so classification, documentation and
        duty are managed as one process rather than handed off and hoped for.{" "}
        <Link href="/#quote">Tell our trade desk what you&rsquo;re importing</Link> and we&rsquo;ll make
        sure it clears clean.
      </p>
    </>
  );
}
