"use client";

import axios from "@/lib/axios";
import { getToken, removeToken } from "@/lib/utils";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const modal = document.getElementById("logout-modal");
    modal?.classList.toggle("hidden");
    const token = await getToken();
    await axios.delete("/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await removeToken();
    router.push("/login");
  };

  const handleCancel = () => {
    const modal = document.getElementById("logout-modal");
    modal?.classList.toggle("hidden");
    const dropdownBackdrop = document.getElementById("dropdown-backdrop");
    dropdownBackdrop?.classList.toggle("hidden");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700 font-semibold"
      >
        Logout
      </button>
      <button
        onClick={handleCancel}
        className="w-full bg-gray-200 py-3 rounded-xl hover:bg-gray-300 active:bg-gray-400 font-semibold"
      >
        Cancel
      </button>
    </>
  );
};

export default LogoutButton;
