import { modulesData, getModuleBySlug } from "@/lib/modules-data"
import { ModuleDetail } from "@/components/module-detail"
import { VizcoFooter } from "@/components/vizco-footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return modulesData.map((m) => ({ slug: m.slug }))
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params
  const mod = getModuleBySlug(slug)

  if (!mod) {
    notFound()
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 px-5 pb-2 pt-6">
        <Link
          href="/presentation-modules"
          className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-popover transition-colors hover:bg-muted"
          aria-label="Retour aux modules"
        >
          <ArrowLeft className="h-8 w-8 text-foreground" />
        </Link>
        <div>
          <h1 className="font-heading text-base font-bold leading-snug text-foreground text-balance">
            {mod.title}
          </h1>
        </div>
      </div>
      <ModuleDetail module={mod} />
      <div className="flex-1" />
      <VizcoFooter />
    </main>
  )
}
