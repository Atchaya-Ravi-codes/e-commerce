"use client";
import Image from "next/image";
import React from "react";
import { productType } from "./types";
import { Price } from "../Price/Price";
import { Rating } from "../Rating/Rating";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  product: productType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  return (
    <div>
      <Image
        alt="product-main-image"
        src={product.images[0].url}
        width={isMobile ? 198 : 295}
        height={isMobile ? 200 : 298}
      />
      <div className={cn("text-base lg:text-xl font-medium pt-4 text-left", isMobile && "text-base")}>{product.title}</div>
      <Rating rating={product.rating} />
      <Price price={product.price} />
    </div>
  );
};
