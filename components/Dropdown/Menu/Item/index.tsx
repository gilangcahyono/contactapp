"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href?: string;
}

const Item = (props: Props) => {
  const { children, href = "" } = props;
  const router = useRouter();

  const navigate = () => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu?.classList.toggle("hidden");
    if (!href) {
      const modal =
        document.getElementById("delete-contact-modal") ||
        document.getElementById("logout-modal");

      modal?.classList.toggle("hidden");
    }
    router.push(href, { scroll: false });
  };

  return (
    <li
      className={`${
        !href && "hover:bg-red-100 hover:text-red-500"
      } px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer`}
      onClick={navigate}
    >
      {children}
    </li>
  );
};

export default Item;
