/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import BackDrop from "@/components/BackDrop";
import axios from "@/lib/axios";
import Link from "next/link";
import Header from "@/components/Header";
import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string("Email must be a string")
    .nonempty("Email is required")
    .email("Invalid email")
    .max(50, "Email is too long"),
  password: z
    .string("Password must be a string")
    .nonempty("Password is required")
    .min(3, "Password must be at least 3 characters"),
});

type FormData = z.infer<typeof loginSchema>;

const Page: React.FC = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setServerError(null);
      const res = await axios.post("/login", data);
      const token = res.data.data.token;
      await setToken(token);
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
        setServerError(error.message || "Internal Server Error");
      }
    }
  };

  return (
    <div className="px-4">
      <Header>
        <Header.Title>Login to your account</Header.Title>
      </Header>

      {serverError && (
        <p className="text-pink-500 text-center mb-5">
          Login failed {serverError}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700">
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <p className="text-center mt-3">
        Don&apos;t have an account ?{" "}
        <Link href="/register" className="text-cyan-500">
          Register
        </Link>
      </p>

      <BackDrop open={isSubmitting} />
    </div>
  );
};

export default Page;
