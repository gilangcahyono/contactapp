import Link from "next/link";

const AddContactButton = () => {
  const positions = [
    "sm:hidden fixed bottom-6 right-6", // mobile
    "hidden sm:inline fixed bottom-6 left-1/2 translate-x-40", // desktop
  ];

  return positions.map((position: string, index: number) => (
    <Link
      key={index}
      href="/contacts/add"
      scroll={false}
      className={`${position} rounded-full p-2.5 bg-cyan-500 z-[10] hover:bg-cyan-600 active:bg-cyan-700`}
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
  ));
};

export default AddContactButton;
