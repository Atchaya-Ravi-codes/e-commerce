"use client";
import { Breakpoint } from "../../types/breakpoint";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import Image from "next/image";
import React, { useState } from "react";
import { classNames } from "@/utilities/classNames";
import Link from "next/link";
import { Option, Select } from "../Select/Select";

export const Navbar = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  const shopMenuOptions = [
    {
      label: "Jean",
      value: "jean",
    },
    {
      label: "Shirt",
      value: "shirt",
    },
    {
      label: "Shorts",
      value: "shorts",
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState<Option | null>(null);
  return (
    <div
      className={classNames(
        "container py-6 mx-auto flex justify-between items-center gap-10",
        isMobile && "px-4"
      )}
    >
      <div
        className={classNames(
          "flex items-center gap-x-4 flex-2",
          isMobile && "gap-x-0"
        )}
      >
        {isMobile ? (
          <button>
            <Image
              alt="mobile-menu-icon"
              src="/images/menu.svg"
              width={24}
              height={24}
            />
          </button>
        ) : null}
        <Link href="/">
          <Image
            alt="logo"
            className={classNames("h-[22px]", isMobile && "h-[18px]")}
            src="/images/logo.svg"
            width={isMobile ? 128 : 160}
            height={isMobile ? 18 : 22}
          />
        </Link>
      </div>
      {!isMobile && (
        <>
          <div className="flex-1 space-x-6 flex items-center">
            <Select
              placeholder="Shop"
              options={shopMenuOptions}
              selected={selectedMenu}
              onChange={() => null}
            />
            <Link href="#">On Sale</Link>
            <Link href="#">New Arrivals</Link>
            <Link href="#">Brands</Link>
          </div>
          <div className="flex-1">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Image
                  alt="serach-icon"
                  className="h-5 w-5 fill-slate-300"
                  src="/images/search-gray.svg"
                  width={24}
                  height={24}
                />
              </span>
              <input
                className="bg-[#F0F0F0] rounded-full placeholder:text-[#00000066] placeholder:text-base block w-full py-3 pl-11 pr-3"
                placeholder="Search for products..."
                type="text"
                name="search"
              />
            </label>
          </div>
        </>
      )}
      <div className="flex gap-x-4">
        {isMobile ? (
          <button>
            <Image
              alt="serach-icon"
              className=""
              src="/images/search.svg"
              width={24}
              height={24}
            />
          </button>
        ) : null}
        <button>
          <Image
            alt="cart-icon"
            className=""
            src="/images/cart.svg"
            width={24}
            height={24}
          />
        </button>
        <button>
          <Image
            alt="user-icon"
            className=""
            src="/images/user.svg"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};
