import React from "react";
import ImageSearchResultCard from "./ImageSearchResultCard";
import Pagination from "./Pagination";

export default function ImageSearchResult({ results }) {
  return (
    <div className="sm:pb-24 pb-40 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <ImageSearchResultCard key={result.link} result={result} />
        ))}
      </div>
      <div className="ml-16">
        <Pagination />
      </div>
    </div>
  );
}
