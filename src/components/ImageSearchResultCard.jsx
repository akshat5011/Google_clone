import Link from "next/link";
import React from "react";

export default function ImageSearchResultCard({ result }) {
  return (
    <div className="mb-8">
      <div className="group">
        <Link href={result.image.contextLink}>
          <img
            src={result.link}
            alt={result.title}
            className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
          />
        </Link>
        <Link href={result.image.contextLink}>
          <h1 className="group-hover:underline truncate text-xl">
            {result.title}
          </h1>
        </Link>
        <Link href={result.image.contextLink}>
          <p className="group-hover:underline text-gray-600">
            {" "}
            {result.displayLink}
          </p>
        </Link>
      </div>
    </div>
  );
}
