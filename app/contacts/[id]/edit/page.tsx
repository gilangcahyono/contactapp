"use client";

import { Contact } from "@/types/contact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();
  const [contact, setContact] = useState<Contact>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch(`http://localhost:3000/api/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data.data));
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = new FormData(event.currentTarget);
    const name = body.get("name");
    const phone = body.get("phone");

    try {
      setLoading(true);
      setError("");
      const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, phone }),
        cache: "no-cache",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push(`/contacts/${id}`);
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDetele = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: "DELETE",
        cache: "no-cache",
      });
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
      <h1 className="text-2xl font-bold text-center">Edit Contact</h1>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <Link href={`/contacts/${id}`} className="hover:underline">
            Cancel
          </Link>
        </li>
        <li>
          <button type="button" disabled={loading} onClick={handleDetele}>
            Delete
          </button>
        </li>
      </ul>
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
            defaultValue={contact?.name}
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
            defaultValue={contact?.phone}
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
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
