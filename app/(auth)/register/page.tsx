/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import BackDrop from "@/components/BackDrop";
import axios from "@/lib/axios";
import Toast from "@/components/Toast";

const registerSchema = z
  .object({
    name: z
      .string("Name must be a string")
      .nonempty("Name is required")
      .max(50, "Name is too long"),
    email: z
      .string("Email must be a string")
      .nonempty("Email is required")
      .email("Invalid email")
      .max(50, "Email is too long"),
    password: z
      .string("Password must be a string")
      .nonempty("Password is required")
      .min(3, "Password must be at least 3 characters"),
    confirmPassword: z
      .string("Confirm Password must be a string")
      .nonempty("Confirm Password is required")
      .min(3, "Confirm Password must be at least 3 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof registerSchema>;

const Page = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/register", data);
      setTimeout(() => router.push("/login"), 1500);
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
        <Header.Title>Register your account</Header.Title>
      </Header>

      {serverError && (
        <p className="text-pink-500 text-center mb-5">
          Login failed {serverError}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="email"
            {...register("email")}
            placeholder="Email"
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors.email && "border-2 focus:outline-pink-500 border-pink-500"
            }`}
          />
          {errors.email && (
            <span className="text-pink-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors.password &&
              "border-2 focus:outline-pink-500 border-pink-500"
            }`}
          />
          {errors.password && (
            <span className="text-pink-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className={`bg-white w-full rounded-xl p-3 focus:outline-cyan-500 ${
              errors.confirmPassword &&
              "border-2 focus:outline-pink-500 border-pink-500"
            }`}
          />
          {errors.confirmPassword && (
            <span className="text-pink-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <button className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700">
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>

      <p className="text-center mt-3">
        Already have an account ?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>

      <BackDrop open={isSubmitting} />
      <Toast title="Successfully registered" open={isSubmitSuccessful} />
    </div>
  );
};

export default Page;
