"use client"

import { Phone, Mail, Globe, Download, MapPin } from "lucide-react";

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

const handleSaveContact = async () => {
  const vcard = `BEGIN:VCARD\r
VERSION:3.0\r
FN:Martin Paré\r
N:Paré;Martin;;;\r
ORG:Trikeb\r
TITLE:Directeur des ventes\r
TEL;TYPE=WORK,VOICE:+14503002524\r
EMAIL;TYPE=WORK:mpare@trikeb.com\r
URL:https://vizco.ca\r
ADR;TYPE=WORK:;;1370 Rue de Coulomb Bureau 100;Boucherville;QC;J4B 7J4;Canada\r
NOTE:Solution ERP pour le secteur manufacturier\r
END:VCARD\r
`;

  const file = new File([vcard], "martin-pare.vcf", {
    type: "text/x-vcard",
  });

  const isAndroid = /android/i.test(navigator.userAgent);

  if (isAndroid && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "Martin Paré",
      });
      return;
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") return;
    }
  }

  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = "martin-pare.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
};

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
