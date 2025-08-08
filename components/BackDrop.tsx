import React from "react";

const BackDrop: React.FC<{ open: boolean }> = (props) => {
  const { open = false } = props;
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed inset-0 h-full bg-black opacity-40 flex items-center justify-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-16 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
};

export default BackDrop;
