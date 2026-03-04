"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "@app/lib/category";
import { useState } from "react";

export function SelectCategory() {
  const [SelectCategory, setSelectCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-8 py-10 mb-35 ">
      {categoryItems.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.id} className="cursor-pointer">
            <div
              className={SelectCategory === item.name ? "border-primary" : ""}
              onClick={() => setSelectCategory(item.name)}>
              <div className="opacity-70 hover:opacity-100 flex">
                <CardHeader>
                  <Icon className="size-5 md:size-8" />
                  <h3 className="text-sm text-nowrap font-medium  text-black dark:text-white">
                    {item.title}
                  </h3>
                </CardHeader>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
