import { Scale } from "lucide-react";
import IncotermsTool from "@/components/IncotermsTool";
import ToolPageShell from "@/components/ToolPageShell";
import { buildToolMetadata } from "@/lib/seo";

export const metadata = buildToolMetadata("incoterms");

export default function IncotermsPage() {
  return (
    <ToolPageShell
      icon={<Scale size={24} />}
      badge="AI-powered"
      title="Incoterms"
      gradient="Advisor"
      slug="incoterms"
      description="Describe your trade and get the right Incoterms 2020 rule, with a clear breakdown of who pays for what and exactly where risk passes from seller to buyer."
    >
      <IncotermsTool />
    </ToolPageShell>
  );
}
