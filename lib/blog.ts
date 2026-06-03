/* Blog post registry. Metadata lives here; each post's body is a React
   component under components/blog/posts/<Component>.tsx, mapped by slug below. */

import type { ComponentType } from "react";
import LandedCostGuide from "@/components/blog/posts/LandedCostGuide";
import HsCodesExplained from "@/components/blog/posts/HsCodesExplained";
import Incoterms2020Guide from "@/components/blog/posts/Incoterms2020Guide";
import FclVsLclVsAir from "@/components/blog/posts/FclVsLclVsAir";
import SourcingFmcgBrands from "@/components/blog/posts/SourcingFmcgBrands";
import BondedWarehousingGuide from "@/components/blog/posts/BondedWarehousingGuide";
import ColdChainShipping from "@/components/blog/posts/ColdChainShipping";
import CustomsClearanceGuide from "@/components/blog/posts/CustomsClearanceGuide";
import ContainerConsolidation from "@/components/blog/posts/ContainerConsolidation";
import ChoosingFreightForwarder from "@/components/blog/posts/ChoosingFreightForwarder";
import ExportDocumentsChecklist from "@/components/blog/posts/ExportDocumentsChecklist";
import DemurrageDetention from "@/components/blog/posts/DemurrageDetention";
import OceanFreightRates2026 from "@/components/blog/posts/OceanFreightRates2026";
import LettersOfCredit from "@/components/blog/posts/LettersOfCredit";

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description + card subtitle. */
  description: string;
  /** Short punchy excerpt for cards (can match description). */
  excerpt: string;
  /** ISO date (published). */
  date: string;
  /** ISO date (last meaningful update), optional. */
  updated?: string;
  author: string;
  /** Reading time in minutes. */
  readingTime: number;
  category: string;
  tags: string[];
  keywords: string[];
  /** Slugs of tools that pair with this article. */
  relatedTools: string[];
  /** Slugs of other posts to surface as "keep reading". */
  relatedPosts: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "landed-cost-guide",
    title: "Landed Cost, Explained: How to Price Imports Without Nasty Surprises",
    description:
      "A practical 2026 guide to calculating landed cost — duty, VAT/GST, freight, insurance and the hidden fees that quietly erode your margin — with a worked example and a free calculator.",
    excerpt:
      "The price on the supplier's invoice is rarely what a unit actually costs you. Here's how to build a landed-cost number you can price against with confidence.",
    date: "2026-02-04",
    author: "Abhishek Rathi",
    readingTime: 8,
    category: "Costing",
    tags: ["Landed cost", "Import duty", "Pricing", "Customs"],
    keywords: [
      "landed cost calculator",
      "how to calculate landed cost",
      "import duty calculator",
      "total landed cost formula",
      "import cost breakdown",
    ],
    relatedTools: ["duty", "freight", "hs-code"],
    relatedPosts: ["hs-codes-explained", "fcl-vs-lcl-vs-air"],
  },
  {
    slug: "hs-codes-explained",
    title: "HS Codes Explained: A Practical Guide to Classifying Your Products",
    description:
      "What HS codes are, how the 6-digit Harmonized System extends to 8–10 national digits, why misclassification is so expensive, and how to classify a product correctly the first time.",
    excerpt:
      "Get the HS code wrong and every duty rate, permit and customs form downstream is wrong too. Here's how classification actually works.",
    date: "2026-02-18",
    author: "Abhinav Srivastava",
    readingTime: 7,
    category: "Compliance",
    tags: ["HS codes", "Tariff classification", "Customs", "Compliance"],
    keywords: [
      "HS code",
      "what is an HS code",
      "how to find HS code",
      "harmonized system classification",
      "HS code lookup",
      "tariff classification",
    ],
    relatedTools: ["hs-code", "duty", "compliance"],
    relatedPosts: ["landed-cost-guide", "incoterms-2020-guide"],
  },
  {
    slug: "incoterms-2020-guide",
    title: "Incoterms 2020 for Importers & Exporters: Who Pays, Who's at Risk",
    description:
      "A plain-English walkthrough of all 11 Incoterms 2020 rules — EXW, FOB, CIF, DAP, DDP and the rest — with guidance on which to use, common traps, and how they change your landed cost.",
    excerpt:
      "Incoterms decide exactly where your money and your risk stop and the other party's begins. Choosing the wrong three letters can cost you a container.",
    date: "2026-03-03",
    author: "Abhishek Rathi",
    readingTime: 8,
    category: "Trade terms",
    tags: ["Incoterms", "FOB", "CIF", "DDP", "Contracts"],
    keywords: [
      "Incoterms 2020",
      "Incoterms explained",
      "FOB vs CIF",
      "DAP vs DDP",
      "which Incoterm to use",
      "Incoterms 2020 chart",
    ],
    relatedTools: ["incoterms", "duty", "docs"],
    relatedPosts: ["landed-cost-guide", "hs-codes-explained"],
  },
  {
    slug: "fcl-vs-lcl-vs-air",
    title: "FCL vs LCL vs Air Freight: Choosing the Right Mode for Your Shipment",
    description:
      "When full-container (FCL) beats less-than-container (LCL), when LCL is the smart move, and when air freight earns its premium — with break-even volumes, cost drivers and a container-fill calculator.",
    excerpt:
      "Most importers overpay by defaulting to one mode. The right answer depends on CBM, value density and how fast the cash needs to turn.",
    date: "2026-03-19",
    author: "Abhinav Srivastava",
    readingTime: 8,
    category: "Freight",
    tags: ["Ocean freight", "FCL", "LCL", "Air freight", "CBM"],
    keywords: [
      "FCL vs LCL",
      "when to use LCL",
      "air vs ocean freight",
      "CBM calculator",
      "container load calculator",
      "chargeable weight",
    ],
    relatedTools: ["freight", "duty", "docs"],
    relatedPosts: ["landed-cost-guide", "sourcing-fmcg-brands"],
  },
  {
    slug: "sourcing-fmcg-brands",
    title: "Sourcing FMCG Brands for Import: A Buyer's Playbook",
    description:
      "How to find, vet and negotiate with FMCG suppliers for import — from shortlisting brands and checking certifications to MOQs, exclusivity, sampling and getting your first container moving.",
    excerpt:
      "Sourcing fast-moving consumer goods is part detective work, part negotiation. Here's the repeatable playbook we use to land reliable supply.",
    date: "2026-04-07",
    author: "Navvic Trade Desk",
    readingTime: 8,
    category: "Sourcing",
    tags: ["FMCG", "Sourcing", "Suppliers", "Negotiation"],
    keywords: [
      "FMCG sourcing",
      "how to source FMCG products",
      "import FMCG brands",
      "find suppliers for import",
      "wholesale FMCG distributor",
      "MOQ negotiation",
    ],
    relatedTools: ["hs-code", "compliance", "freight"],
    relatedPosts: ["fcl-vs-lcl-vs-air", "incoterms-2020-guide"],
  },
  {
    slug: "bonded-warehousing-guide",
    title: "Bonded Warehousing Explained: Defer Duty and Free Up Cash",
    description:
      "What a customs bonded warehouse is, how deferring import duty and tax until goods sell protects your cash flow, when re-export saves duty entirely, and who benefits most — with a worked example.",
    excerpt:
      "A bonded warehouse moves your duty bill from the day goods land to the day they sell — and sometimes removes it entirely. Here's how to use one.",
    date: "2026-04-21",
    author: "Navvic Trade Desk",
    readingTime: 7,
    category: "Warehousing",
    tags: ["Bonded warehouse", "Duty deferment", "Cash flow", "Customs"],
    keywords: [
      "bonded warehouse",
      "what is a bonded warehouse",
      "customs bonded warehouse",
      "duty deferment",
      "deferred import duty",
      "bonded storage",
    ],
    relatedTools: ["duty", "compliance", "hs-code"],
    relatedPosts: ["cold-chain-shipping", "customs-clearance-guide"],
  },
  {
    slug: "cold-chain-shipping",
    title: "Cold Chain Shipping for Chocolate & Perishables: Keeping FMCG Intact",
    description:
      "How cold-chain ocean freight actually works — reefer containers, pre-cooling, temperature monitoring and where the chain breaks — so your chocolate, dairy and perishables arrive saleable, not spoiled.",
    excerpt:
      "Premium chocolate can leave perfect and arrive ruined without a single drop. In cold-chain FMCG, the chain is the product. Here's how to keep it intact.",
    date: "2026-05-05",
    author: "Abhinav Srivastava",
    readingTime: 8,
    category: "Cold chain",
    tags: ["Cold chain", "Reefer", "Perishables", "Chocolate"],
    keywords: [
      "cold chain shipping",
      "reefer container",
      "refrigerated shipping",
      "cold chain logistics",
      "shipping chocolate internationally",
      "temperature controlled freight",
    ],
    relatedTools: ["freight", "compliance", "duty"],
    relatedPosts: ["bonded-warehousing-guide", "fcl-vs-lcl-vs-air"],
  },
  {
    slug: "customs-clearance-guide",
    title: "Customs Clearance, Step by Step: What Actually Happens at the Port",
    description:
      "A plain-English walkthrough of the customs clearance process — entry declaration, duty assessment, inspection and release — plus the documents that drive it and how to clear faster every time.",
    excerpt:
      "A container can cross an ocean flawlessly and then sit for a week because one document was wrong. Here's how clearance really works — and how to speed it up.",
    date: "2026-05-19",
    author: "Abhishek Rathi",
    readingTime: 8,
    category: "Compliance",
    tags: ["Customs clearance", "Customs broker", "Import process", "Compliance"],
    keywords: [
      "customs clearance",
      "customs clearance process",
      "how does customs clearance work",
      "import customs clearance",
      "customs broker",
      "clear customs faster",
    ],
    relatedTools: ["compliance", "hs-code", "duty"],
    relatedPosts: ["export-documents-checklist", "demurrage-and-detention"],
  },
  {
    slug: "container-consolidation",
    title: "Container Consolidation: How Mixed-SKU Shipping Cuts Your Freight Bill",
    description:
      "Why a half-empty container costs nearly the same as a full one, the three kinds of consolidation, the FCL-vs-LCL break-even, and how filling the box lowers your freight cost per unit.",
    excerpt:
      "Ocean freight is priced by the box, not the cubic metre you use. Every gap of air is freight you throw away. Consolidation is how you stop.",
    date: "2026-06-02",
    author: "Navvic Trade Desk",
    readingTime: 8,
    category: "Freight",
    tags: ["Consolidation", "LCL", "FCL", "CBM", "Freight cost"],
    keywords: [
      "container consolidation",
      "cargo consolidation",
      "LCL consolidation",
      "freight consolidation",
      "mixed SKU container",
      "fill container rate",
    ],
    relatedTools: ["freight", "duty", "hs-code"],
    relatedPosts: ["fcl-vs-lcl-vs-air", "ocean-freight-rates-2026"],
  },
  {
    slug: "choosing-a-freight-forwarder",
    title: "How to Choose a Freight Forwarder in 2026 (Flexport, Maersk, DHL & the Alternatives)",
    description:
      "A buyer's guide to choosing a freight forwarder — from mega-forwarders like Kuehne+Nagel, DHL and DSV to digital players like Flexport and Forto to specialist FMCG desks — with the questions and red flags that actually matter.",
    excerpt:
      "The biggest forwarder isn't automatically the best one for you. Here's how the landscape breaks down — and the questions that separate a forwarder who saves you money from one who quietly costs you.",
    date: "2026-05-26",
    author: "Abhishek Rathi",
    readingTime: 9,
    category: "Freight",
    tags: ["Freight forwarder", "Flexport", "Logistics", "Carriers"],
    keywords: [
      "how to choose a freight forwarder",
      "best freight forwarders",
      "Flexport alternatives",
      "freight forwarder comparison",
      "Kuehne Nagel vs DHL",
      "FMCG freight forwarder",
    ],
    relatedTools: ["duty", "freight", "incoterms"],
    relatedPosts: ["ocean-freight-rates-2026", "container-consolidation"],
  },
  {
    slug: "export-documents-checklist",
    title: "The Export Documents Checklist: Every Paper Your Shipment Needs",
    description:
      "The complete checklist of export and import documents — commercial invoice, packing list, bill of lading, certificate of origin, health and food-safety certificates — and the discrepancies that strand shipments.",
    excerpt:
      "In international trade the paperwork is the shipment. A flawless container with the wrong documents goes nowhere. Here's every document you need, and why.",
    date: "2026-04-14",
    author: "Navvic Trade Desk",
    readingTime: 8,
    category: "Compliance",
    tags: ["Export documents", "Bill of lading", "Commercial invoice", "Documentation"],
    keywords: [
      "export documents",
      "export documentation checklist",
      "import documents required",
      "commercial invoice",
      "bill of lading",
      "certificate of origin",
    ],
    relatedTools: ["docs", "compliance", "hs-code"],
    relatedPosts: ["customs-clearance-guide", "letters-of-credit"],
  },
  {
    slug: "demurrage-and-detention",
    title: "Demurrage & Detention: How to Stop Bleeding Money at the Port",
    description:
      "The difference between demurrage and detention, how free time and escalating daily charges work, the root causes (almost all preventable), and how to stop these fees before the clock ever starts.",
    excerpt:
      "Demurrage and detention appear out of nowhere and compound daily. They're also among the most avoidable costs in importing. Here's how to never pay them.",
    date: "2026-05-12",
    author: "Abhinav Srivastava",
    readingTime: 7,
    category: "Costing",
    tags: ["Demurrage", "Detention", "Port charges", "Free time"],
    keywords: [
      "demurrage and detention",
      "what is demurrage",
      "demurrage vs detention",
      "avoid demurrage charges",
      "container free time",
      "port storage charges",
    ],
    relatedTools: ["duty", "compliance", "freight"],
    relatedPosts: ["customs-clearance-guide", "bonded-warehousing-guide"],
  },
  {
    slug: "ocean-freight-rates-2026",
    title: "Ocean Freight Rates in 2026: What's Driving Costs and How to Lock Them In",
    description:
      "What actually drives ocean freight rates in 2026 — capacity, geopolitics, fuel and seasonality — the spot-vs-contract decision, and how to protect your landed cost from the swings.",
    excerpt:
      "Ocean rates can double in a quarter and sag for a year. You can't forecast them — but you can stop them from wrecking your margin. Here's how.",
    date: "2026-05-29",
    author: "Abhishek Rathi",
    readingTime: 8,
    category: "Freight",
    tags: ["Ocean freight", "Freight rates", "Spot rates", "Contract rates"],
    keywords: [
      "ocean freight rates",
      "ocean freight rates 2026",
      "shipping container rates",
      "spot vs contract freight",
      "freight rate forecast",
      "reduce freight costs",
    ],
    relatedTools: ["freight", "duty", "hs-code"],
    relatedPosts: ["container-consolidation", "fcl-vs-lcl-vs-air"],
  },
  {
    slug: "letters-of-credit",
    title: "Letters of Credit Explained: Getting Paid (and Paying) Safely in Global Trade",
    description:
      "How letters of credit solve the trust problem in international trade — how they work step by step, the types you'll meet, and the document discrepancies that cause most first-time rejections.",
    excerpt:
      "A buyer and seller who'll never meet must swap a container for a large sum, and neither wants to go first. The letter of credit is how strangers trade safely.",
    date: "2026-04-28",
    author: "Navvic Trade Desk",
    readingTime: 9,
    category: "Trade terms",
    tags: ["Letter of credit", "Payment", "Trade finance", "Documentation"],
    keywords: [
      "letter of credit",
      "letter of credit explained",
      "how does a letter of credit work",
      "documentary credit",
      "L/C discrepancies",
      "trade finance",
    ],
    relatedTools: ["docs", "incoterms", "duty"],
    relatedPosts: ["export-documents-checklist", "incoterms-2020-guide"],
  },
];

/** Maps each post slug to its body component. */
const bodies: Record<string, ComponentType> = {
  "landed-cost-guide": LandedCostGuide,
  "hs-codes-explained": HsCodesExplained,
  "incoterms-2020-guide": Incoterms2020Guide,
  "fcl-vs-lcl-vs-air": FclVsLclVsAir,
  "sourcing-fmcg-brands": SourcingFmcgBrands,
  "bonded-warehousing-guide": BondedWarehousingGuide,
  "cold-chain-shipping": ColdChainShipping,
  "customs-clearance-guide": CustomsClearanceGuide,
  "container-consolidation": ContainerConsolidation,
  "choosing-a-freight-forwarder": ChoosingFreightForwarder,
  "export-documents-checklist": ExportDocumentsChecklist,
  "demurrage-and-detention": DemurrageDetention,
  "ocean-freight-rates-2026": OceanFreightRates2026,
  "letters-of-credit": LettersOfCredit,
};

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostBody(slug: string): ComponentType | undefined {
  return bodies[slug];
}

/** Posts sorted newest-first. */
export function postsByDate(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
