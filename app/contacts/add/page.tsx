"use client";

import { getToken } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const name = body.get("name");
    const phone = body.get("phone");
    const token = await getToken();

    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://127.0.0.1:8000/api/contacts", {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/");
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Add Contact</h1>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <Link href="/" className="hover:underline">
            Back
          </Link>
        </li>
      </ul>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <br />
      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="border w-full"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="border w-full"
            type="text"
            name="phone"
            id="phone"
            placeholder="08123456789"
          />
        </div>
        <div>
          <br />
          <button
            type="submit"
            disabled={loading}
            className="border w-full disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
