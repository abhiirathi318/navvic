import Link from "next/link";

export default function ContainerConsolidation() {
  return (
    <>
      <p>
        Here&rsquo;s a number that surprises most growing importers: a half-empty container costs almost
        exactly the same to ship as a full one. Ocean freight is priced by the box, not the cubic metre
        you actually use. Which means every gap of air you ship is freight you&rsquo;re paying for and
        throwing away. <strong>Consolidation</strong> &mdash; combining multiple SKUs, suppliers or even
        importers into a single, efficiently packed container &mdash; is how you stop shipping air and
        cut your per-unit freight cost. This guide explains how it works and when to use it.
      </p>

      <h2>The core idea: pay for the box, fill the box</h2>
      <p>
        A standard 40&rsquo; container holds roughly 67&ndash;76 cubic metres (CBM) of usable space. When
        you book a full-container-load (FCL), you pay one flat rate for that box regardless of whether
        you fill it. The economics are brutal and simple: the more of those cubic metres you fill with
        sellable product, the lower your freight cost per unit. Consolidation is the discipline of
        getting that fill rate as high as possible.
      </p>

      <h2>Three kinds of consolidation</h2>
      <ul>
        <li>
          <strong>Multi-SKU consolidation.</strong> You&rsquo;re buying from one supplier but several
          product lines. Rather than shipping a near-empty box of one SKU now and another later, you
          combine them into one well-planned container. This is the bread-and-butter of FMCG importing,
          where you want a spread of products on the shelf, not a mountain of one.
        </li>
        <li>
          <strong>Multi-supplier consolidation.</strong> You&rsquo;re sourcing from several suppliers in
          the same region. A consolidation warehouse near the origin port receives goods from each,
          holds them, and loads them together into one container once enough has accumulated. One ocean
          shipment instead of three or four.
        </li>
        <li>
          <strong>Buyer&rsquo;s consolidation (co-loading).</strong> Multiple importers&rsquo; cargo
          shares a container. This is essentially what LCL (less-than-container-load) is &mdash; you pay
          only for the space you use, and the freight forwarder fills the rest with other shippers&rsquo;
          goods.
        </li>
      </ul>

      <h2>FCL consolidation vs. LCL: which saves more?</h2>
      <p>
        The instinct for a small shipment is LCL &mdash; pay per CBM, don&rsquo;t commit to a whole box.
        And for genuinely small volumes, it&rsquo;s right. But LCL has a hidden cost structure: per-CBM
        rates are higher than the equivalent FCL rate, and LCL cargo passes through consolidation and
        deconsolidation warehouses at both ends, adding handling fees and time.
      </p>
      <p>
        There&rsquo;s a break-even point &mdash; typically somewhere around 13&ndash;15 CBM, depending on
        the lane &mdash; above which it&rsquo;s cheaper to book a full container and consolidate your own
        SKUs into it than to keep paying LCL per-CBM rates. The trap is defaulting to LCL out of habit
        when your volume has quietly crossed that line. We cover the full decision in our{" "}
        <Link href="/blog/fcl-vs-lcl-vs-air">FCL vs LCL vs air freight guide</Link>; a{" "}
        <Link href="/tools/freight">container calculator</Link> will tell you exactly where you sit.
      </p>

      <h2>The cash-flow benefit, not just the freight saving</h2>
      <p>
        Consolidation does more than lower freight cost per unit. By accumulating goods from multiple
        suppliers or production runs into one shipment, you can:
      </p>
      <ul>
        <li>
          <strong>Hit MOQs across suppliers</strong> without over-ordering any single product, because
          the freight economics no longer force you to fill a box with one SKU.
        </li>
        <li>
          <strong>Reduce the number of customs entries</strong> &mdash; one consolidated import
          declaration instead of several, lowering brokerage and admin cost.
        </li>
        <li>
          <strong>Spread risk</strong> across a varied container rather than betting a whole shipment on
          one line selling through.
        </li>
        <li>
          <strong>Improve shelf coverage</strong> &mdash; for FMCG, landing a balanced range in one
          shipment beats landing one product in bulk and waiting on the next.
        </li>
      </ul>

      <h2>How consolidation works in practice</h2>
      <p>
        A typical multi-supplier consolidation runs like this: you nominate a consolidation warehouse
        near the origin port. Each supplier delivers their goods there against your purchase orders. The
        warehouse receives, checks and stores each consignment, and &mdash; for FMCG &mdash; can apply
        destination-compliant labelling or build retail-ready bundles while the goods wait. Once your
        cargo is complete, it&rsquo;s loaded into one container, optimised for weight distribution and
        fill rate, and shipped under a single bill of lading. At destination it clears as one entry and
        moves to your warehouse.
      </p>

      <h2>The planning that makes or breaks it</h2>
      <p>
        Good consolidation is a packing-and-timing puzzle. The things that determine whether you save or
        lose:
      </p>
      <ul>
        <li>
          <strong>Volume vs. weight.</strong> A container has both a volume limit and a weight limit.
          Dense goods hit the weight cap before they fill the space; light goods fill the space first.
          The art is mixing dense and light SKUs so you max out both.
        </li>
        <li>
          <strong>Compatibility.</strong> You can&rsquo;t consolidate goods with incompatible needs &mdash;
          a temperature-controlled <Link href="/blog/cold-chain-shipping">reefer</Link> line can&rsquo;t
          share a dry box with ambient goods, and some products can&rsquo;t travel together for safety or
          contamination reasons.
        </li>
        <li>
          <strong>Timing.</strong> Waiting to fill a box is a trade-off against speed to shelf. Hold too
          long for the perfect fill and you starve your stock; ship too soon and you waste space.
        </li>
        <li>
          <strong>Documentation.</strong> Mixed shipments need clean, itemised{" "}
          <Link href="/blog/export-documents-checklist">documentation</Link> so customs can reconcile
          every SKU. Consistency here keeps clearance fast.
        </li>
      </ul>

      <h2>Costing a consolidated shipment</h2>
      <p>
        The headline freight saving is only part of the picture. To know whether consolidation truly
        pays, model the full landed cost: the FCL freight rate spread across your actual fill,
        consolidation-warehouse handling fees, the duty on each SKU (which means{" "}
        <Link href="/tools/hs-code">classifying each one</Link>), and the single customs entry. Run it
        through a <Link href="/tools/duty">landed-cost estimator</Link> and compare against what the same
        goods would have cost shipped separately or via LCL. The difference is usually decisive once your
        volume is past the break-even.
      </p>

      <h2>The bottom line</h2>
      <p>
        Consolidation is one of the cleanest wins in importing: stop paying to ship air, fill the box you
        already pay for, and turn several fragmented shipments into one efficient, well-documented
        container. For FMCG importers who need range on the shelf and margin in the model, getting fill
        rate right is often worth more than chasing another point off the unit price.
      </p>
      <p>
        Navvic runs mixed-SKU and multi-supplier consolidation near key origin ports, with labelling and
        cold-chain handling available before goods load.{" "}
        <Link href="/#quote">Tell our trade desk what you&rsquo;re sourcing</Link> and we&rsquo;ll plan a
        container that ships full and clears clean.
      </p>
    </>
  );
}
