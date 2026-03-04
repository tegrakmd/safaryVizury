import { SafaryProperty } from "@app/lib/Safarydata";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HearButton } from "./HeartButton";

interface SafaryCardProps {
  item: SafaryProperty;
}
// Cree une page Route/pour le path name lorsque je clique sur un hotel sa doit ouvrire l'hotel avec toute les information qui vas avec...
// les photo de l'hotel en question et aussi le calendrier la description total et aussi un bouton de reservation >>
// toujour avec le design de shadcn ui

export function ListingCard({ item }: SafaryCardProps) {
  return (
    <Link href={`/${item.id}`} className="block xl:max-w-[250px]">
      <div className="relative w-full  cursor-pointer  ">
        {/* Image */}
        <div className="relative h-80 sm:h-50 md:h-60 xl:h-50  w-full overflow-hidden rounded-2xl">
          <Image
            src={item.imageUrl}
            alt={item.imageAlt}
            fill
            className="object-cover hover:scale-105 transition-all duration-600 "
            priority
          />
          <HearButton />
        </div>

        {/* Infos */}
        <div className="mt-3 flex flex-col gap-1">
          {/* Titre + note */}
          <div className="flex items-center justify-between">
            <p className="text-[16px]  font-semibold">{item.location}</p>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              <span>{item.rating}</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-sm line-clamp-2 text-muted-foreground">
            {item.description}
          </p>

          {/* Prix */}
          <p className="text-[15px]">
            <span className="font-semibold">${item.price}</span> / nuit
          </p>
        </div>
      </div>
    </Link>
  );
}
