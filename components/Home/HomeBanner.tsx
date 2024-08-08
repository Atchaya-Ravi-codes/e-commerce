"use client";
import Image from "next/image";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "../../types/breakpoint";
import React from "react";
import { Button } from "../ui/button";

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
    <div className="bg-zinc-100 lg:bg-[url('/images/home-banner.svg')] lg:bg-cover lg:bg-center flex flex-col md:flex-row relative">
      <div className="sm:w-full md:w-1/2 md:pl-[100px] px-4">
        <div className="text-4xl md:text-[64px] font-bold leading-8 md:leading-[64px] pt-10 md:pt-[100px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className="pt-5 md:pt-8 text-[#00000099] text-sm md:text-base leading-5 md:leading-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <Button className="rounded-full w-full md:w-[210px] mt-6 md:mt-8">
          Shop Now
        </Button>
        <div className="flex justify-around gap-x-4 gap-y-[14px] pt-5 lg:pt-12 flex-wrap md:pb-28 px-14 lg:px-0">
          {bannerCount.map((list) => {
            return (
              <div key={list.count}>
                <div className="font-semibold text-2xl md:text-[40px] leading-10">
                  {list.count}+
                </div>
                <div className="text-xs md:text-base text-[#00000099]">
                  {list.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {!isMobile && (
        <>
          <Image
            alt="home-banner-mobile"
            src="/images/star.svg"
            height={56}
            width={56}
          />
        </>
      )}
      {isMobile ? (
        <Image
          alt="home-banner-mobile"
          className="w-full h-full"
          src="/images/home-banner-mobile.svg"
          height={448}
          width={390}
        />
      ) : null}
    </div>
  );
};
