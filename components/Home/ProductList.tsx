import React from "react";
import { productType } from "../ProductCard/types";
import { ProductCard } from "../ProductCard/ProductCard";
import { Button } from "../ui/button";
export type ProductListProps = {
  products: productType[];
  category: string;
};
export const ProductList = ({ products, category }: ProductListProps) => {
  return (
    <div className="text-center">
      <div className="uppercase text-[32px] lg:text-5xl font-bold pt-10 lg:pt-8 pb-8 lg:pb-[55px] text-center">
        {category}
      </div>
      <div className="flex justify-around lg:justify-between lg:mx-24 gap-x-4 px-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="mt-6 mb-10 lg:mt-9 lg:mb-16 mx-4">
        <Button
          className="rounded-full px-20 w-full md:w-auto"
          variant="outline"
        >
          View All
        </Button>
      </div>
    </div>
  );
};
