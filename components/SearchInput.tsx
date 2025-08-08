"use client";

import { useState } from "react";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";
import XMarkIcon from "./icons/XMarkIcon";

const SearchInput = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="bg-gray-200 rounded-2xl py-2 px-3 flex items-center gap-2 mb-4">
      <MagnifyingGlassIcon />
      <input
        type="text"
        placeholder="Search contacts"
        value={input}
        onChange={handleChange}
        className={`${
          input && "peer"
        } w-full focus:outline-none placeholder:font-semibold`}
      />

      <button
        type="button"
        onClick={() => setInput("")}
        className="opacity-0 peer-focus:opacity-100 cursor-pointer"
      >
        <XMarkIcon />
      </button>
    </div>
  );
};

export default SearchInput;
