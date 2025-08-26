"use client";

import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "@/lib/toast";
import axios from "@/lib/axios";

interface Props {
  id: number;
}

const DeleteButton: React.FC<Props> = (props) => {
  const { id: contactId } = props;
  const router = useRouter();

  const handleDelete = async () => {
    const modal = document.getElementById("delete-contact-modal");
    modal?.classList.toggle("hidden");
    const token = await getToken();
    await axios.delete(`/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    router.push("/", { scroll: false });
    toast("Deleted contact successfully");
  };

  const handleCancel = () => {
    const modal = document.getElementById("delete-contact-modal");
    modal?.classList.toggle("hidden");
    const dropdownBackdrop = document.getElementById("dropdown-backdrop");
    dropdownBackdrop?.classList.toggle("hidden");
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700 font-semibold"
      >
        Delete
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

export default DeleteButton;
