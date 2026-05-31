/* Central SEO/GEO configuration and structured-data (JSON-LD) builders.
   Used by app/layout.tsx, sitemap.ts, robots.ts, manifest.ts and page metadata. */

import type { Metadata } from "next";
import { getTool } from "./tools";
import { toolSeo } from "./tool-seo";

export const SITE_URL = "https://navvic.com";
export const SITE_NAME = "Navvic";
export const LEGAL_NAME = "Navvic Global Trading";
export const CONTACT_EMAIL = "support@navvic.com";

export const DEFAULT_TITLE =
  "Navvic | Import-Export, Freight & Free Trade Tools";

export const DEFAULT_DESCRIPTION =
  "Navvic is an end-to-end import & export and logistics partner. Source premium FMCG brands, ship by ocean and air, clear customs — plus free trade tools: HS code lookup, import duty & landed-cost calculator, Incoterms advisor, freight & container calculator.";

/* Site-wide keyword set. Page-level metadata layers more specific terms on top. */
export const SITE_KEYWORDS = [
  "import export",
  "import export company",
  "logistics partner",
  "supply chain",
  "international trade",
  "cross-border logistics",
  "ocean freight",
  "freight forwarding",
  "customs clearance",
  "FMCG sourcing",
  "FMCG import export",
  "FCL LCL shipping",
  "HS code lookup",
  "HS code classifier",
  "import duty calculator",
  "landed cost calculator",
  "Incoterms 2020",
  "CBM calculator",
  "container load calculator",
  "commercial invoice generator",
];

/** Absolute URL helper. */
export function url(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Build rich page metadata for a tool page from its slug. */
export function buildToolMetadata(slug: string): Metadata {
  const tool = getTool(slug);
  const seo = toolSeo[slug];
  if (!tool) return {};
  const title = `${tool.name} — Free ${tool.tagline}`;
  const description = tool.description;
  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical: tool.href },
    openGraph: {
      type: "website",
      title: `${tool.name} | Navvic`,
      description,
      url: url(tool.href),
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | Navvic`,
      description,
    },
  };
}

type Json = Record<string, unknown>;

/** Organization — who Navvic is. Rendered once site-wide. */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: url("/icon.svg"),
    image: url("/opengraph-image"),
    description:
      "End-to-end import & export of premium FMCG brands — sourcing, ocean & air freight, customs clearance and warehousing across 40+ countries.",
    email: CONTACT_EMAIL,
    areaServed: "Worldwide",
    knowsAbout: [
      "Import and export",
      "Ocean freight",
      "Customs clearance",
      "HS code classification",
      "Incoterms 2020",
      "Landed cost",
      "FMCG distribution",
      "Supply chain logistics",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "sales",
      availableLanguage: ["en"],
    },
  };
}

/** WebSite — enables sitelinks / site name in search. */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

/** A free web tool → SoftwareApplication (price 0). */
export function softwareAppSchema(opts: {
  name: string;
  description: string;
  path: string;
  features?: string[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: url(opts.path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(opts.features ? { featureList: opts.features } : {}),
  };
}

/** FAQPage — strong signal for AI Overviews / "People also ask". */
export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList from [label, path] pairs. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: url(it.path),
    })),
  };
}

/** Product schema for catalog detail pages. */
export function productSchema(opts: {
  name: string;
  brand: string;
  category: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    brand: { "@type": "Brand", name: opts.brand },
    category: opts.category,
    description: opts.description,
    url: url(opts.path),
    image: url("/opengraph-image"),
    seller: { "@id": `${SITE_URL}/#organization` },
  };
}
