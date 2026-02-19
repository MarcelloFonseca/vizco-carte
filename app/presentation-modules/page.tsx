import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { VizcoFooter } from "@/components/vizco-footer";
import { ModulesPresentation } from "@/components/modules-presentation";

export default function PresentationModulePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 px-5 pb-2 pt-6">
        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-popover border border-border transition-colors hover:bg-muted"
          aria-label="Retour"
        >
          <ArrowLeft className="h-4 w-4 text-foreground" />
        </Link>
        <div>
          <h1 className="font-heading text-lg font-bold text-foreground">
            Nos modules ERP
          </h1>
          <p className="text-xs text-muted-foreground">
            Solutions integrées Vizco
          </p>
        </div>
      </div>

      <ModulesPresentation />

      <div className="flex-1" />
      <VizcoFooter />
    </main>
  )
}
