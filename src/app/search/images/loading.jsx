import LoadingImageSearchResult from "@/components/LoadingImageSearchResult";
import React from "react";

export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
      <LoadingImageSearchResult />
      <div className="hidden sm:inline-flex sm:space-x-4">
        <LoadingImageSearchResult />
        <LoadingImageSearchResult />
      </div>
    </div>
  );
}
