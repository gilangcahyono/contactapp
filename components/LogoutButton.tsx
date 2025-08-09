"use client";

import axios from "@/lib/axios";
import { getToken, removeToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();
  const handleLogout = async () => {
    const token = await getToken();
    try {
      setLoading(true);
      await axios.delete("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await removeToken();
      router.push("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        disabled={loading}
        className="inline-flex items-center gap-2 disabled:cursor-not-allowed cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        <span>{loading ? "Loading..." : "Logout"}</span>
      </button>
    </>
  );
};

export default LogoutButton;
