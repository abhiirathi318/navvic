import Link from "next/link";
import { Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-400 to-abyss-800 text-white">
              <Anchor size={20} />
            </span>
            <span className="font-display text-xl font-extrabold">
              Nav<span className="text-ocean-400">vic</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            End-to-end import &amp; export of premium FMCG brands. Sourcing, freight, customs and
            warehousing — delivered across 40+ countries.
          </p>
        </div>

        <FooterCol
          title="Company"
          links={["About", "Trade lanes", "Sustainability", "Careers"]}
        />
        <FooterCol title="Support" links={["Request quote", "Track shipment", "Documentation", "Contact"]} />
      </div>
      <div className="border-t border-[var(--border)] px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Navvic Global Trading. All rights reserved.</span>
          <span>Crafted for the open ocean 🌊</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-ocean-400">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
