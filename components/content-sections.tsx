import React from "react"
import {
  Linkedin,
  Globe,
  CalendarDays,
  Presentation,
  FileText,
  Package,
  BarChart3,
  Users,
  ChevronRight,
} from "lucide-react"

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 font-heading text-[12.9px] font-semibold uppercase tracking-widest text-primary">
      {children}
    </h2>
  )
}

function SectionItem({
  icon: Icon,
  label,
  description,
  href,
  iconColor = "text-primary",
}: {
  icon: React.ElementType
  label: string
  description?: string
  href: string
  iconColor?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border bg-popover px-4 py-3 transition-colors hover:bg-muted active:scale-[0.98]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
        <Icon className={`h-[18px] w-[18px] ${iconColor}`} />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {description && (
          <span className="text-[11px] text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </a>
  )
}

export function ContentSections() {
  return (
    <div className="flex flex-col gap-6 px-6 pt-5">
      {/* Reseaux sociaux */}
      <section aria-label="Reseaux sociaux">
        <SectionTitle>Reseaux sociaux</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={Linkedin}
            label="LinkedIn"
            description="linkedin.com/company/vizco"
            href="https://linkedin.com/company/vizco"
          />
          <SectionItem
            icon={Globe}
            label="Site web"
            description="vizco.ca"
            href="https://vizco.ca"
          />
        </div>
      </section>

      {/* Evenements */}
      <section aria-label="Evenements">
        <SectionTitle>Evenements</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={CalendarDays}
            label="Nos evenements a venir"
            description="Conferences, salons et ateliers"
            href="#evenements"
            iconColor="text-accent"
          />
          <SectionItem
            icon={CalendarDays}
            label="Webinaires"
            description="Sessions en ligne gratuites"
            href="#webinaires"
            iconColor="text-accent"
          />
        </div>
      </section>

      {/* Materiel de presentation */}
      <section aria-label="Materiel de presentation">
        <SectionTitle>Materiel de presentation</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={Presentation}
            label="Brochure corporative"
            description="PDF - Presentation de Vizco"
            href="#brochure"
          />
          <SectionItem
            icon={FileText}
            label="Portfolio de services"
            description="PDF - Nos solutions detaillees"
            href="#portfolio"
          />
        </div>
      </section>

      {/* Produits integres a Vizco */}
      <section aria-label="Produits integres a Vizco">
        <SectionTitle>Produits integres</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={Package}
            label="Vizco Connect"
            description="Cartes de visite NFC & QR"
            href="#vizco-connect"
            iconColor="text-secondary"
          />
          <SectionItem
            icon={BarChart3}
            label="Vizco Analytics"
            description="Tableau de bord et statistiques"
            href="#vizco-analytics"
            iconColor="text-secondary"
          />
          <SectionItem
            icon={Users}
            label="Vizco CRM"
            description="Gestion de contacts intelligente"
            href="#vizco-crm"
            iconColor="text-secondary"
          />
        </div>
      </section>
    </div>
  )
}
