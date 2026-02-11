export function VizcoFooter() {
  return (
    <footer className="flex flex-col items-center gap-1 pb-8 pt-8">
      <div className="flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-primary">
          <span className="font-heading text-[10px] font-bold text-primary-foreground">
            V
          </span>
        </div>
        <span className="font-heading text-xs font-semibold tracking-wide text-muted-foreground">
          VIZCO
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground">
        Carte de visite digitale
      </p>
    </footer>
  )
}
