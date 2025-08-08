import Link from "next/link";
import React from "react";

const AddContactButton = () => {
  return (
    <button className="rounded-full p-2.5 fixed bottom-5 right-5 bg-cyan-500">
      <Link href="/contacts/add">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
    </button>
  );
};

export default AddContactButton;
