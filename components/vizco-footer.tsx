import Image from 'next/image';

export function VizcoFooter() {
  return (
    <footer className="flex flex-col items-center gap-1 pb-8 pt-8">
      <div className="flex items-center gap-1.5">
        <span className="font-heading text-xs font-semibold tracking-wide text-muted-foreground">
          <Image src="/vizcoLogo.png" alt="Logo VizCo" width={96} height={96} />
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground">
        Carte digitale
      </p>
    </footer>
  )
}
