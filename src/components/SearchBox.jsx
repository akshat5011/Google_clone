"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function submitHandler(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <div>
        <Link href={"/"}>
          <Image
            src="/icon.svg"
            width={45}
            height={45}
            className="object-cover block md:hidden"
            alt="Google logo"
          />
        </Link>
      </div>
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer mr-3"
      />
      <FaMicrophone className="sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <SiGooglelens className="sm:inline-flex text-2xl text-blue-500 cursor-pointer mr-3" />
      <IoIosSearch
        className="sm:inline-flex text-4xl text-blue-500 cursor-pointer"
        onClick={submitHandler}
      />
    </form>
  );
}
