"use client";

import { getToken, removeToken } from "@/lib/utils";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const token = await getToken();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      await removeToken();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Logout
    </button>
  );
};

export default LogoutButton;
