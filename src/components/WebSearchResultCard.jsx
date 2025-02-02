import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import React from "react";

export default function WebSearchResultCard({ result }) {
  return (
    <div className="mb-8 max-w-xl">
      <div className="group flex flex-col">
        <Link className="text-sm truncate" href={result.link}>
          {result.formattedUrl}
        </Link>
        <Link
          className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
          href={result.link}
        >
          {result.title}
        </Link>
      </div>
      <p className="text-gray-600">{HTMLReactParser(result.htmlSnippet)}</p>
    </div>
  );
}
