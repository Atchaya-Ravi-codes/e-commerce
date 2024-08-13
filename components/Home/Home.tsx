import React from "react";
import { HomeBanner } from "./HomeBanner";
import { BrandBanner } from "./BrandBanner";
import { products, reviews } from "./__fixtures___";
import { ProductList } from "./ProductList";
import { Separator } from "../ui/separator";
import { ReviewCarousel } from "./ReviewCarousel";
import { shopByCategoryData } from "./__fixtures___/index";
import { ShopByCategory } from "./ShopByCategory";

export const Home = () => {
  const productDisplay = products.slice(0, 3);
  return (
    <>
      <HomeBanner />
      <BrandBanner />
      <ProductList category="new arrivals" products={productDisplay} />
      <Separator className="my-0 border-[#0000001A] lg:mx-[100px]" />
      <ProductList category="top selling" products={productDisplay} />
      <ShopByCategory categoryData={shopByCategoryData}/>
      <ReviewCarousel reviews={reviews} />
    </>
  );
};
