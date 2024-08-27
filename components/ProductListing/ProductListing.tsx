"use client";
import React, { useEffect, useState } from "react";
import { productsData } from "../Home/__fixtures___";
import { ProductCard } from "../ProductCard/ProductCard";
import { Separator } from "../ui/separator";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

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
    <div className="container px-10">
      <Separator className="border-[#0000001A] mb-6 w-auto" />
      <Breadcrumb className="text-base text-[#00000099] pb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/category">Casual</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <div className="flex justify-between pb-4">
          <div className="text-3xl font-bold capitalize">
            {productsData.category}
          </div>
          <div className="flex items-center gap-x-4">
            <div className="text-[#00000099]">
              Showing 1-{pageSize} of {productsData.totalCount} Products
            </div>
            <div className="flex items-center">
              <label>Sort by:</label>
              <Select defaultValue="most-popular">
                <SelectTrigger className="w-[180px] border-0 text-base">
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="most-popular">Most popular</SelectItem>
                    <SelectItem value="price-low">Price: low to high</SelectItem>
                    <SelectItem value="price-high">Price: high to low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:justify-between gap-x-5 gap-y-8">
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
    </div>
  );
};
