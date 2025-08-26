/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/utils";
import { useState } from "react";
import { Contact } from "@/types/contact";
import { useForm } from "react-hook-form";
import BackDrop from "./BackDrop";
import * as z from "zod";
import { toast } from "@/lib/toast";

const editContactSchema = z.object({
  name: z
    .string("Name must be a string")
    .nonempty("Name is required")
    .max(50, "Name is too long"),
  phone: z
    .string("Phone must be a number")
    .nonempty("Phone is required")
    .max(15, "Phone is too long")
    .regex(/^[0-9]+$/, "Phone must be a number"),
});

type FormData = z.infer<typeof editContactSchema>;

const EditForm = ({ contact }: { contact: Contact }) => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(editContactSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const token = await getToken();
      await axios.put(`/contacts/${contact.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push(`/contacts/${contact.id}`, { scroll: false });
      toast("Contact saved");
    } catch (error: any) {
      // console.error(error);
      if (error.response && (error.status >= 400 || error.status < 500)) {
        const errors = error.response.data.errors;
        if (errors && typeof errors === "object") {
          Object.entries(errors).forEach(([field, messages]) => {
            if (Array.isArray(messages) && typeof messages[0] === "string") {
              setError(field as keyof FormData, {
                type: "server",
                message: messages[0],
              });
            }
          });
        }
      } else {
        setServerError("Internal Server Error");
      }
    }
  };

  return (
    <>
      {serverError && (
        <p className="text-pink-500 text-center mb-5">
          Can&apos;t edit contact now. {serverError}
        </p>
      )}

      <form id="edit-contact-form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name")}
            defaultValue={contact.name}
            placeholder="Name"
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors.name && "border-2 focus:outline-pink-500 border-pink-500"
            }`}
          />
          {errors.name && (
            <span className="text-pink-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="tel"
            {...register("phone")}
            defaultValue={contact.phone}
            placeholder="Phone"
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors.phone && "border-2 focus:outline-pink-500 border-pink-500"
            }`}
          />
          {errors.phone && (
            <span className="text-pink-500 text-sm">
              {errors.phone.message}
            </span>
          )}
        </div>
      </form>

      <BackDrop open={isSubmitting} />
    </>
  );
};

export default EditForm;
