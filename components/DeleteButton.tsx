"use client";

import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  const handleDetele = async () => {
    const token = await getToken();
    try {
      setLoading(true);
      fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        cache: "no-cache",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      type="button"
      disabled={loading}
      onClick={handleDetele}
      className="cursor-pointer disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : "Delete"}
    </button>
  );
};

export default DeleteButton;
