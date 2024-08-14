import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const FooterBanner = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row px-6 lg:px-16 py-7 lg:py-11 rounded-3xl mx-4 lg:mx-24 mt-12 lg:mt-[80px]">
      <div className="uppercase text-white text-[32px] lg:text-[40px] w-full lg:w-1/2 font-bold">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end gap-y-3 pt-8 lg:pt-0">
        <div className="w-full lg:w-auto">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Image
                alt="email-icon"
                className="h-5 w-5 fill-slate-300"
                src="/images/email.svg"
                width={20}
                height={15}
              />
            </span>
            <Input
              className="bg-[#F0F0F0] rounded-full placeholder:text-[#00000066] placeholder:text-base block w-full py-3 pl-11 pr-3 lg:w-[350px]"
              type="text"
              placeholder="Enter your email address"
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <Button className="bg-[#F0F0F0] rounded-full py-3 pl-11 pr-3 w-full lg:w-[350px]" variant="outline">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};
