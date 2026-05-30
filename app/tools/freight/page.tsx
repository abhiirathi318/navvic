import { Container } from "lucide-react";
import FreightTool from "@/components/FreightTool";
import ToolPageShell from "@/components/ToolPageShell";

export const metadata = {
  title: "Freight & Container Calculator — Navvic Tools",
  description:
    "Calculate CBM, chargeable weight and how many cartons fit a 20ft/40ft container or an LCL/air shipment.",
};

export default function FreightPage() {
  return (
    <ToolPageShell
      icon={<Container size={24} />}
      badge="Instant calculator"
      title="Freight & Container"
      gradient="Calculator"
      description="Enter your carton size, weight and quantity to see total volume, chargeable weight and exactly how many cartons fit a container — so you book the right mode and never ship empty space."
    >
      <FreightTool />
    </ToolPageShell>
  );
}
