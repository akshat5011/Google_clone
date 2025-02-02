import React from "react";
import WebSearchResultCard from "./WebSearchResultCard";

export default function WebSearchResult({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <WebSearchResultCard result={result} key={result.link} />
      ))}
    </div>
  );
}
