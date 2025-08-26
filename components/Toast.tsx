"use client";

import { useToastStore } from "@/stores/toastStore";
import Image from "next/image";

const Toast: React.FC = () => {
  const open = useToastStore((state) => state.open);
  const message = useToastStore((state) => state.message);

  return (
    <div
      className={`${
        !open ? "hidden" : ""
      } fixed bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-xl shadow-md z-20 flex items-center justify-center gap-2`}
    >
      <Image src="/favicon.ico" alt="Logo" width={20} height={20} />
      <div className="text-sm whitespace-nowrap">{message}</div>
    </div>
  );
};

export default Toast;
