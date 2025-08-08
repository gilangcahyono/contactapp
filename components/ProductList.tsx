import { Contact } from "@/types/contact";
import Link from "next/link";
import React from "react";

const ProductList: React.FC<{ contacts: Contact[] }> = (props) => {
  const { contacts } = props;
  return contacts.map((contact: Contact, idx: number) => (
    <Link
      href={`/contacts/${contact.id}`}
      key={idx}
      className="mb-2 flex gap-2 items-center py-2 px-4 hover:bg-gray-200"
    >
      <figure className="w-9 h-9">
        {/* <img
          src={contact.image}
          alt="Avatar"
          width={50}
          height={50}
          className=""
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full bg-gray-400 rounded-full p-2 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </figure>
      <h2>{contact.name}</h2>
    </Link>
  ));
};

export default ProductList;
