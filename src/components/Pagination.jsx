"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React from "react";
import Link from "next/link";

export default function Pagination() {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm");
  const startIndex = +searchParam.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <div className="flex flex-col cursor-pointer items-center hover:underline">
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex - 10
            }`}
            className="h-5"
          >
            <BsChevronLeft />
            <p>Previous</p>
          </Link>
        </div>
      )}
      {startIndex <= 90 && (
        <div className="flex flex-col cursor-pointer items-center hover:underline">
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex + 10
            }`}
            className="h-5"
          >
            <BsChevronRight />
            <p>Next</p>
          </Link>
        </div>
      )}
    </div>
  );
}
