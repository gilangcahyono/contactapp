"use client";

import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Contact } from "@/types/contact";
import { useState } from "react";
import BackDrop from "./BackDrop";
import axios from "@/lib/axios";
import * as z from "zod";

interface Errors {
  name?: string;
  phone?: string;
  server?: string;
}

const editContactSchema = z.object({
  name: z
    .string("Name must be a string")
    .nonempty("Name is required")
    .max(50, "Name is too long"),
  phone: z.coerce
    .number("Phone must be a number")
    .min(1, "Phone is required")
    .max(9999999999999, "Phone is too long"),
});

const EditForm = ({ contact }: { contact: Contact }) => {
  const router = useRouter();
  const [name, setName] = useState<string>(contact.name);
  const [phone, setPhone] = useState<string>(contact.phone);
  const [loading, setLoading] = useState<boolean>();
  const [errors, setErrors] = useState<Errors>();

  const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = await getToken();
    setErrors({
      name: "",
      phone: "",
      server: "",
    });

    const result = editContactSchema.safeParse({
      name,
      phone,
    });

    if (!result.success) {
      return setErrors({
        name: result.error.format().name?._errors[0],
        phone: result.error.format().phone?._errors[0],
      });
    }

    try {
      setLoading(true);
      await axios.put(
        `/contacts/${contact.id}`,
        {
          name,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push(`/contacts/${contact.id}`, { scroll: false });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      setName(event.target.value);
      setErrors({ ...errors, name: "" });
    }
    if (event.target.name === "phone") {
      setPhone(event.target.value);
      setErrors({ ...errors, phone: "" });
    }
  };
  return (
    <>
      <form id="edit-contact-form" onSubmit={handleEdit}>
        <div className="mb-5">
          <div className="w-20 h-20 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full bg-gray-400 rounded-full p-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={contact.name}
            onChange={handleChange}
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors?.name ? "border-2 border-pink-500" : ""
            }`}
          />
          <span className="text-pink-500 text-sm">{errors?.name}</span>
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="phone"
            defaultValue={contact.phone}
            placeholder="Phone"
            onChange={handleChange}
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors?.phone ? "border-2 border-pink-500" : ""
            }`}
          />
          <span className="text-pink-500 text-sm">{errors?.phone}</span>
        </div>
      </form>
      <BackDrop open={loading!} />
    </>
  );
};

export default EditForm;
