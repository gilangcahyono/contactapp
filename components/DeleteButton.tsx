"use client";

import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = { id: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const DeleteButton = (props: Props) => {
  const { id: contactId, ...rest } = props;
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  const handleDetele = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return;
    const token = await getToken();
    try {
      setLoading(true);
      fetch(`http://127.0.0.1:8000/api/contacts/${contactId}`, {
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
    <>
      <button type="button" {...rest} disabled={loading} onClick={handleDetele}>
        {loading ? "Loading..." : "Delete"}
      </button>
    </>
  );
};

export default DeleteButton;
