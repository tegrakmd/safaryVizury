"use client";

import { cn } from "@/lib/utils";
import { categoryItems } from "@app/lib/category";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function FilterNav() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <section className="sticky top-10 z-10 pt-4 border-b bg-background/80  backdrop-blur-xl font-inter">
      <div className="w-full md:border-x no-scrollbar overflow-hidden relative  mx-auto max-w-[1500px]  px-3 md:px-6 ">
        <div className="w-full flex justify-between py-8 gap-x-10 md:overflow-x-auto overflow-x-scroll no-scrollbar scroll-smooth bg-background">
          {categoryItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={pathname + "?" + createQueryString("filter", item.name)}
                className={cn(
                  "flex font-(--font-geist)  flex-col gap-4 items-center w-fill transition-all",
                  search === item.name
                    ? "border-b-2 border-black dark:border-gray-300 pb-2"
                    : "opacity-70 flex-shrink-0 hover:border-b-2 hover:border-gray-300 pb-2",
                  "flex flex-col gap-4 items-center w-fill"
                )}>
                <div className="relative  flex  gap-2 items-center">
                  <Icon className="size-5" />
                  <p className="text-xs text-nowrap font-medium text-black dark:text-white">
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
