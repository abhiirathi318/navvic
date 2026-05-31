/* Blog post registry. Metadata lives here; each post's body is a React
   component under components/blog/posts/<Component>.tsx, mapped by slug below. */

import type { ComponentType } from "react";
import LandedCostGuide from "@/components/blog/posts/LandedCostGuide";
import HsCodesExplained from "@/components/blog/posts/HsCodesExplained";
import Incoterms2020Guide from "@/components/blog/posts/Incoterms2020Guide";
import FclVsLclVsAir from "@/components/blog/posts/FclVsLclVsAir";
import SourcingFmcgBrands from "@/components/blog/posts/SourcingFmcgBrands";

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
];

/** Maps each post slug to its body component. */
const bodies: Record<string, ComponentType> = {
  "landed-cost-guide": LandedCostGuide,
  "hs-codes-explained": HsCodesExplained,
  "incoterms-2020-guide": Incoterms2020Guide,
  "fcl-vs-lcl-vs-air": FclVsLclVsAir,
  "sourcing-fmcg-brands": SourcingFmcgBrands,
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
