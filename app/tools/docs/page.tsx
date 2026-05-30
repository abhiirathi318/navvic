import { FileText } from "lucide-react";
import DocsTool from "@/components/DocsTool";
import ToolPageShell from "@/components/ToolPageShell";

export const metadata = {
  title: "Export Document Generator — Navvic Tools",
  description: "Generate a print-ready commercial invoice and packing list from one simple form.",
};

export default function DocsPage() {
  return (
    <ToolPageShell
      icon={<FileText size={24} />}
      badge="Instant generator"
      title="Export Document"
      gradient="Generator"
      description="Fill one form and produce a professional, print-ready commercial invoice and packing list — ready to save as PDF and send with your shipment."
      wide
    >
      <DocsTool />
    </ToolPageShell>
  );
}
