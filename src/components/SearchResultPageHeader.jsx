import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchResultPageHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width={92}
            height={30}
            alt="Google logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium ml-3 hover:brightness-110 hover:shadow-md  transition-shadow ">
          Sign In
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
