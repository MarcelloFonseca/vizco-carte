import Image from 'next/image'

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center gap-5 pt-12 pb-6">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="font-heading text-3xl font-bold tracking-tight text-primary-foreground">
          <Image src="/vizcoLogo.png" alt="Logo VizCo" width={96} height={96} />
        </span>
        <p className="text-xs text-muted-foreground mt-2">
          <strong>Solution ERP pour le secteur manufacturier</strong>
        </p>
      </div>
    </header>
  )
}
