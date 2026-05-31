import Link from "next/link";

export default function FclVsLclVsAir() {
  return (
    <>
      <p>
        Most importers pick a freight mode out of habit — &ldquo;we always do a full container&rdquo;
        or &ldquo;we always fly it&rdquo; — and quietly overpay for years. The right mode isn&rsquo;t
        a preference; it&rsquo;s a calculation driven by three numbers: how much space your cargo
        takes (CBM), how much it&rsquo;s worth per kilo, and how fast the cash needs to turn. Get
        those right and the choice between <strong>FCL</strong>, <strong>LCL</strong> and{" "}
        <strong>air</strong> makes itself.
      </p>

      <h2>The three modes in one paragraph each</h2>
      <h3>FCL — Full Container Load</h3>
      <p>
        You book an entire container (typically a 20ft or 40ft box) and pay a flat rate regardless of
        how full it is. Your goods are sealed at origin and not touched until you open them. Lower cost
        per unit of volume, lower handling damage risk, and the simplest customs profile — but you pay
        for the whole box whether you fill it or not.
      </p>
      <h3>LCL — Less than Container Load</h3>
      <p>
        Your pallets share a container with other shippers&rsquo; cargo. You pay by volume (per CBM,
        with a weight floor), so it&rsquo;s efficient for smaller loads. The trade-offs: more handling
        (your goods are consolidated and deconsolidated), slightly slower door-to-door times, and
        shared fate at the destination warehouse.
      </p>
      <h3>Air freight</h3>
      <p>
        Fast — days instead of weeks — and priced on <strong>chargeable weight</strong>, the greater
        of actual weight and volumetric weight. The premium is steep, so air earns its place only for
        high-value, time-sensitive or perishable cargo.
      </p>

      <h2>The break-even most people get wrong</h2>
      <p>
        The classic question is &ldquo;at what volume does LCL stop making sense and FCL take
        over?&rdquo; A 20ft container holds roughly 28–33 CBM of usable space; a 40ft holds about
        58–68 CBM. Because LCL is priced per CBM, its cost rises linearly while FCL is flat. They cross
        somewhere in the region of <strong>13–15 CBM</strong> on many lanes — below that, LCL is
        usually cheaper; above it, you&rsquo;re often better off booking a full 20ft even if you
        can&rsquo;t fill it.
      </p>
      <blockquote>
        Rule of thumb: under ~13 CBM, lean LCL. Over ~15 CBM, price a full 20ft FCL — the flat rate
        frequently wins, and you avoid LCL handling. Between the two, run the actual numbers.
      </blockquote>
      <p>
        &ldquo;Run the actual numbers&rdquo; matters because the break-even shifts with lane, season
        and surcharges. The only way to know is to compute your real CBM and compare quotes — which is
        exactly what the <Link href="/tools/freight">freight &amp; container calculator</Link> is for.
      </p>

      <h2>Air vs ocean: it&rsquo;s about value density</h2>
      <p>
        The deciding metric for air is <strong>value density</strong> — dollars of product per kilo.
        Air freight might cost 8–12× ocean per kilo, so it only pencils out when:
      </p>
      <ul>
        <li>The goods are valuable enough that freight is a small fraction of unit cost (electronics, premium cosmetics, pharma).</li>
        <li>Speed protects revenue — a product launch, a seasonal window, a stockout you&rsquo;re bleeding sales on.</li>
        <li>The cost of capital tied up in a 35-day ocean transit outweighs the air premium.</li>
        <li>The cargo is perishable and simply can&rsquo;t survive the slow lane.</li>
      </ul>
      <p>
        For typical FMCG — chocolate, pasta, beverages, household goods — value density is low and the
        ocean almost always wins. Air becomes a tactical tool for samples, launch stock and emergency
        replenishment, not your default lane.
      </p>

      <h2>Chargeable weight, explained</h2>
      <p>
        Both air and LCL bill on whichever is greater: actual weight or volumetric weight. The
        volumetric divisor differs by mode (air commonly uses 1 CBM ≈ 167 kg; LCL typically treats 1
        CBM ≈ 1,000 kg as the weight floor). Light, bulky cargo gets billed on volume; dense, heavy
        cargo on weight. If you don&rsquo;t know which side of that line your shipment sits on,
        you&rsquo;re quoting blind.
      </p>

      <h2>The market: who moves the boxes</h2>
      <p>
        Ocean capacity is dominated by carriers like <strong>Maersk</strong> and{" "}
        <strong>MSC</strong>; integrators like <strong>DHL</strong>, <strong>FedEx</strong> and{" "}
        <strong>UPS</strong> own express air. To actually book, most importers go through a freight
        forwarder. Digital platforms have shaken that up: <strong>Flexport</strong> rebuilt forwarding
        around software and visibility, <strong>Freightos</strong> created an instant rate marketplace,
        and players like <strong>iContainers</strong> and <strong>Kuehne+Nagel</strong>&rsquo;s online
        tools brought self-serve quoting to the mainstream.
      </p>
      <p>
        These are genuinely useful for comparing freight rates. Where they stop is the rest of the
        decision: they&rsquo;ll quote you a lane, but they won&rsquo;t tell you whether you should be
        on that lane at all, how many cartons actually fit your container, or what the duty and landed
        cost look like once the box arrives. That&rsquo;s the connective tissue Navvic focuses on.
      </p>

      <h2>A simple decision flow</h2>
      <ol>
        <li>
          <strong>Calculate real CBM and chargeable weight.</strong> Start with the{" "}
          <Link href="/tools/freight">container calculator</Link> — it tells you how your cartons fit a
          20ft/40ft box and your chargeable weight for LCL/air.
        </li>
        <li>
          <strong>Check value density.</strong> High value-per-kilo and time-critical? Price air.
          Otherwise stay on the water.
        </li>
        <li>
          <strong>Compare FCL vs LCL at your volume.</strong> Under ~13 CBM lean LCL; over ~15 CBM
          price a full 20ft.
        </li>
        <li>
          <strong>Fold it into landed cost.</strong> Freight is only one line — run the{" "}
          <Link href="/tools/duty">full landed cost</Link> before you book so the cheap freight quote
          doesn&rsquo;t hide an expensive total.
        </li>
      </ol>

      <h2>The takeaway</h2>
      <p>
        There&rsquo;s no universally &ldquo;best&rdquo; mode — only the best mode for this shipment, at
        this volume, at this value density, with this deadline. Make it a calculation, not a habit, and
        you&rsquo;ll stop paying to ship empty space or paying air rates for cargo that was happy on a
        boat.
      </p>
    </>
  );
}
