import React from "react";
import { PriceType } from "../Price/types";

export interface PriceProps {
  price: PriceType;
}

export const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex flex-col items-start pt-1">
      <div className="flex items-center space-x-2">
        <span className="text-black text-base lg:text-xl font-semibold">
          ${price.discountedPrice}
        </span>
        <span className="text-gray-500 text-base lg:text-xl line-through">
          ${price.originalPrice}
        </span>
        <span className="text-[#FF3333] bg-[#FF33331A] px-2 py-1 text-[10px] lg:text-xs rounded-full">
          -{price.discountPercentage}%
        </span>
      </div>
    </div>
  );
};
