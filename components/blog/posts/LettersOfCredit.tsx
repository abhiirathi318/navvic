import Link from "next/link";

export default function LettersOfCredit() {
  return (
    <>
      <p>
        International trade has a trust problem. A buyer in one country and a seller in another, who may
        never meet, have to exchange a container of goods for a large sum of money &mdash; and neither
        wants to go first. The seller fears shipping and not being paid; the buyer fears paying and not
        receiving. The <strong>letter of credit</strong> is the centuries-old, bank-backed mechanism that
        solves this standoff. It&rsquo;s also where a surprising number of shipments get stuck. This
        guide explains how letters of credit work, when to use one, and how to avoid the discrepancies
        that trip up most importers.
      </p>

      <h2>What a letter of credit is</h2>
      <p>
        A letter of credit (L/C, or &ldquo;documentary credit&rdquo;) is a guarantee issued by the
        buyer&rsquo;s bank promising to pay the seller a defined amount, provided the seller presents a
        specified set of documents proving they shipped the right goods on the right terms. The crucial
        shift is that the payment risk moves from the buyer (who might not pay) to a bank (which is good
        for the money). The seller no longer has to trust the buyer &mdash; only the bank.
      </p>
      <p>
        The deepest principle of an L/C is this: <strong>banks deal in documents, not goods.</strong> The
        bank never sees the cargo. It pays against paperwork that complies exactly with the L/C terms.
        That&rsquo;s the source of both its power and its pitfalls.
      </p>

      <h2>How a letter of credit works, step by step</h2>
      <ol>
        <li>
          <strong>Agreement.</strong> Buyer and seller agree to settle by L/C and write the terms into
          the sales contract &mdash; amount, documents required, latest shipment date, Incoterm.
        </li>
        <li>
          <strong>Issuance.</strong> The buyer (applicant) asks their bank (the issuing bank) to issue
          the L/C in favour of the seller (beneficiary).
        </li>
        <li>
          <strong>Advising.</strong> The issuing bank sends the L/C to a bank in the seller&rsquo;s
          country (the advising bank), which confirms its authenticity to the seller.
        </li>
        <li>
          <strong>Shipment.</strong> The seller ships the goods and obtains the transport document &mdash;
          for ocean freight, the <Link href="/blog/export-documents-checklist">bill of lading</Link>,
          which is also a document of title.
        </li>
        <li>
          <strong>Presentation.</strong> The seller presents the required documents &mdash; invoice,
          packing list, bill of lading, certificates &mdash; to the bank.
        </li>
        <li>
          <strong>Examination &amp; payment.</strong> The bank checks the documents against the L/C
          terms. If they comply, the bank pays. The documents (including the title document) then pass to
          the buyer, who uses them to claim the goods.
        </li>
      </ol>

      <h2>The types you&rsquo;ll encounter</h2>
      <ul>
        <li>
          <strong>Irrevocable L/C.</strong> Cannot be changed or cancelled without all parties&rsquo;
          agreement. This is the standard &mdash; an L/C that could be revoked offers the seller little
          security.
        </li>
        <li>
          <strong>Confirmed L/C.</strong> A second bank (usually in the seller&rsquo;s country) adds its
          own guarantee on top of the issuing bank&rsquo;s. Worth paying for when the issuing
          bank&rsquo;s country carries political or financial risk.
        </li>
        <li>
          <strong>Sight vs. usance (term) L/C.</strong> A sight L/C pays on presentation of compliant
          documents; a usance L/C pays at a fixed period after &mdash; effectively giving the buyer
          credit terms.
        </li>
        <li>
          <strong>Transferable L/C.</strong> Allows the beneficiary to transfer part of the credit to a
          third party &mdash; useful for intermediaries and trading houses.
        </li>
      </ul>

      <h2>The discrepancy problem</h2>
      <p>
        Here is the single most important thing for an importer to understand: <strong>most L/C document
        presentations are rejected on first submission</strong> &mdash; not because of fraud, but because
        of tiny discrepancies. Because banks pay only against documents that comply <em>exactly</em> with
        the terms, the smallest mismatch can hold up payment and, by extension, the release of your goods.
      </p>
      <p>Common discrepancies that cause rejections:</p>
      <ul>
        <li>
          <strong>Inconsistent details</strong> &mdash; a company name spelled differently across
          documents, a quantity or weight that doesn&rsquo;t match between invoice and packing list.
        </li>
        <li>
          <strong>Expired or late presentation</strong> &mdash; documents presented after the L/C&rsquo;s
          expiry or outside the presentation window.
        </li>
        <li>
          <strong>Shipment after the latest date</strong> &mdash; the bill of lading shows a load date
          past the L/C&rsquo;s latest shipment date.
        </li>
        <li>
          <strong>Description mismatch</strong> &mdash; the goods description on the invoice doesn&rsquo;t
          exactly match the wording in the L/C.
        </li>
        <li>
          <strong>Missing documents</strong> &mdash; a certificate the L/C required wasn&rsquo;t
          included.
        </li>
      </ul>
      <p>
        Every discrepancy means delay, possible fees, and renewed payment risk. Precision in the{" "}
        <Link href="/blog/export-documents-checklist">document pack</Link> isn&rsquo;t pedantry here
        &mdash; it&rsquo;s the whole game.
      </p>

      <h2>When to use an L/C &mdash; and when not to</h2>
      <p>
        Letters of credit aren&rsquo;t free or fast. They carry bank fees and administrative overhead, so
        they&rsquo;re not the default for every shipment. Use one when:
      </p>
      <ul>
        <li>You&rsquo;re dealing with a <strong>new supplier</strong> you don&rsquo;t yet trust.</li>
        <li>The <strong>order value is large</strong> enough that the risk justifies the cost.</li>
        <li>
          The supplier&rsquo;s country carries <strong>political or economic risk</strong> that makes you
          want a bank guarantee.
        </li>
        <li>The supplier <strong>insists on payment security</strong> before producing.</li>
      </ul>
      <p>
        As trust builds, importers typically graduate toward cheaper, simpler methods &mdash; documentary
        collections, then open account with a deposit. The L/C is the trust-building tool for the early,
        risky phase of a supplier relationship.
      </p>

      <h2>How L/Cs interact with the rest of your import chain</h2>
      <p>
        An L/C touches everything. The Incoterm you choose determines which transport and insurance
        documents the seller must present, so L/C terms and{" "}
        <Link href="/blog/incoterms-2020-guide">Incoterms</Link> must align. The bill of lading sits at
        the centre because it&rsquo;s both a required document and the title to the goods. And because
        payment hinges on flawless paperwork, the L/C raises the stakes on getting your{" "}
        <Link href="/tools/docs">documentation</Link> exactly right &mdash; the same discipline that keeps{" "}
        <Link href="/blog/customs-clearance-guide">customs clearance</Link> fast.
      </p>

      <h2>The bottom line</h2>
      <p>
        A letter of credit is how strangers trade safely across borders: it swaps the risk of an unknown
        counterparty for the reliability of a bank. But its power rests entirely on documentary
        precision &mdash; banks pay against papers, not goods, and reject on the smallest mismatch. Master
        the document discipline and an L/C is a powerful safety net; neglect it and the very tool meant to
        protect you becomes the thing that strands your shipment.
      </p>
      <p>
        Navvic&rsquo;s trade desk prepares L/C-compliant document sets in-house and aligns them with your
        Incoterms and clearance, so presentations pass first time and payment &mdash; and goods &mdash;
        move without friction.{" "}
        <Link href="/#quote">Tell us about your transaction</Link> and we&rsquo;ll make sure the paperwork
        holds up.
      </p>
    </>
  );
}
