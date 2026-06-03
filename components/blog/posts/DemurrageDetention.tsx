import Link from "next/link";

export default function DemurrageDetention() {
  return (
    <>
      <p>
        Demurrage and detention are the charges importers love to hate &mdash; fees that appear out of
        nowhere, compound daily, and can quietly turn a profitable shipment into a loss. They&rsquo;re
        also among the most avoidable costs in the entire import chain. The problem is that most
        importers don&rsquo;t understand the difference between the two, when the clock starts, or how
        fast it runs. This guide demystifies both and shows you how to stop bleeding money at the port.
      </p>

      <h2>Demurrage vs. detention: the crucial difference</h2>
      <p>
        People use the terms interchangeably. They&rsquo;re not the same, and the distinction matters
        because it tells you exactly where the delay is.
      </p>
      <ul>
        <li>
          <strong>Demurrage</strong> is charged when your <em>full container sits inside the port or
          terminal</em> beyond the free time, waiting to be picked up. It&rsquo;s the port&rsquo;s way of
          saying: clear your box, we need the space. Demurrage is about the container occupying terminal
          ground.
        </li>
        <li>
          <strong>Detention</strong> is charged when you&rsquo;ve <em>taken the container out</em> of the
          terminal but haven&rsquo;t returned the empty equipment to the carrier within the free time.
          It&rsquo;s the carrier&rsquo;s way of saying: that&rsquo;s our box, give it back. Detention is
          about holding the carrier&rsquo;s equipment too long.
        </li>
      </ul>
      <p>
        Simple mnemonic: <strong>demurrage = container stuck at the port; detention = container (or empty)
        kept too long outside it.</strong> Some carriers also bundle the two as &ldquo;demurrage &amp;
        detention&rdquo; or &ldquo;per diem,&rdquo; but the underlying triggers are different.
      </p>

      <h2>Free time: the clock you&rsquo;re racing</h2>
      <p>
        Carriers and terminals grant a window of &ldquo;free time&rdquo; &mdash; typically a handful of
        days &mdash; during which there&rsquo;s no charge. Once it expires, the meter starts and rarely
        stops climbing. Critically, the charges are usually <strong>tiered and escalating</strong>: the
        first few days over might be modest, but the daily rate steps up the longer you overstay. A
        container that&rsquo;s a week late can cost dramatically more than the linear math suggests,
        because the later days are priced punitively to force action.
      </p>

      <h2>Why the charges spiral</h2>
      <p>
        The pain isn&rsquo;t a flat fee &mdash; it&rsquo;s the compounding. Picture a container that
        misses pickup because a document was wrong. The free time lapses, demurrage starts. Sorting the
        paperwork takes four days, each one more expensive than the last. By the time you collect the
        box, you&rsquo;ve also eaten into the detention free time for returning the empty &mdash; so a
        second clock is now running. One small upstream error has triggered two escalating charge
        streams. This is how a clearance hiccup becomes a four-figure surprise.
      </p>

      <h2>The root causes &mdash; and they&rsquo;re almost all preventable</h2>
      <ul>
        <li>
          <strong>Customs delays.</strong> The single biggest cause. A container can&rsquo;t be picked up
          until it&rsquo;s cleared, and every day in a customs hold is a day of demurrage. Clean,
          consistent <Link href="/blog/customs-clearance-guide">clearance</Link> is your first and best
          defence.
        </li>
        <li>
          <strong>Missing or wrong documentation.</strong> An incorrect{" "}
          <Link href="/tools/hs-code">HS code</Link>, a value mismatch, or a missing permit stalls
          clearance and starts the clock.
        </li>
        <li>
          <strong>Unpaid duty.</strong> The container won&rsquo;t release until duty and tax are settled
          (or deferred). Not having funds &mdash; or a{" "}
          <Link href="/blog/bonded-warehousing-guide">deferment arrangement</Link> &mdash; ready means
          delay.
        </li>
        <li>
          <strong>No trucking arranged.</strong> Even a cleared container sits if you haven&rsquo;t booked
          the haulage to collect it before free time ends.
        </li>
        <li>
          <strong>Port congestion.</strong> Sometimes the terminal itself is jammed and you can&rsquo;t
          get a pickup slot &mdash; in which case you may be able to contest charges that weren&rsquo;t
          your fault.
        </li>
      </ul>

      <h2>How to avoid them</h2>
      <p>
        Almost every demurrage and detention charge traces back to something that could have been ready
        before the ship arrived. The playbook:
      </p>
      <ul>
        <li>
          <strong>Pre-clear everything.</strong> File the customs entry before arrival so the container
          can be collected the moment it lands. Confirm requirements early with a{" "}
          <Link href="/tools/compliance">compliance checker</Link>.
        </li>
        <li>
          <strong>Get documents perfect and consistent.</strong> The{" "}
          <Link href="/blog/export-documents-checklist">document pack</Link> should be complete and
          internally consistent so nothing triggers a hold.
        </li>
        <li>
          <strong>Have duty funds or deferment ready.</strong> Know your{" "}
          <Link href="/tools/duty">duty liability</Link> in advance and arrange payment or a bonded /
          deferment account so release isn&rsquo;t waiting on money.
        </li>
        <li>
          <strong>Book haulage in advance.</strong> Line up the truck and a pickup slot before free time
          starts ticking, not after.
        </li>
        <li>
          <strong>Negotiate longer free time.</strong> If you ship volume, you can often negotiate
          extended free time into your carrier or forwarder contract &mdash; cheap insurance against the
          occasional delay.
        </li>
        <li>
          <strong>Track proactively.</strong> Know when your vessel arrives and where your container is,
          so you&rsquo;re acting before the clock starts, not reacting after.
        </li>
      </ul>

      <h2>What to do when charges are already running</h2>
      <p>
        If you&rsquo;re already in demurrage, speed is everything because the rate escalates. Resolve the
        underlying blocker &mdash; clear the customs query, pay the duty, fix the document &mdash; as the
        absolute priority, and collect the box the instant it&rsquo;s released. If the delay was caused
        by the terminal or carrier (congestion, equipment shortage, a system outage), document it and
        dispute the charges &mdash; carriers do waive fees that weren&rsquo;t the importer&rsquo;s fault,
        but only if you push with evidence.
      </p>

      <h2>The cold-chain wrinkle</h2>
      <p>
        For <Link href="/blog/cold-chain-shipping">temperature-controlled cargo</Link>, demurrage is
        doubly dangerous. Not only is the meter running, but a reefer sitting in a hold may be losing the
        cold chain if it&rsquo;s unplugged or poorly powered. Here, a clearance delay isn&rsquo;t just a
        financial cost &mdash; it can spoil the goods. Fast release is a quality control, not just a cost
        control.
      </p>

      <h2>The bottom line</h2>
      <p>
        Demurrage and detention feel like bad luck, but they&rsquo;re almost always the symptom of
        something that wasn&rsquo;t ready in time &mdash; a document, a duty payment, a truck, a customs
        entry. The importers who never pay them aren&rsquo;t lucky; they&rsquo;re prepared. Pre-clear,
        pre-document, pre-fund and pre-book, and the port clock never starts.
      </p>
      <p>
        Navvic manages clearance, duty and haulage as one coordinated handoff, so containers move the
        moment they land and the demurrage clock never gets going.{" "}
        <Link href="/#quote">Tell our trade desk about your shipment</Link> and we&rsquo;ll keep your
        boxes moving and your port fees at zero.
      </p>
    </>
  );
}
