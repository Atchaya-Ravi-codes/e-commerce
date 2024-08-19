import React from "react";
import { products } from "../Home/__fixtures___";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductListing = () => {
  return (
    <div className="text-center">
      <div className="flex justify-around lg:justify-between lg:mx-24 gap-x-4 px-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
