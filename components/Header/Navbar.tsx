"use client";
import { Breakpoint } from "../../types/breakpoint";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import Image from "next/image";
import React, { useState } from "react";
import { classNames } from "@/utilities/classNames";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

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
          <Button variant="ghost">
            <Image
              alt="mobile-menu-icon"
              src="/images/menu.svg"
              width={24}
              height={24}
            />
          </Button>
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <span className="pr-1">Shop</span>
                <Image
                  alt="select-arrow"
                  src="/images/arrow-down.svg"
                  width={16}
                  height={16}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {shopMenuOptions.map((option) => {
                  return (
                    <DropdownMenuItem key={option.value}>
                      {option.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

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
              <Input
                className="bg-[#F0F0F0] rounded-full placeholder:text-[#00000066] placeholder:text-base block w-full py-3 pl-11 pr-3"
                type="text"
                placeholder="Search for products..."
              />
            </label>
          </div>
        </>
      )}
      <div className="flex gap-x-4">
        {isMobile ? (
          <Button className="p-0" variant="ghost">
            <Image
              alt="serach-icon"
              className=""
              src="/images/search.svg"
              width={24}
              height={24}
            />
          </Button>
        ) : null}
        <Button className="p-0" variant="ghost">
          <Image
            alt="cart-icon"
            className=""
            src="/images/cart.svg"
            width={24}
            height={24}
          />
        </Button>
        <Button className="p-0" variant="ghost">
          <Image
            alt="user-icon"
            className=""
            src="/images/user.svg"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </div>
  );
};
