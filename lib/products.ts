export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: "Chocolate" | "Pasta & Grains" | "Beverages" | "Snacks" | "Pantry" | "Confectionery";
  origin: string;
  originFlag: string;
  moq: string;
  leadTime: string;
  blurb: string;
  description: string;
  highlights: string[];
  accent: string;
  certifications: string[];
  containerLoad: string;
};

export const products: Product[] = [
  {
    slug: "tonys-chocolonely-milk",
    name: "Tony's Chocolonely Milk Chocolate 180g",
    brand: "Tony's Chocolonely",
    category: "Chocolate",
    origin: "Netherlands",
    originFlag: "🇳🇱",
    moq: "20 cases",
    leadTime: "3–4 weeks",
    blurb: "Fairtrade, slavery-free Dutch milk chocolate in iconic uneven chunks.",
    description:
      "Tony's Chocolonely is on a mission to make 100% slave-free the norm in chocolate. This classic 32% milk chocolate bar is crafted with Fairtrade-certified West African cocoa and packaged in the brand's recognizable wrapper. A fast-moving impulse SKU with strong repeat purchase in European and North American grocery.",
    highlights: ["32% cocoa, Fairtrade certified", "Slave-free supply chain", "High shelf velocity impulse SKU"],
    accent: "#c0392b",
    certifications: ["Fairtrade", "Rainforest Alliance"],
    containerLoad: "1,820 cases / 20ft",
  },
  {
    slug: "lindt-excellence-70",
    name: "Lindt Excellence 70% Dark 100g",
    brand: "Lindt",
    category: "Chocolate",
    origin: "Switzerland",
    originFlag: "🇨🇭",
    moq: "30 cases",
    leadTime: "2–3 weeks",
    blurb: "Premium Swiss dark chocolate with deep cocoa intensity.",
    description:
      "Lindt Excellence 70% Cocoa delivers an intense yet smooth dark chocolate experience from the master Swiss chocolatiers. A premium gifting and self-treat staple with year-round demand and strong margins across modern trade.",
    highlights: ["Master Swiss chocolatier craft", "70% cocoa intensity", "Premium gifting positioning"],
    accent: "#7b4b27",
    certifications: ["UTZ Cocoa"],
    containerLoad: "2,100 cases / 20ft",
  },
  {
    slug: "ritter-sport-hazelnut",
    name: "Ritter Sport Whole Hazelnuts 100g",
    brand: "Ritter Sport",
    category: "Chocolate",
    origin: "Germany",
    originFlag: "🇩🇪",
    moq: "25 cases",
    leadTime: "3 weeks",
    blurb: "Square German milk chocolate loaded with whole roasted hazelnuts.",
    description:
      "The unmistakable square format from Ritter Sport, packed with whole roasted hazelnuts in creamy Alpine milk chocolate. A category bestseller with iconic snap-open packaging and broad consumer recognition across export markets.",
    highlights: ["Whole roasted hazelnuts", "Iconic square format", "Cocoa-sustainable sourcing"],
    accent: "#1f6f3c",
    certifications: ["Cocoa Sustainability Program"],
    containerLoad: "2,400 cases / 20ft",
  },
  {
    slug: "barilla-spaghetti-n5",
    name: "Barilla Spaghetti No.5 500g",
    brand: "Barilla",
    category: "Pasta & Grains",
    origin: "Italy",
    originFlag: "🇮🇹",
    moq: "40 cases",
    leadTime: "2–3 weeks",
    blurb: "Italy's #1 durum wheat semolina spaghetti — the global pantry standard.",
    description:
      "Barilla Spaghetti No.5 is the world's most recognized pasta, made from 100% premium durum wheat semolina with the perfect al dente bite. A high-rotation pantry essential with universal demand and dependable container economics.",
    highlights: ["100% durum wheat semolina", "World's #1 pasta brand", "High-rotation staple SKU"],
    accent: "#1a4f9c",
    certifications: ["Non-GMO", "ISO 22000"],
    containerLoad: "1,560 cases / 20ft",
  },
  {
    slug: "de-cecco-penne-rigate",
    name: "De Cecco Penne Rigate No.41 500g",
    brand: "De Cecco",
    category: "Pasta & Grains",
    origin: "Italy",
    originFlag: "🇮🇹",
    moq: "35 cases",
    leadTime: "3 weeks",
    blurb: "Bronze-die penne with superior sauce-holding texture.",
    description:
      "De Cecco Penne Rigate is bronze-die extruded and slow-dried at low temperatures, giving it a rough, porous surface that clings to sauces. A premium-tier pasta favored by foodservice and discerning retail shoppers alike.",
    highlights: ["Bronze-die extrusion", "Low-temperature slow drying", "Premium foodservice grade"],
    accent: "#b8860b",
    certifications: ["Non-GMO"],
    containerLoad: "1,560 cases / 20ft",
  },
  {
    slug: "nutella-jar-750",
    name: "Nutella Hazelnut Spread 750g",
    brand: "Ferrero",
    category: "Pantry",
    origin: "Italy",
    originFlag: "🇮🇹",
    moq: "30 cases",
    leadTime: "2–3 weeks",
    blurb: "The world's favorite hazelnut cocoa spread in the family-size jar.",
    description:
      "Nutella by Ferrero needs no introduction — a creamy hazelnut and cocoa spread loved across generations. The 750g family jar is a breakfast-aisle powerhouse with exceptional brand pull and consistent year-round volume.",
    highlights: ["Globally iconic breakfast brand", "Family-size 750g format", "Exceptional brand pull"],
    accent: "#8b2f1d",
    certifications: ["Palm Oil RSPO"],
    containerLoad: "1,200 cases / 20ft",
  },
  {
    slug: "pringles-original",
    name: "Pringles Original 165g",
    brand: "Pringles",
    category: "Snacks",
    origin: "United States",
    originFlag: "🇺🇸",
    moq: "30 cases",
    leadTime: "3–4 weeks",
    blurb: "Stackable saddle-shaped crisps in the iconic resealable can.",
    description:
      "Pringles Original brings the famous uniform stack and resealable canister that travels and merchandises beautifully. A top-tier savory snack SKU with global recognition and strong impulse and on-the-go appeal.",
    highlights: ["Iconic resealable can", "Durable for export logistics", "Global impulse snack leader"],
    accent: "#c0392b",
    certifications: ["HACCP"],
    containerLoad: "1,900 cases / 20ft",
  },
  {
    slug: "oreo-original-154",
    name: "Oreo Original Sandwich Cookies 154g",
    brand: "Oreo",
    category: "Snacks",
    origin: "United States",
    originFlag: "🇺🇸",
    moq: "40 cases",
    leadTime: "3 weeks",
    blurb: "The world's best-selling cookie — cocoa wafers with vanilla creme.",
    description:
      "Oreo is the planet's favorite cookie: two crisp cocoa wafers hugging a sweet vanilla creme. A universally demanded snack SKU with relentless shelf rotation and broad multi-channel distribution.",
    highlights: ["World's best-selling cookie", "Universal demand", "Multi-channel rotation"],
    accent: "#1a2b6b",
    certifications: ["RSPO Palm Oil"],
    containerLoad: "2,200 cases / 20ft",
  },
  {
    slug: "maple-joe-syrup",
    name: "Maple Joe Pure Maple Syrup 250g",
    brand: "Maple Joe",
    category: "Pantry",
    origin: "Canada",
    originFlag: "🇨🇦",
    moq: "20 cases",
    leadTime: "4 weeks",
    blurb: "100% pure Canadian maple syrup, amber grade rich taste.",
    description:
      "Maple Joe delivers 100% pure Canadian maple syrup with the classic amber-grade depth. A premium pantry and breakfast indulgence with rising global demand for natural sweeteners and clean-label credentials.",
    highlights: ["100% pure maple, single origin", "Amber grade rich taste", "Clean-label natural sweetener"],
    accent: "#a0522d",
    certifications: ["Organic", "Non-GMO"],
    containerLoad: "1,400 cases / 20ft",
  },
  {
    slug: "haribo-goldbears",
    name: "Haribo Goldbears 200g",
    brand: "Haribo",
    category: "Confectionery",
    origin: "Germany",
    originFlag: "🇩🇪",
    moq: "35 cases",
    leadTime: "3 weeks",
    blurb: "The original gummy bear — five fruity flavors since 1922.",
    description:
      "Haribo Goldbears are the original gummy bears that started it all, with five classic fruit flavors and unmistakable chewy texture. A confectionery cornerstone with cross-generational appeal and very high turnover.",
    highlights: ["The original gummy bear", "Five classic fruit flavors", "Very high turnover SKU"],
    accent: "#e1a100",
    certifications: ["Halal (select lines)"],
    containerLoad: "2,600 cases / 20ft",
  },
  {
    slug: "illy-classico-beans",
    name: "Illy Classico Whole Bean Coffee 250g",
    brand: "Illy",
    category: "Beverages",
    origin: "Italy",
    originFlag: "🇮🇹",
    moq: "25 cases",
    leadTime: "3 weeks",
    blurb: "Pressurized-tin Italian espresso blend of 9 Arabica origins.",
    description:
      "Illy Classico is a balanced medium-roast espresso blend crafted from nine premium Arabica origins, sealed in a pressurized tin to lock in aroma. A premium beverage SKU with strong specialty-retail and HoReCa demand.",
    highlights: ["9 Arabica origins blend", "Pressurized aroma-lock tin", "Premium HoReCa demand"],
    accent: "#7b1f1f",
    certifications: ["100% Arabica"],
    containerLoad: "1,100 cases / 20ft",
  },
  {
    slug: "twinings-earl-grey",
    name: "Twinings Earl Grey 100 Tea Bags",
    brand: "Twinings",
    category: "Beverages",
    origin: "United Kingdom",
    originFlag: "🇬🇧",
    moq: "25 cases",
    leadTime: "3 weeks",
    blurb: "Classic British bergamot-scented black tea since 1706.",
    description:
      "Twinings Earl Grey blends fine black teas with the distinctive citrus aroma of bergamot, a recipe refined over three centuries. A pantry staple with loyal global following and dependable repeat purchase.",
    highlights: ["Bergamot-scented black tea", "Heritage brand since 1706", "Loyal repeat purchase base"],
    accent: "#1f5f3f",
    certifications: ["Rainforest Alliance"],
    containerLoad: "1,800 cases / 20ft",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const categories = [
  "All",
  "Chocolate",
  "Pasta & Grains",
  "Snacks",
  "Beverages",
  "Pantry",
  "Confectionery",
] as const;
