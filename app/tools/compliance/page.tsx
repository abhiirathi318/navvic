import { ShieldCheck } from "lucide-react";
import ComplianceTool from "@/components/ComplianceTool";
import ToolPageShell from "@/components/ToolPageShell";

export const metadata = {
  title: "Import Compliance Checker — Navvic Tools",
  description:
    "Check whether a product can be imported into a market and what licences, certifications and labelling it needs.",
};

export default function CompliancePage() {
  return (
    <ToolPageShell
      icon={<ShieldCheck size={24} />}
      badge="AI-powered"
      title="Import Compliance"
      gradient="Checker"
      description="Describe a product or upload a photo, pick the destination market, and see import licences, certifications, labelling rules and restrictions before your cargo ships."
    >
      <ComplianceTool />
    </ToolPageShell>
  );
}
