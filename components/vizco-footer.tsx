import Image from 'next/image';
import Link from 'next/link';

export function VizcoFooter() {
  return (
    <footer className="flex flex-col items-center gap-1 pb-8 pt-8">
      <div className="flex items-center gap-1.5">
        <span className="font-heading text-xs font-semibold tracking-wide text-muted-foreground">
          <Link href="https://vizco.ca" target="_blank" rel="noopener noreferrer">
          <Image src="/vizcoLogo.png" alt="Logo VizCo" width={96} height={96} />
          </Link>
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground">
        Carte digitale
      </p>
    </footer>
  )
}
