"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRSL] = useState(false);
  const router = useRouter();

  function submitHandler(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      router.push(`/search/web?searchTerm=${input}`);
    }
  }

  async function randomSearch() {
    setRSL(true);
    const res = await fetch(`https://random-word-api.vercel.app/api?words=1`)
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!res) {
      setRSL(false);
      return;
    }
    router.push(`/search/web?searchTerm=${res}`);
    setRSL(false);
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex items-center w-full max-w-[90%] border text-xl bg-gray-200 rounded-full mt-6 mx-auto px-5 py-3 pt-4 hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <IoIosSearch className="text-xl text-gray-500 mr-3" />
        <input
          className="bg-transparent flex-grow focus:outline-none "
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <FaMicrophone className="text-xl mx-2 hover:cursor-pointer" />
        <SiGooglelens className="text-xl mr-1 hover:cursor-pointer" />
      </form>

      <div className="flex items-center flex-col sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={submitHandler} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className=" h-6 text-center"
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
