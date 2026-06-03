import Link from "next/link";

export default function ColdChainShipping() {
  return (
    <>
      <p>
        A pallet of premium chocolate can leave a factory in perfect condition and arrive as a fused,
        bloomed, unsellable block &mdash; not because anything was dropped or damaged, but because it
        spent six hours on a sun-baked quay at the wrong temperature. In temperature-sensitive FMCG, the
        cold chain isn&rsquo;t a nice-to-have. It&rsquo;s the product. Break it once, anywhere along the
        route, and the value is gone. This guide covers how cold-chain shipping actually works for
        importers, where it fails, and how to design a chain that holds.
      </p>

      <h2>What &ldquo;cold chain&rdquo; really means</h2>
      <p>
        A cold chain is an unbroken sequence of temperature-controlled storage and transport from origin
        to final destination. &ldquo;Unbroken&rdquo; is the operative word. It&rsquo;s not enough for
        the reefer container to be cold; the chain includes the chilled warehouse at origin, the
        refrigerated truck to the port, the container at sea, the handling at transshipment, the customs
        hold, the delivery leg and the storage at destination. The weakest link sets the quality of the
        whole shipment.
      </p>

      <h2>The products that demand it</h2>
      <p>
        For FMCG importers, cold-chain categories typically include:
      </p>
      <ul>
        <li>
          <strong>Chocolate and confectionery</strong> &mdash; narrow window, usually 12&ndash;18&deg;C.
          Too warm and you get fat bloom (a whitish film) and softening; too cold and you risk sugar
          bloom and condensation on rewarming.
        </li>
        <li>
          <strong>Dairy and cheese</strong> &mdash; chilled, typically 2&ndash;8&deg;C, with strict
          shelf-life and food-safety implications.
        </li>
        <li>
          <strong>Beverages and sauces</strong> &mdash; many are ambient-stable, but premium and
          natural lines without preservatives often need controlled temperatures.
        </li>
        <li>
          <strong>Frozen goods</strong> &mdash; deep-frozen at &minus;18&deg;C or below, where even a
          short thaw-refreeze cycle ruins texture and safety.
        </li>
      </ul>

      <h2>Reefers: the workhorse of cold-chain ocean freight</h2>
      <p>
        The refrigerated container &mdash; a &ldquo;reefer&rdquo; &mdash; is an insulated box with an
        integrated refrigeration unit that plugs into the ship&rsquo;s power, the terminal&rsquo;s
        gensets, or a clip-on generator on the road. A good reefer holds a set temperature within a
        tight tolerance and logs it continuously. Key things importers should specify and check:
      </p>
      <ul>
        <li>
          <strong>Set point and tolerance.</strong> Agree the exact temperature and the acceptable
          deviation in writing. &ldquo;Cold&rdquo; is not a spec.
        </li>
        <li>
          <strong>Ventilation and humidity.</strong> Fresh-air exchange and humidity control matter for
          produce and some confectionery; the wrong setting causes condensation or dehydration.
        </li>
        <li>
          <strong>Pre-cooling.</strong> The container and the goods should be pre-cooled before loading.
          Loading warm product into a reefer and expecting it to pull the temperature down mid-voyage is
          a common, costly mistake.
        </li>
        <li>
          <strong>Pulp temperature checks.</strong> For sensitive goods, the core (pulp) temperature at
          loading and unloading is the truth &mdash; not just the air reading.
        </li>
      </ul>

      <h2>Where cold chains break</h2>
      <p>
        The container at sea is rarely the problem. The failures cluster at the seams:
      </p>
      <ul>
        <li>
          <strong>Plug-out gaps.</strong> Every time a reefer is moved between ship, yard and truck,
          there&rsquo;s a window where it&rsquo;s unplugged. Long gaps at a hot terminal are where
          temperature creeps.
        </li>
        <li>
          <strong>Customs and inspection holds.</strong> A container pulled for examination can sit,
          sometimes unpowered, while paperwork is sorted. Clean documentation that clears fast is a
          cold-chain control, not just an admin task.
        </li>
        <li>
          <strong>The last mile.</strong> The final delivery leg is often the least controlled &mdash;
          a non-refrigerated van for &ldquo;just a couple of hours&rdquo; that turns into half a day in
          traffic.
        </li>
        <li>
          <strong>Destination storage.</strong> Landing the goods perfectly and then putting them in an
          ambient warehouse overnight undoes everything.
        </li>
      </ul>

      <h2>The role of monitoring and data loggers</h2>
      <p>
        Modern cold chains are instrumented. Data loggers &mdash; increasingly real-time, connected
        devices &mdash; travel with the shipment and record temperature throughout. This does two
        things. First, it lets you intervene: a temperature excursion flagged in transit can sometimes
        be corrected before the goods are ruined. Second, it settles disputes. When a buyer claims the
        product arrived warm, or an insurer questions a claim, the logger data is the evidence. For
        high-value FMCG, continuous monitoring has moved from premium add-on to baseline expectation.
      </p>

      <h2>Cost: why cold chain costs more, and how to manage it</h2>
      <p>
        Reefer freight carries a premium over dry-container rates &mdash; the equipment is expensive,
        power-hungry and in tighter supply, and reefer slots on vessels are limited. On top of the
        ocean leg you pay for refrigerated trucking, powered storage and monitoring. The instinct to cut
        corners here is exactly backwards: the saving on a non-refrigerated leg is trivial against the
        loss of a spoiled container.
      </p>
      <p>
        The smart levers are volume and planning, not corner-cutting. Filling a reefer efficiently
        spreads the premium across more units &mdash; the same{" "}
        <Link href="/blog/fcl-vs-lcl-vs-air">FCL-versus-LCL logic</Link> applies, with the added wrinkle
        that mixing temperature requirements in one box is usually impossible. Model the reefer premium
        into your <Link href="/tools/duty">landed cost</Link> from the start so it&rsquo;s priced in, not
        a surprise.
      </p>

      <h2>Designing a cold chain that holds</h2>
      <p>
        A reliable cold chain comes down to a few disciplines:
      </p>
      <ul>
        <li>
          <strong>Specify everything in writing</strong> &mdash; set point, tolerance, pre-cooling,
          monitoring &mdash; in the contract and on the booking.
        </li>
        <li>
          <strong>Pick a single accountable operator</strong> for the whole chain rather than stitching
          together legs that each blame the other when something thaws.
        </li>
        <li>
          <strong>Clear customs fast</strong> with complete, correct documentation so the container
          isn&rsquo;t sitting in a hold. Confirm requirements with the{" "}
          <Link href="/tools/compliance">compliance checker</Link> before you ship.
        </li>
        <li>
          <strong>Use bonded, temperature-controlled storage</strong> at destination so goods stay safe
          &mdash; and duty-deferred &mdash; until they sell. (See our{" "}
          <Link href="/blog/bonded-warehousing-guide">bonded warehousing guide</Link>.)
        </li>
        <li>
          <strong>Monitor end to end</strong> and keep the data.
        </li>
      </ul>

      <h2>The bottom line</h2>
      <p>
        Cold-chain shipping rewards obsessiveness. The product can only be as good as the worst moment
        of its journey, so the job is to eliminate weak moments &mdash; pre-cool properly, close the
        plug-out gaps, clear customs cleanly, control the last mile, and prove it all with data. For
        premium chocolate and perishables, that discipline isn&rsquo;t overhead; it&rsquo;s what keeps
        the product saleable.
      </p>
      <p>
        Navvic runs reefer freight and bonded cold storage as a single, monitored chain &mdash; built
        specifically for chocolate, dairy and other temperature-sensitive FMCG.{" "}
        <Link href="/#quote">Tell our trade desk what you&rsquo;re moving</Link> and we&rsquo;ll design a
        chain that arrives intact.
      </p>
    </>
  );
}
