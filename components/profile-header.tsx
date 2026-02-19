import Link from 'next/link';
import Image from 'next/image';

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center gap-5 pt-12 pb-6">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="font-heading text-3xl font-bold tracking-tight text-primary-foreground">
          <Link href="https://vizco.ca" target="_blank" rel="noopener noreferrer">
            <Image src="/vizcoLogo.png" alt="Logo VizCo" width={96} height={96} />
          </Link>
        </span>
        <p className="text-xs text-muted-foreground mt-2">
          <strong>Solution ERP pour le secteur manufacturier</strong>
        </p>
        <div className='flex items-center justify-center border border-[#00348E] rounded-[3px] p-2 mt-2 shadow-md text-wrap w-[90%]'>
        <p className="text-sm text-muted-foreground">
          Si vous souhaitez en savoir plus, contactez <strong>Martin Paré</strong> notre <strong>directeur des ventes</strong>
        </p>
        </div>
      </div>
    </header>
  )
}
