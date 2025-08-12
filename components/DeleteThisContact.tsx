"use client";

import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "@/lib/axios";
import BackDrop from "./BackDrop";

interface Props {
  id: number;
}

const DeleteThisContact: React.FC<Props> = (props) => {
  const { id: contactId } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleDetele = async () => {
    const token = await getToken();
    try {
      setLoading(true);
      await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/", { scroll: false });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={handleDetele}
        className="bg-white rounded-2xl px-3 py-3 flex items-center justify-between"
      >
        <p className="text-red-500 font-semibold">Delete this contact</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <BackDrop open={loading} />
    </>
  );
};

export default DeleteThisContact;
