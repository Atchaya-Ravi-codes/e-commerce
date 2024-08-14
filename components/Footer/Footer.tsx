import React from "react";
import { FooterBanner } from "./FooterBanner";
import { Separator } from "../ui/separator";
import { Copyright } from "./Copyright";
import { FooterCategory } from "./FooterCategory";
import { FooterLogo } from "./FooterLogo";

export const Footer = () => {
  return (
    <>
      <FooterBanner />
      <div className="bg-[#F0F0F0] -mt-28 pt-28 pb-16 -z-10 relative px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row pt-[50px] gap-x-10">
          <div className="w-full lg:w-1/4">
            <FooterLogo />
          </div>
          <div className="w-full lg:w-3/4">
            <FooterCategory />
          </div>
        </div>
        <Separator className="border-[#0000001A] my-4 w-auto" />
        <Copyright />
      </div>
    </>
  );
};
