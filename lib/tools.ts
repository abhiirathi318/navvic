export type ToolIcon =
  | "ScanSearch"
  | "Calculator"
  | "ShieldCheck"
  | "Scale"
  | "FileText"
  | "Container";

export type Tool = {
  slug: string;
  href: string;
  name: string;
  tagline: string;
  /** One-line description of what it does. */
  description: string;
  /** Crisp "why it matters for your business" line. */
  business: string;
  /** Where this tool sits in the cross-border workflow (1-based). */
  step: number;
  icon: ToolIcon;
  status: "live" | "soon";
  /** Slugs of tools that are the natural next step after this one. */
  related: string[];
};

export const tools: Tool[] = [
  {
    slug: "hs-code",
    href: "/tools/hs-code",
    name: "HS Code Classifier",
    tagline: "Describe it → get the code",
    description:
      "Describe a product in plain English or upload a photo and get the exact Harmonized System code: Chapter (H2), Heading (H4), Subheading (H6) and the national tariff line (H8).",
    business:
      "The HS code is the key that unlocks duty rates, paperwork and compliance. Get it right and everything downstream is faster and cheaper.",
    step: 1,
    icon: "ScanSearch",
    status: "live",
    related: ["duty", "compliance", "docs"],
  },
  {
    slug: "duty",
    href: "/tools/duty",
    name: "Duty & Landed-Cost Estimator",
    tagline: "Know your true cost",
    description:
      "Enter an HS code, value and destination to estimate import duty, VAT/GST and other charges, and the full landed cost per unit.",
    business:
      "Price your imports with confidence and protect your margins. No more surprises when the customs bill arrives.",
    step: 2,
    icon: "Calculator",
    status: "live",
    related: ["compliance", "docs", "freight"],
  },
  {
    slug: "compliance",
    href: "/tools/compliance",
    name: "Import Compliance Checker",
    tagline: "Clear customs cleanly",
    description:
      "Check whether a product can be imported into a market and what licences, certifications and labelling it needs before it ships.",
    business:
      "Avoid seized cargo, fines and costly delays by spotting permits and restrictions before you commit to a shipment.",
    step: 3,
    icon: "ShieldCheck",
    status: "live",
    related: ["duty", "docs"],
  },
  {
    slug: "incoterms",
    href: "/tools/incoterms",
    name: "Incoterms Advisor",
    tagline: "Who pays for what",
    description:
      "Describe your deal and get a plain-English breakdown of cost and risk at every step, with the right Incoterm for the trade.",
    business:
      "Negotiate from a position of clarity: know exactly where your responsibility ends and your buyer's begins.",
    step: 4,
    icon: "Scale",
    status: "live",
    related: ["duty", "docs"],
  },
  {
    slug: "docs",
    href: "/tools/docs",
    name: "Export Document Generator",
    tagline: "Paperwork in minutes",
    description:
      "Fill one form and generate a print-ready commercial invoice and packing list for your shipment.",
    business:
      "Turn an hour of error-prone paperwork into a two-minute job, with consistent, professional trade documents every time.",
    step: 5,
    icon: "FileText",
    status: "live",
    related: ["freight", "compliance"],
  },
  {
    slug: "freight",
    href: "/tools/freight",
    name: "Freight & Container Calculator",
    tagline: "Pack smarter, ship cheaper",
    description:
      "Work out total volume (CBM), chargeable weight and how many cartons fit a 20ft/40ft container or an LCL/air shipment.",
    business:
      "Choose the right mode and fill every container so you never pay to ship empty space.",
    step: 6,
    icon: "Container",
    status: "live",
    related: ["duty", "docs"],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
