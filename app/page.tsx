import { FilterNav } from "@app/components/FilterNav";
import { FooterPage } from "@app/components/footer";
import { HunderNav } from "@app/components/HunderNav";
import { ListingCards } from "@app/components/ListingCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <Suspense
        fallback={<div className="h-20 bg-background/80 backdrop-blur-xl" />}>
        <FilterNav />
      </Suspense>
      <HunderNav />
      <Suspense fallback={<div className="h-96 bg-background" />}>
        <ListingCards />
      </Suspense>
      <FooterPage />
    </div>
  );
}
