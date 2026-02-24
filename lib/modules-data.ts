import type React from "react";
import type { StaticImageData } from "next/image";

import GC from "@/public/GC.png";
import SAV from "@/public/SAV.png";
import PPA from "@/public/PPA.png";
import VRC from "@/public/VRC.png";
import GEP from "@/public/GEP.png";
import { BadgeDollarSign, ClipboardCheck, Factory, Wrench, Calculator } from "lucide-react";

export interface ModuleFeature {
  title: string
  description: string
}

export interface ERPModule {
  slug: string
  image: StaticImageData
  title: string
  shortDescription: string
  longDescription: string
  features: ModuleFeature[]
}

export const modulesData: ERPModule[] = [
  {
  slug: "ventes-relations-clients",
  image: VRC,
  title: "Ventes et relations clients",
  shortDescription:
    "Centralisez votre CRM, gérez vos opportunités et convertissez vos devis en commandes plus rapidement.",
  longDescription:
    "Centralisez comptes, contacts, opportunités et devis pour piloter vos ventes B2B, gérer des devis complexes (CPQ) et assurer la continuité jusqu’à la commande, la production et la livraison.",
  features: [
    {
      title: "CRM comptes & contacts enrichis",
      description:
        "Hiérarchie maison-mère/filiales, contacts par rôle, historique d’interactions et segmentation.",
    },
    {
      title: "Pipeline & opportunités avancés",
      description:
        "Étapes configurables, multi-intervenants, documents liés, scoring et suivi des versions.",
    },
    {
      title: "Devis & configuration produits (CPQ)",
      description:
        "Contraintes techniques, calculs de prix dynamiques et devis multi-étapes (ERP si applicable).",
    },
    {
      title: "Synchronisation ventes → opérations",
      description:
        "Devis converti en commande, traçabilité devis→facture et alertes sur retards potentiels.",
    },
  ],
},
  {
  slug: "gestion-execution-projets",
  image: GEP,
  title: "Gestion et execution de projets",
  shortDescription:
    "Planifiez, suivez et livrez vos projets avec une vision claire des taches, des temps et des documents.",
  longDescription:
    "Centralisez vos projets, taches, documents et jalons pour garder une vue d’ensemble, responsabiliser les equipes et suivre l’avancement, les temps et les priorites en continu.",
  features: [
    {
      title: "Gestion centralisee des projets",
      description:
        "Structurez vos projets et conservez une vision globale en tout temps.",
    },
    {
      title: "Suivi clair des taches & jalons",
      description:
        "Assignez, planifiez et regroupez les taches en jalons pour suivre la progression.",
    },
    {
      title: "Saisie des temps d’activites",
      description:
        "Enregistrez les heures par tache/projet pour un meilleur controle des efforts et budgets.",
    },
    {
      title: "Documents & rapports securises",
      description:
        "Centralisez les pieces jointes, securisez l’acces et analysez via des tableaux de bord.",
    },
  ],
},
  {
  slug: "production-planification-approvisionnements",
  image: PPA,
  title: "Production, planification et approvisionnements",
  shortDescription:
    "Planifiez la production, optimisez les stocks et securisez vos approvisionnements pour livrer plus vite.",
  longDescription:
    "Centralisez la planification, les ordres de fabrication, les achats et les stocks afin d’assurer une execution fluide de la production, reduire les ruptures et respecter vos delais de livraison.",
  features: [
    {
      title: "Planification & ordonnancement",
      description:
        "Planifiez et priorisez les ordres de fabrication selon la demande et la capacite.",
    },
    {
      title: "Gestion des approvisionnements",
      description:
        "Generez les besoins d’achats, suivez vos fournisseurs et reduisez les ruptures.",
    },
    {
      title: "Gestion des stocks",
      description:
        "Suivez les niveaux, mouvements et disponibilites d’inventaire en temps reel.",
    },
    {
      title: "Suivi production & controle qualite",
      description:
        "Suivez l’avancement en atelier et assurez la conformite a chaque etape.",
    },
  ],
},
  {
  slug: "service-technique-apres-vente",
  image: SAV,
  title: "Service technique et apres-vente",
  shortDescription:
    "Centralisez vos demandes de service, planifiez les interventions et assurez un suivi fiable de la maintenance.",
  longDescription:
    "Gerez les tickets, les interventions et la maintenance au meme endroit afin d’accelerer la resolution, structurer le suivi client et maintenir vos equipements en bon etat de fonctionnement.",
  features: [
    {
      title: "Gestion des tickets SAV",
      description:
        "Recevez, priorisez et suivez les demandes jusqu’a la resolution.",
    },
    {
      title: "Planification des interventions",
      description:
        "Assignez les techniciens, planifiez les visites et suivez les deplacements.",
    },
    {
      title: "Maintenance preventive",
      description:
        "Programmez des entretiens et rappels pour reduire les pannes et arrets.",
    },
    {
      title: "Historique & documentation",
      description:
        "Conservez l’historique d’interventions et documentez les solutions.",
    },
  ],
},
  {
  slug: "gestion-comptable",
  image: GC,
  title: "Gestion comptable",
  shortDescription:
    "Centralisez votre comptabilite, suivez vos flux financiers et prenez de meilleures decisions en temps reel.",
  longDescription:
    "Automatisez vos operations comptables et obtenez une vue claire de votre performance financiere afin de securiser la conformite, accelerer les traitements et produire vos rapports rapidement.",
  features: [
    {
      title: "Comptabilite generale",
      description:
        "Saisissez et suivez les ecritures, journaux et grand livre en continu.",
    },
    {
      title: "Payables & recevables",
      description:
        "Gerez les factures fournisseurs, encaissements clients et suivis de paiements.",
    },
    {
      title: "Rapports financiers",
      description:
        "Produisez bilans, etats des resultats et suivis de tresorerie.",
    },
    {
      title: "Conformite & controles",
      description:
        "Assurez le respect des exigences fiscales et gardez un controle fiable des operations.",
    },
  ],
},
]

export function getModuleBySlug(slug: string): ERPModule | undefined {
  return modulesData.find((m) => m.slug === slug)
}
