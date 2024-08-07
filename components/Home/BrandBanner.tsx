"use client";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";
import Image from "next/image";
import React from "react";

export const BrandBanner = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  return (
    <div className="bg-black py-10 flex justify-around lg:px-24 flex-wrap gap-x-8 gap-y-8">
      {isMobile ? (
        <>
          <Image
            alt="versace-logo"
            src="/images/versace-mobile.svg"
            width={117}
            height={24}
          />
          <Image
            alt="zara-logo"
            src="/images/zara-mobile.svg"
            width={64}
            height={27}
          />
          <Image
            alt="zara-logo"
            src="/images/gucci-mobile.svg"
            width={110}
            height={25}
          />
          <Image
            alt="prada-logo"
            src="/images/prada-mobile.svg"
            width={127}
            height={21}
          />
          <Image
            alt="ck-logo"
            src="/images/ck-mobile.svg"
            width={135}
            height={22}
          />
        </>
      ) : (
        <>
          <Image
            alt="versace-logo"
            src="/images/versace-desktop.svg"
            width={167}
            height={34}
          />
          <Image
            alt="zara-logo"
            src="/images/zara-desktop.svg"
            width={91}
            height={38}
          />
          <Image
            alt="zara-logo"
            src="/images/gucci-desktop.svg"
            width={156}
            height={36}
          />
          <Image
            alt="prada-logo"
            src="/images/prada-desktop.svg"
            width={194}
            height={32}
          />
          <Image
            alt="ck-logo"
            src="/images/ck-desktop.svg"
            width={207}
            height={33}
          />
        </>
      )}
    </div>
  );
};
