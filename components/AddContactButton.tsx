import Link from "next/link";
import React from "react";

const AddContactButton = () => {
  const positions = [
    "sm:hidden fixed bottom-5 right-5", // mobile
    "hidden sm:inline fixed bottom-5 left-1/2 translate-x-40", // desktop
  ];

  return (
    <>
      {positions.map((position: string, index: number) => (
        <Link
          key={index}
          href="/contacts/add"
          scroll={false}
          className={`${position} rounded-full p-2.5 bg-cyan-500 z-[10]`}
        >
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
      ))}
    </>
  );

  // return (
  //   <>
  //     <button className="rounded-full p-2.5 fixed bottom-5 right-5 bg-cyan-500 sm:hidden">
  //       <Link href="/contacts/add" scroll={false}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth={1.5}
  //           stroke="currentColor"
  //           className="size-6 text-white"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M12 4.5v15m7.5-7.5h-15"
  //           />
  //         </svg>
  //       </Link>
  //     </button>

  //     <button className="hidden sm:inline rounded-full p-2.5 fixed bottom-5 bg-cyan-500 left-1/2 translate-x-40">
  //       <Link href="/contacts/add" scroll={false}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth={1.5}
  //           stroke="currentColor"
  //           className="size-6 text-white"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M12 4.5v15m7.5-7.5h-15"
  //           />
  //         </svg>
  //       </Link>
  //     </button>
  //   </>
  // );
};

export default AddContactButton;
