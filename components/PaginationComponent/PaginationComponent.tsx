import React from "react";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
export interface PaginationComponentProps {
  /**
   * The selected page
   */
  currentPage: number;
  /**
   * Number of items per page
   */
  pageSize: number;
  /**
   * The total number of items
   */
  totalItems: number;
  /**
   * The total number of pages
   */
  totalPages: number;
  onPageChange: (page: number) => void;
}
export function PaginationComponent({
  currentPage,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
}: PaginationComponentProps) {
  const [active, setActive] = React.useState(currentPage);
  const handlePageChange = (page: number) => {
    setActive(page);
    onPageChange(page);
  };

  const next = () => {
    if (active === totalPages) return;
    handlePageChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    handlePageChange(active - 1);
  };
  const getPaginationItems = () => {
    const paginationItems: React.JSX.Element[] = [];
    const pageRange = 2;

    if (totalPages <= 1) return paginationItems;

    paginationItems.push(
      <PaginationItem key={1}>
        <PaginationLink
          className={cn(
            "border-0 p-2 text-sm",
            currentPage === 1 && "bg-[#0000000F]"
          )}
          href="#"
          onClick={() => handlePageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (active > pageRange + 2) {
      paginationItems.push(
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (
      let i = Math.max(2, active - pageRange);
      i <= Math.min(totalPages - 1, active + pageRange);
      i++
    ) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={cn(
              "border-0 p-2 text-sm",
              currentPage === i && "bg-[#0000000F]"
            )}
            href="#"
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (active < totalPages - pageRange - 1) {
      paginationItems.push(
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    paginationItems.push(
      <PaginationItem>
      <PaginationLink
            className={cn(
              "border-0 p-2 text-sm",
              currentPage === totalPages && "bg-[#0000000F]"
            )}
            href="#"
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
    );

    return paginationItems;
  };

  return (
    <Pagination>
      <PaginationContent className="justify-between w-full items-center">
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className={cn(
                "border-[#0000001A] border p-2",
                currentPage === 1 && "bg-gray-200 text-gray-400 disabled:opacity-75 pointer-events-none cursor-not-allowed"
              )}
              href="#"
              onClick={prev}
            />
          </PaginationItem>
        )}
        <div className="flex items-center gap-2">{getPaginationItems()}</div>
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationNext
              className={cn(
                "border-[#0000001A] border p-2", currentPage === totalPages && "bg-gray-200 text-gray-400 disabled:opacity-75 pointer-events-none cursor-not-allowed"
              )}
              href="#"
              onClick={next}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
