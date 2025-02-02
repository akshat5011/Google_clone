"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  function selectTab(tab) {
    router.push(
      `/search/${tab === "All" ? "web" : "images"}?searchTerm=${searchParam.get(
        "searchTerm"
      )}`
    );
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start text-gray-500 lg:pl-52">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center text-sm border-b-4 border-transparent active:text-black cursor-pointer pb-3 px-2 ${
          pathname == "/search/web" && "!border-gray-700 !text-gray-700"
        } `}
      >
        All
      </div>
      <div
        onClick={() => selectTab("Image")}
        className={`flex items-center text-sm border-b-4 border-transparent active:text-black cursor-pointer pb-3 px-2 ${
          pathname == "/search/images" && "!border-gray-700 !text-gray-700"
        } `}
      >
        Images
      </div>
    </div>
  );
}
