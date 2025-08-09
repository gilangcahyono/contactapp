"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";
import XMarkIcon from "./icons/XMarkIcon";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();
  const [input, setInput] = useState<string>(search || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim()) {
        router.push(`/?search=${encodeURIComponent(input)}`);
      } else {
        router.replace("/");
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [router, input]);

  const clearSearch = () => {
    setInput("");
    router.replace("/");
  };

  return (
    <div className="bg-gray-200 rounded-2xl py-2 px-3 flex items-center gap-2 mb-4">
      <MagnifyingGlassIcon />
      <input
        type="text"
        placeholder="Search contacts"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={"w-full focus:outline-none placeholder:font-semibold"}
      />
      <button
        type="button"
        onClick={clearSearch}
        className={`${input && "opacity-100 cursor-pointer"} opacity-0`}
      >
        <XMarkIcon />
      </button>
    </div>
  );
};

export default SearchInput;
