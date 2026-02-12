"use client"

import { Phone, Mail, Globe, Download, MapPin } from "lucide-react"

const actions = [
  {
    icon: Phone,
    label: "Appeler",
    href: "tel:+14503002524",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mpare@trikeb.com",
  },
  {
    icon: Globe,
    label: "Site web",
    href: "https://vizco.ca",
  },
  {
    icon: MapPin,
    label: "Adresse",
    href: "https://maps.app.goo.gl/2baiC5typcyxazan6",
  },
]

export function ActionButtons() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Martin Paré (VizCo)
ORG:Martin Paré (VizCo);
TITLE:Vendeur
ADR;TYPE=WORK:;;1370 Rue de Coulomb Bureau 100, Boucherville, QC J4B 7J4;Canada
TEL:+14503002524
EMAIL:mpare@trikeb.com
URL:https://vizco.ca
NOTE:Solution ERP pour le secteur manufacturier
END:VCARD`

    const blob = new Blob([vcard], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "vizco.vcf"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="flex flex-col gap-3 px-6" aria-label="Actions de contact">
      <div className="grid grid-cols-4 gap-2.5">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className="flex flex-col justify-center items-center gap-2 rounded-lg border border-border bg-popover p-3.5 transition-colors hover:bg-muted active:scale-95"
            aria-label={action.label}
          >
            <action.icon className="h-5 w-5 text-primary" />
            <span className="text-[10px] font-medium text-foreground text-center break-words">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSaveContact}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#1A4899] active:bg-[#002A72] active:scale-[0.98]"
      >
        <Download className="h-4 w-4" />
        Enregistrer le contact
      </button>
    </section>
  )
}
