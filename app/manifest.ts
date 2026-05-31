import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Import-Export & Trade Tools`,
    short_name: SITE_NAME,
    description:
      "Import & export, freight and logistics — plus free trade tools: HS code lookup, duty & landed-cost calculator, Incoterms, freight calculator.",
    start_url: "/",
    display: "standalone",
    background_color: "#06192c",
    theme_color: "#06192c",
    categories: ["business", "productivity", "logistics"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
