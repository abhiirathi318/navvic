import { Container } from "lucide-react";
import FreightTool from "@/components/FreightTool";
import ToolPageShell from "@/components/ToolPageShell";
import { buildToolMetadata } from "@/lib/seo";

export const metadata = buildToolMetadata("freight");

export default function FreightPage() {
  return (
    <ToolPageShell
      icon={<Container size={24} />}
      badge="Instant calculator"
      title="Freight & Container"
      gradient="Calculator"
      slug="freight"
      description="Enter your carton size, weight and quantity to see total volume, chargeable weight and exactly how many cartons fit a container, so you book the right mode and never ship empty space."
    >
      <FreightTool />
    </ToolPageShell>
  );
}
