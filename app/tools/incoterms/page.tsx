import { Scale } from "lucide-react";
import IncotermsTool from "@/components/IncotermsTool";
import ToolPageShell from "@/components/ToolPageShell";

export const metadata = {
  title: "Incoterms Advisor — Navvic Tools",
  description:
    "Describe your deal and get the right Incoterm 2020 rule, with a plain-English breakdown of cost and risk.",
};

export default function IncotermsPage() {
  return (
    <ToolPageShell
      icon={<Scale size={24} />}
      badge="AI-powered"
      title="Incoterms"
      gradient="Advisor"
      description="Describe your trade and get the right Incoterms 2020 rule — with a clear breakdown of who pays for what and exactly where risk passes from seller to buyer."
    >
      <IncotermsTool />
    </ToolPageShell>
  );
}
