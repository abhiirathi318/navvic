import Link from "next/link";

export default function HsCodesExplained() {
  return (
    <>
      <p>
        Every physical product crossing a border is assigned a number — the{" "}
        <strong>HS code</strong>. It determines the duty you pay, the taxes you owe, the permits you
        need and the statistics your shipment lands in. It is the single most consequential field on
        your customs declaration, and it is also the one importers most often get wrong.
      </p>
      <p>
        Misclassification cuts both ways. Under-declare the duty rate and you&rsquo;re exposed to back
        duties, penalties and seized cargo. Over-declare and you quietly overpay on every shipment for
        years. Either way, the fix starts with understanding how the system is actually built.
      </p>

      <h2>What an HS code is</h2>
      <p>
        HS stands for <strong>Harmonized System</strong>, a global product nomenclature maintained by
        the World Customs Organization (WCO) and used by more than 200 countries. The genius of it is
        that the first six digits mean the same thing everywhere — a code that classifies roasted
        coffee in Germany classifies it in the UAE, India and the United States too.
      </p>
      <p>The six digits are a hierarchy that narrows from broad to specific:</p>
      <ul>
        <li>
          <strong>Chapter (2 digits)</strong> — the broad category. Chapter 09 is &ldquo;coffee, tea,
          maté and spices.&rdquo;
        </li>
        <li>
          <strong>Heading (4 digits)</strong> — the product family. 0901 is coffee specifically.
        </li>
        <li>
          <strong>Subheading (6 digits)</strong> — the internationally harmonised detail. 0901.21 is
          roasted coffee, not decaffeinated.
        </li>
      </ul>

      <h2>Where the national digits come in</h2>
      <p>
        Countries extend the 6-digit base with their own digits — to 8, 10, sometimes 12 — to set
        precise duty rates and collect detailed trade data. The US calls its 10-digit version the{" "}
        <strong>HTS</strong> (Harmonized Tariff Schedule); the EU uses the 8-digit{" "}
        <strong>CN</strong> code and a 10-digit <strong>TARIC</strong>; India uses an 8-digit ITC(HS).
      </p>
      <p>
        The practical consequence: the first six digits are portable, but{" "}
        <strong>the duty-bearing digits are country-specific</strong>. You classify to six digits
        once, then look up the national extension and tariff for each destination. Quoting a US HTS
        code to a customs broker in Dubai will get you a blank stare.
      </p>

      <h2>Why getting it right is worth real money</h2>
      <p>
        Three reasons classification deserves more attention than it usually gets:
      </p>
      <ol>
        <li>
          <strong>Duty rate.</strong> Two seemingly similar codes can carry very different rates. A
          textile that&rsquo;s &ldquo;knitted&rdquo; versus &ldquo;woven,&rdquo; or a food prep
          that&rsquo;s &ldquo;containing cocoa&rdquo; versus not, can swing the rate by double digits.
        </li>
        <li>
          <strong>Compliance.</strong> The code flags whether your product needs a licence,
          certification, or hits a restriction — long before the cargo is at the port.
        </li>
        <li>
          <strong>Trade agreements.</strong> Preferential tariffs under free-trade agreements are
          granted by HS code. The wrong code can cost you a zero-duty rate you were entitled to.
        </li>
      </ol>

      <h2>How to classify a product correctly</h2>
      <p>
        Classification follows the WCO&rsquo;s General Rules of Interpretation (GRI). You don&rsquo;t
        need to memorise all six, but the logic is worth internalising:
      </p>
      <ul>
        <li>
          <strong>Start specific.</strong> A heading that names your product beats a general
          &ldquo;other&rdquo; basket every time (GRI 1 and 3a).
        </li>
        <li>
          <strong>Classify by essential character.</strong> For mixtures and composite goods, the
          material or component that gives the product its essential character usually decides it
          (GRI 3b). A chocolate-coated wafer is classified by what dominates.
        </li>
        <li>
          <strong>Mind the section and chapter notes.</strong> These legally binding notes include
          and exclude products in ways that aren&rsquo;t obvious from the headings alone.
        </li>
        <li>
          <strong>When genuinely stuck, request a ruling.</strong> Most customs authorities issue
          binding advance rulings so you have certainty before you ship.
        </li>
      </ul>

      <h2>The tools — and where they fall short</h2>
      <p>
        Official databases are authoritative but unforgiving. The <strong>WCO</strong>,{" "}
        <strong>USITC</strong> HTS search, and the EU <strong>TARIC</strong> consultation portal all
        let you browse the nomenclature — if you already know roughly where to look. On the commercial
        side, <strong>Avalara</strong> and <strong>Zonos</strong> offer classification as part of
        broader tax-and-duty suites aimed largely at e-commerce, and global brokers like{" "}
        <strong>DHL</strong> and <strong>Kuehne+Nagel</strong> will classify for you as a paid service.
      </p>
      <p>
        What&rsquo;s historically been missing is something between &ldquo;read 5,000 pages of tariff
        schedule yourself&rdquo; and &ldquo;pay a broker per line.&rdquo; That&rsquo;s the gap
        Navvic&rsquo;s <Link href="/tools/hs-code">HS Code Classifier</Link> targets: describe the
        product in plain English — or upload a photo — and it maps you to the full hierarchy, Chapter
        through national tariff line, in seconds. It&rsquo;s a starting point that gets you 90% of the
        way, fast and free.
      </p>
      <blockquote>
        A tool gives you a confident first answer. For high-value, high-volume or borderline goods, a
        licensed broker or a binding ruling gives you certainty. Use both.
      </blockquote>

      <h2>From code to clearance</h2>
      <p>
        The HS code isn&rsquo;t the finish line — it&rsquo;s the key that unlocks everything
        downstream. Once you have it, your{" "}
        <Link href="/tools/duty">duty and landed cost</Link> become calculable, your{" "}
        <Link href="/tools/compliance">compliance requirements</Link> become visible, and your customs
        paperwork can be filled out correctly the first time.
      </p>
      <p>
        Treat classification as the foundation it is. Spend ten minutes getting the code right and the
        entire shipment moves faster, cheaper and cleaner. Skip it, and you&rsquo;ll spend those
        minutes — and a lot more money — explaining yourself to customs later.
      </p>
    </>
  );
}
