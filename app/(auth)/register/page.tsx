"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const name = body.get("name");
    const email = body.get("email");
    const password = body.get("password");
    const confirmPassword = body.get("confirmPassword");

    try {
      setError("");
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/login");
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Register</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="w-full border" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full border"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full border mt-10 cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <p className="text-center mt-10">
        Already have an account?
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </>
  );
};

export default Page;
