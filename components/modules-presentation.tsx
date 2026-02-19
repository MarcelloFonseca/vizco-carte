import GC from "@/public/GC.png";
import SAV from "@/public/SAV.png";
import PPA from "@/public/PPA.png";
import VRC from "@/public/VRC.png";
import Image, { type StaticImageData } from "next/image";

const modules: { image: StaticImageData; title: string; description: string }[] = [
  {
    image: VRC,
    title: "Ventes et relations clients",
    description: "Configurez vos produits, creez un catalogue interactif et developpez vos ventes.",
  },
  {
    image: GC,
    title: "Gestion et execution de projets",
    description: "Optimisez la planification, la gestion des ressources et l'execution de vos projets.",
  },
  {
    image: PPA,
    title: "Production, planification et approvisionnements",
    description: "Renforcez l'automatisation de la production, ameliorez la gestion des approvisionnements, et accelerez la fabrication.",
  },
  {
    image: SAV,
    title: "Service technique et apres-vente",
    description: "Assurez la gestion du SAV, la maintenance technique et l'intervention rapide.",
  },
  {
    image: GC,
    title: "Gestion comptable",
    description: "Simplifiez votre comptabilite, renforcez votre gestion financiere et assurez un controle en temps reel.",
  },
];

function HexagonIcon({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <Image
        src={image}
        alt={alt}
        width={60}
        height={60}
        className="relative z-10 object-contain"
        priority={false}
      />
    </div>
  );
}

export function ModulesPresentation() {
  return (
    <div className="flex flex-col gap-3 px-5 py-4">
      {modules.map((mod) => (
        <div
          key={mod.title}
          className="flex items-start gap-4 rounded-xl border border-border bg-popover p-4 transition-colors hover:bg-muted"
        >
          <HexagonIcon image={mod.image} alt={mod.title} />
          <div className="flex flex-1 flex-col gap-1 pt-1">
            <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
              {mod.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {mod.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}