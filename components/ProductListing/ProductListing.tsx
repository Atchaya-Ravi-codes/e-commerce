"use client";
import React, { useEffect, useState } from "react";
import { productsData } from "../Home/__fixtures___";
import { ProductCard } from "../ProductCard/ProductCard";
import { Separator } from "../ui/separator";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { useRouter } from "next/navigation";

export const ProductListing = () => {
  const pageSize = 12;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(productsData.currentPage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const currentpageNumber = params.get("page")
        ? Number(params.get("page"))
        : productsData.currentPage;
      setCurrentPage(currentpageNumber);
    }
  }, []);
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
    setCurrentPage(newPage);
  };
  return (
    <div className="lg:mx-24">
      <div className="text-3xl font-bold pb-4 capitalize">
        {productsData.category}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-around lg:justify-between gap-x-4">
        {productsData.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Separator className="border-[#0000001A] mt-8 mb-4 w-auto" />
      <PaginationComponent
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={productsData.totalCount || 0}
        totalPages={productsData.totalPages || 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
