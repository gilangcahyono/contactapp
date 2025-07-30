"use client";

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
    const phone = body.get("phone");

    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        body: JSON.stringify({ name, phone }),
        cache: "no-cache",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/");
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Add Contact</h1>
      <br />
      {error && <p className="text-red-500">{error}</p>}
      <br />
      <form onSubmit={handleSubmit}>
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
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
