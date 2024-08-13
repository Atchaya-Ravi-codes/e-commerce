"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export const HeaderBanner = () => {
  const [close, setClose] = useState<boolean>(true);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    close && (
      <div className="bg-black py-[10px] px-8">
        <div className="container mx-auto relative">
          <div className="text-center text-sm text-white">
            <span>Sign up and get 20% off to your first order. </span>
            {/* ToDo: Update href and signup action*/}
            <Link className="font-medium underline underline-offset-2" href="#">
              Sign Up Now
            </Link>
          </div>
          <Button className="absolute right-0 top-[50%] translate-y-[-50%] hidden md:inline p-0 hover:bg-transparent" onClick={handleClose} variant="ghost">
            <Image
              alt="close-icon"
              height={20}
              src="/images/close.svg"
              width={20}
            />
          </Button>
        </div>
      </div>
    )
  );
};
