export const dynamic = "force-dynamic";
import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";
import React from "react";

export default async function ImageSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const searchpara = await searchParams;
  const startIndex = searchpara.start || "1";
  const searchTerm = searchpara.searchTerm;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4"> No Results Found...</h1>
        <p className="text-lg">Go Back</p>
        <Link href={"/"} className="text-blue-500">
          HOME
        </Link>
      </div>
    );
  }
  return <>{results && <ImageSearchResult results={data} />}</>;
}
