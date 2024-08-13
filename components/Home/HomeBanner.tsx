"use client";
import Image from "next/image";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "../../types/breakpoint";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const HomeBanner = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  const bannerCount = [
    {
      label: "International Brands",
      count: "200",
    },
    {
      label: "High-Quality Products",
      count: "2000",
    },
    {
      label: "Happy Customers",
      count: "30,000",
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-row relative",
        isMobile
          ? "bg-zinc-100 flex-col"
          : " bg-[url('/images/banner-image.jpg')] bg-cover bg-center"
      )}
    >
      <div className={cn(isMobile ? "w-full px-4" : "w-1/2 pl-[100px]")}>
        <div
          className={cn(
            "font-bold",
            isMobile
              ? "text-4xl leading-8  pt-10"
              : "text-[64px] leading-[64px] pt-[100px]"
          )}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div
          className={cn(
            "text-[#00000099]",
            isMobile ? "text-sm leading-5 pt-5" : "text-base leading-6 pt-8"
          )}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <Button
          className={cn(
            "rounded-full",
            isMobile ? "w-full mt-6 " : "w-[210px] mt-8"
          )}
        >
          Shop Now
        </Button>
        <div
          className={cn(
            "flex justify-around gap-x-4 gap-y-[14px] flex-wrap",
            isMobile ? "pt-5 px-14" : "pb-28 px-0 pt-12"
          )}
        >
          {bannerCount.map((list) => {
            return (
              <div key={list.count}>
                <div
                  className={cn(
                    "font-semibold leading-10",
                    isMobile ? "text-2xl" : "text-[40px]"
                  )}
                >
                  {list.count}+
                </div>
                <div
                  className={cn(
                    "text-[#00000099]",
                    isMobile ? "text-xs" : "text-base"
                  )}
                >
                  {list.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isMobile ? (
        <Image
          alt="home-banner-mobile"
          className="w-full"
          src="/images/home-banner-mobile.svg"
          height={448}
          width={390}
        />
      ) : null}
    </div>
  );
};
