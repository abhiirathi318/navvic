import { ShieldCheck } from "lucide-react";
import ComplianceTool from "@/components/ComplianceTool";
import ToolPageShell from "@/components/ToolPageShell";
import { buildToolMetadata } from "@/lib/seo";

export const metadata = buildToolMetadata("compliance");

export default function CompliancePage() {
  return (
    <ToolPageShell
      icon={<ShieldCheck size={24} />}
      badge="AI-powered"
      title="Import Compliance"
      gradient="Checker"
      slug="compliance"
      description="Describe a product or upload a photo, pick the destination market, and see import licences, certifications, labelling rules and restrictions before your cargo ships."
    >
      <ComplianceTool />
    </ToolPageShell>
  );
}
