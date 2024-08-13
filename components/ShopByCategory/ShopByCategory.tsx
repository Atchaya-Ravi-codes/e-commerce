"use client";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { cn } from "@/lib/utils";
import { Breakpoint } from "@/types/breakpoint";
import Image from "next/image";

export interface CategoryData {
  id: string | number;
  name: string;
  url: string;
  alt: string;
}

export interface ShopByCategoryProps {
  categoryData: CategoryData[];
}

export const ShopByCategory = ({ categoryData }: ShopByCategoryProps) => {
    const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  return (
      <div className="bg-[#f0f0f0] rounded-3xl p-11 mx-4 lg:mx-24">
        <h3 className="uppercase text-[32px] lg:text-5xl font-bold text-center">
          browse by dress style
        </h3>
        <div className="flex gap-4 mt-11">
          <div className="grid grid-cols-3 w-full gap-6">
            {categoryData.map((item, index) => (
              <div
                className={cn(
                  "relative bg-white p-9 rounded-2xl overflow-hidden min-h-72",
                  (index === 1 || index === 2) && "col-span-2",
                  isMobile && "col-span-full"
                )}
                key={item.id}
              >
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src={item.url}
                    height={289}
                    width={684}
                    alt={item.alt}
                    className="h-full w-full object-fill"
                  />
                </div>
                <h4 className="relative text-3xl font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};