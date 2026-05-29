import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

export function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const q = req.nextUrl.searchParams.get("q")?.toLowerCase();

  let result = products;

  if (category && category !== "All") {
    result = result.filter((p) => p.category === category);
  }
  if (q) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ count: result.length, products: result });
}
