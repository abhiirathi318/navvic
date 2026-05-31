import { FileText } from "lucide-react";
import DocsTool from "@/components/DocsTool";
import ToolPageShell from "@/components/ToolPageShell";
import { buildToolMetadata } from "@/lib/seo";

export const metadata = buildToolMetadata("docs");

export default function DocsPage() {
  return (
    <ToolPageShell
      icon={<FileText size={24} />}
      badge="Instant generator"
      title="Export Document"
      gradient="Generator"
      slug="docs"
      description="Fill one form and produce a professional, print-ready commercial invoice and packing list, ready to save as PDF and send with your shipment."
      wide
    >
      <DocsTool />
    </ToolPageShell>
  );
}
