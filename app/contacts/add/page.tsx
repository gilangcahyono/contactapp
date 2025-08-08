/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BackDrop from "@/components/BackDrop";
import Header from "@/components/Header";
import CheckIcon from "@/components/icons/CheckIcon";
import Toast from "@/components/Toast";
import axios from "@/lib/axios";
import { getToken } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

interface Errors {
  name?: string;
  phone?: string;
  server?: string;
}

const addContactSchema = z.object({
  name: z
    .string("Name must be a string")
    .nonempty("Name is required")
    .max(50, "Name is too long"),
  phone: z.coerce
    .number("Phone must be a number")
    .min(1, "Phone is required")
    .max(9999999999999, "Phone is too long"),
});

const Page: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    name: "",
    phone: "",
    server: "",
  });

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const name = body.get("name")?.toString() || "";
    const phone = body.get("phone")?.toString() || "";
    const token = await getToken();
    setErrors({
      name: "",
      phone: "",
      server: "",
    });

    const result = addContactSchema.safeParse({ name, phone });
    if (!result.success) {
      return setErrors({
        name: result.error.format().name?._errors[0],
        phone: result.error.format().phone?._errors[0],
      });
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "/contacts",
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
      console.log(res); // hati hati jangan lupa dihapus
      router.push("/");
    } catch (error: any) {
      console.error(error); // hati hati jangan lupa dihapus
      if (error.response && (error.status === 400 || error.status === 401)) {
        setErrors({
          name:
            error.response.data.errors.name &&
            error.response.data.errors.name[0],
          phone:
            error.response.data.errors.phone &&
            error.response.data.errors.phone[0],
        });
      } else {
        setErrors({
          server: error.response.data.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <Header>
        <Header.Back>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </Header.Back>
        <Header.Title>Add Contact</Header.Title>
        <Header.Actions>
          <button
            type="submit"
            form="add-contact-form"
            className="cursor-pointer"
            onClick={() => handleAdd}
          >
            <CheckIcon />
          </button>
        </Header.Actions>
      </Header>

      <form id="add-contact-form" onSubmit={handleAdd}>
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
            onChange={() => setErrors({ ...errors, name: "" })}
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
            placeholder="Phone"
            onChange={() => setErrors({ ...errors, phone: "" })}
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors?.phone ? "border-2 border-pink-500" : ""
            }`}
          />
          <span className="text-pink-500 text-sm">{errors?.phone}</span>
        </div>
      </form>
      <BackDrop open={loading} />
      <Toast title="Contact saved" open={false} />
    </div>
  );
};

export default Page;
