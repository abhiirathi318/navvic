import { Calculator } from "lucide-react";
import DutyTool from "@/components/DutyTool";
import ToolPageShell from "@/components/ToolPageShell";
import { buildToolMetadata } from "@/lib/seo";

export const metadata = buildToolMetadata("duty");

export default function DutyPage() {
  return (
    <ToolPageShell
      icon={<Calculator size={24} />}
      badge="AI-powered"
      title="Duty & Landed-Cost"
      gradient="Estimator"
      slug="duty"
      description="Enter an HS code, shipment value and destination to estimate import duty, VAT/GST and other charges, and see the true landed cost before you commit to a deal."
    >
      <DutyTool />
    </ToolPageShell>
  );
}
