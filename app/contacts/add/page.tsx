/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BackDrop from "@/components/BackDrop";
import Header from "@/components/Header";
import SubmitIconButton from "@/components/SubmitIconButton";
import Toast from "@/components/Toast";
import Link from "next/link";
import axios from "@/lib/axios";
import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const addContactSchema = z.object({
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

type FormData = z.infer<typeof addContactSchema>;

const Page: React.FC = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(addContactSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const token = await getToken();
      await axios.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/", { scroll: false });
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
    <div className="px-4">
      <Header>
        <Header.Back>
          <Link href="/" scroll={false}>
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
          <SubmitIconButton form="add-contact-form" />
        </Header.Actions>
      </Header>

      {serverError && (
        <p className="text-pink-500 text-center mb-5">
          Can&apos;t add contact now. {serverError}
        </p>
      )}

      <form id="add-contact-form" onSubmit={handleSubmit(onSubmit)}>
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
      <Toast title="Contact saved" open={isSubmitSuccessful} />
    </div>
  );
};

export default Page;
