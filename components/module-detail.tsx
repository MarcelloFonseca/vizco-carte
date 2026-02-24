import type React from "react";
import { CheckCircle2 } from "lucide-react";
import { HexagonIcon } from "@/components/modules-presentation";
import type { ERPModule } from "@/lib/modules-data";

export function ModuleDetail({ module: mod }: { module: ERPModule }) {
  return (
    <div className="flex flex-col gap-5 px-5 py-4">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-popover px-5 py-6 text-center">
        <HexagonIcon image={mod.image} alt={mod.title} />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {mod.longDescription}
        </p>
      </div>

      <section>
        <h2 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-primary">
          Fonctionnalités clés
        </h2>
        <div className="flex flex-col gap-2">
          {mod.features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 rounded-lg border border-border bg-popover px-4 py-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">
                  {feature.title}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
