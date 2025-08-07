"use client";

import axios from "@/lib/axios";
import { setToken } from "@/lib/utils";
import { Errors } from "@/types/login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const Page: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [errors, setErrors] = useState<Errors>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const email = body.get("email")?.toString() || "";
    const password = body.get("password")?.toString() || "";

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      return setErrors({
        email: result.error.format().email?._errors[0],
        password: result.error.format().password?._errors[0],
      });
    }

    try {
      setLoading(true);
      setErrors({
        email: "",
        password: "",
      });
      const res = await axios.post("/login", {
        email,
        password,
      });
      const token = res.data.data.token;
      await setToken(token);
      router.push("/");
    } catch (error: any) {
      console.error(error);
      if (error.response && (error.status === 400 || error.status === 401)) {
        setErrors({
          email:
            error.response.data.errors.email &&
            error.response.data.errors.email[0],
          password:
            error.response.data.errors.password &&
            error.response.data.errors.password[0],
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
    <>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      {errors?.server && (
        <p className="text-red-500 text-center">
          {" "}
          Login failed {errors.server}
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            readOnly={loading}
            onChange={() => setErrors({ ...errors, email: "" })}
            className="w-full border"
          />
          {errors?.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            readOnly={loading}
            onChange={() => setErrors({ ...errors, password: "" })}
            className="w-full border"
          />
          {errors?.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full border mt-10 cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <p className="text-center mt-10">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </>
  );
};

export default Page;
