"use client";
import Image from "next/image";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "../../types/breakpoint";
import React from "react";

export const HomeBanner = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small);
  return (
    <div className="bg-zinc-100 md:bg-[url('/images/home-banner.svg')] md:bg-cover md:bg-center md:h-[663px] flex flex-col md:flex-row">
      <div className="sm:w-full md:w-1/2 md:pl-[100px] px-4">
        <div className="text-4xl md:text-[64px] font-bold leading-8 md:leading-[64px] pt-10 md:pt-[100px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className="pt-5 md:pt-8 text-[#00000099] text-sm md:text-base leading-5 md:leading-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <button className="bg-black rounded-full py-3 w-full md:w-[210px] text-white mt-6 md:mt-8">
          Shop Now
        </button>
      </div>
      {isMobile ? (
        <Image alt="home-banner-mobile" className="w-full h-full" src="/images/home-banner-mobile.svg" height={448} width={390}/>
      ) : null}
    </div>
  );
};
