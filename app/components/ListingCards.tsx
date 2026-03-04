"use client";

import { SafaryData } from "@app/lib/Safarydata";
import { useSearchParams } from "next/navigation";
import { ListingCard } from "./ui/ListingCard";

export function ListingCards() {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter");
  // Filtrer les propriétés selon la catégorie sélectionnée
  const filteredProperties =
    selectedFilter && selectedFilter !== "All"
      ? SafaryData.filter((CategoryProperty) =>
          CategoryProperty.categories.includes(selectedFilter)
        )
      : SafaryData;

  return (
    <div className="w-full relative font-body  ">
      <div className=" w-full md:border-x no-scrollbar relative mx-auto max-w-[1500px]  px-3 md:px-6 ">
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8  gap-x-4 gap-y-6 py-6   bg-background">
          {filteredProperties.map((CategoryProperty) => (
            <ListingCard key={CategoryProperty.id} item={CategoryProperty} />
          ))}
        </div>
      </div>
    </div>
  );
}
