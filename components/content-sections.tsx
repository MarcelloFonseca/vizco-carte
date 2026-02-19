import React from "react";
import haorix from "@/public/Haorix.png";
import Image, { ImageProps } from 'next/image';
import VizNewsMark from "@/public/VizNewsMark.png";
import { Linkedin, Globe, CalendarDays, Presentation, FileText } from "lucide-react";

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
  icon: React.ElementType | React.FC<ImageProps>
  label: string
  description?: string
  href?: string
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
    </a>
  )
}

export function ContentSections() {
  return (
    <div className="flex flex-col gap-6 px-6 pt-5">

      <section aria-label="Reseaux sociaux">
        <SectionTitle>Réseaux sociaux</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={Globe}
            label="Site web"
            description="Site web VizCo"
            href="https://vizco.ca"
            iconColor="text-secondary"
          />
          <SectionItem
            icon={Linkedin}
            label="LinkedIn"
            description="Page LinkedIn de VizCo"
            href="https://www.linkedin.com/company/trikeb"
            iconColor="text-secondary"
          />
        </div>
      </section>

      <section aria-label="Evenements">
        <SectionTitle>Événements à venir</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={CalendarDays}
            label="AVFQ"
            description="Exposant à l'AVFQ 2026"
            href="https://www.avfq.ca/evenements/Congres-2026"
            iconColor="text-secondary"
          />
        </div>
      </section>

      <section aria-label="Materiel de presentation">
        <SectionTitle>Matériel de présentation</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={Presentation}
            label="Brochure corporative"
            description="Présentation de Vizco - PDF"
            href="https://developmentlessard.com/VizcoRevamp/wp-content/uploads/2025/04/Solution-VizCo-Brochure-1.pdf"
            iconColor="text-secondary"
          />
          <SectionItem
            icon={FileText}
            label="Présentation générale VizCo"
            description="Présentation détaillée de nos produits et services"
            href="https://my.visme.co/view/vm1mk9m3-presentation-vizco-beta"
            iconColor="text-secondary"
          />
        </div>
      </section>

      <section aria-label="Bulletin d'information VizNews">
        <SectionTitle>Bulletin d'information VizNews</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={() => <Image src={VizNewsMark} alt="VizNews" width={18} height={18} />}
            label="VizNews"
            description="Des réflexions concrètes de nos experts pour faire avancer votre usine, à chaque mois."
            href="https://developmentlessard.com/VizcoRevamp/viznews-inscription/"
            iconColor="text-secondary"
          />
        </div>
      </section>

      <section aria-label="Produits integres a Vizco">
        <SectionTitle>Produits intégrés</SectionTitle>
        <div className="flex flex-col gap-2">
          <SectionItem
            icon={() => <Image src={haorix} alt="Haorix" width={18} height={18} />}
            label="HAORIX"
            description="Console de production pour suivre vos opérations en temps réel"
            href="https://haorix.ca"
            iconColor="text-secondary"
          />
        </div>
      </section>
    </div>
  )
}
