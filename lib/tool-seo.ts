/* Per-tool SEO/GEO content: target keywords, feature list (for SoftwareApplication
   schema) and FAQs. FAQs render as visible content AND as FAQPage JSON-LD, which is
   what gets cited in Google AI Overviews / "People also ask". */

export type ToolSeo = {
  keywords: string[];
  features: string[];
  faqs: { q: string; a: string }[];
};

export const toolSeo: Record<string, ToolSeo> = {
  "hs-code": {
    keywords: [
      "HS code classifier",
      "HS code lookup",
      "HS code finder",
      "find HS code from product description",
      "harmonized system code",
      "HTS code lookup",
      "tariff code finder",
      "HS code from image",
      "what is my HS code",
    ],
    features: [
      "Classify from a plain-English description",
      "Classify from a product photo",
      "Full hierarchy: Chapter, Heading, Subheading, tariff line",
      "Carries the code into duty, compliance and document tools",
    ],
    faqs: [
      {
        q: "What is an HS code and why does it matter?",
        a: "An HS (Harmonized System) code is a globally standardised number that customs authorities use to identify a product. It determines the duty rate, taxes and paperwork your shipment needs, so getting it right makes everything downstream faster and cheaper.",
      },
      {
        q: "How do I find the HS code for my product?",
        a: "Describe the product in plain English — or upload a photo — and Navvic's classifier maps it to the Harmonized System hierarchy: Chapter (2 digits), Heading (4), Subheading (6) and the national tariff line (8 digits).",
      },
      {
        q: "Is the HS Code Classifier free?",
        a: "Yes. The classifier is free to use. Results are indicative — always confirm the final tariff line with your customs broker before filing.",
      },
    ],
  },
  duty: {
    keywords: [
      "import duty calculator",
      "landed cost calculator",
      "customs duty calculator",
      "import tax calculator",
      "duty and VAT calculator",
      "calculate import duty India",
      "US import duty calculator",
      "total landed cost",
    ],
    features: [
      "Import duty, VAT/GST and other charges by destination",
      "Full landed cost per unit",
      "Effective duty rate and assumptions",
      "Works from any HS code",
    ],
    faqs: [
      {
        q: "What is landed cost?",
        a: "Landed cost is the total cost of getting a product to your door: the product value plus freight, insurance, import duty, VAT/GST and other charges. Knowing it protects your margins so there are no surprises when the customs bill arrives.",
      },
      {
        q: "How is import duty calculated?",
        a: "Duty is usually a percentage of the customs value (often CIF: cost + insurance + freight), set by the product's HS code and destination country. Many markets then add VAT/GST on top of the value plus duty. The estimator stacks these for you.",
      },
      {
        q: "Which countries does the duty estimator support?",
        a: "It produces estimates for major markets including India, the US, the EU, the UK, Canada, the UAE and Australia. Figures are indicative — verify against the official tariff schedule before you quote.",
      },
    ],
  },
  compliance: {
    keywords: [
      "import compliance checker",
      "import restrictions checker",
      "import licence requirements",
      "product import requirements",
      "can I import this product",
      "import certification requirements",
      "labelling requirements import",
    ],
    features: [
      "Allowed / restricted / prohibited verdict",
      "Required licences and certifications",
      "Labelling and documentation rules",
      "Check from a description or a photo",
    ],
    faqs: [
      {
        q: "How do I know if a product can be imported into a country?",
        a: "Enter the product and destination market and the compliance checker returns whether it's allowed, restricted or prohibited, plus the licences, certifications and labelling you'll need before it ships.",
      },
      {
        q: "Why check compliance before shipping?",
        a: "Spotting permits and restrictions early avoids seized cargo, fines and costly delays. It's far cheaper to fix paperwork before a container leaves than after it's held at the border.",
      },
      {
        q: "Is this legal advice?",
        a: "No. The checker gives indicative guidance to help you prepare. Confirm requirements with the destination's customs authority or a licensed broker before you commit.",
      },
    ],
  },
  incoterms: {
    keywords: [
      "Incoterms 2020",
      "Incoterms advisor",
      "Incoterms explained",
      "which Incoterm should I use",
      "FOB vs CIF",
      "EXW DAP DDP meaning",
      "Incoterms cost and risk",
    ],
    features: [
      "Recommends the right Incoterm 2020 rule",
      "Plain-English cost and risk breakdown",
      "Seller vs buyer responsibilities at each stage",
      "Suitable transport modes and alternatives",
    ],
    faqs: [
      {
        q: "What are Incoterms?",
        a: "Incoterms (International Commercial Terms) are standard trade rules from the ICC that define who pays for and who bears the risk of each step of a shipment — from the seller's door to the buyer's. The current set is Incoterms 2020.",
      },
      {
        q: "What is the difference between FOB and CIF?",
        a: "Under FOB (Free On Board) the seller's responsibility and risk end once goods are loaded on the vessel; the buyer pays freight and insurance. Under CIF (Cost, Insurance and Freight) the seller pays freight and insurance to the destination port, but risk still transfers at loading.",
      },
      {
        q: "Which Incoterm should I use?",
        a: "It depends on how much of the journey you want to control and where you want risk to transfer. Describe your deal in the advisor and it recommends a rule with the trade-offs spelled out.",
      },
    ],
  },
  docs: {
    keywords: [
      "commercial invoice generator",
      "packing list generator",
      "export documents",
      "free commercial invoice template",
      "export paperwork",
      "shipping documents generator",
    ],
    features: [
      "Print-ready commercial invoice",
      "Matching packing list",
      "One form fills both documents",
      "Professional, consistent formatting",
    ],
    faqs: [
      {
        q: "What documents do I need to export a shipment?",
        a: "At minimum most shipments need a commercial invoice and a packing list; depending on the goods and route you may also need a certificate of origin, licences and transport documents. Navvic's generator produces a print-ready commercial invoice and packing list from a single form.",
      },
      {
        q: "What is the difference between a commercial invoice and a packing list?",
        a: "A commercial invoice states the value and terms of the sale and is used by customs to assess duty. A packing list details how the goods are packed — cartons, weights and dimensions — and is used to verify the shipment physically.",
      },
      {
        q: "Is the document generator free?",
        a: "Yes. Fill one form and generate both documents free, ready to print or save as PDF.",
      },
    ],
  },
  freight: {
    keywords: [
      "CBM calculator",
      "container load calculator",
      "chargeable weight calculator",
      "freight calculator",
      "how many cartons fit in a container",
      "20ft 40ft container capacity",
      "volumetric weight calculator",
    ],
    features: [
      "CBM (volume) from carton dimensions",
      "Chargeable weight for air and LCL",
      "Cartons per 20ft / 40ft / 40HC container",
      "Pick the cheapest shipping mode",
    ],
    faqs: [
      {
        q: "How do I calculate CBM?",
        a: "CBM (cubic metres) = length × width × height of one carton in metres, multiplied by the number of cartons. The freight calculator does this and converts to chargeable weight automatically.",
      },
      {
        q: "How many cartons fit in a 20ft or 40ft container?",
        a: "A 20ft container holds roughly 28–33 CBM and a 40ft about 58–67 CBM of usable space, so the carton count depends on your box size. Enter your dimensions and the calculator shows how many fit and how full each container is.",
      },
      {
        q: "What is chargeable weight?",
        a: "Carriers bill the greater of actual weight and volumetric (dimensional) weight. For air freight volumetric weight is volume in cm³ ÷ 6000; for LCL sea freight 1 CBM is treated as 1000 kg. The calculator returns the chargeable figure used to price your shipment.",
      },
    ],
  },
};
