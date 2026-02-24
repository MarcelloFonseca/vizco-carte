import Link from "next/link";
import { modulesData } from "@/lib/modules-data";
import Image, { type StaticImageData } from "next/image";

export function HexagonIcon({ image, alt }: { image: string | StaticImageData; alt: string; }) {
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
      {modulesData.map((mod) => (
        <Link key={mod.slug} href={`/presentation-modules/${mod.slug}`}>
          <div
            key={mod.title}
            className="flex items-start gap-4 rounded-xl border border-border bg-popover p-4 transition-colors"
          >
        <HexagonIcon image={mod.image} alt={mod.title} />
          <div className="flex flex-1 flex-col gap-1 pt-1">
            <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
              {mod.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {mod.shortDescription}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}