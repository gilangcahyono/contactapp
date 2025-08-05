"use client";

import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { getToken } from "@/lib/utils";
import { Contact } from "@/types/contact";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();
  const [contact, setContact] = useState<Contact>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getContact(id);
  }, [id]);

  const getContact = async (id: string) => {
    const token = await getToken();
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        cache: "no-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setContact(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const name = body.get("name");
    const phone = body.get("phone");
    const token = await getToken();

    try {
      setLoading(true);
      setError("");
      const res = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        cache: "no-cache",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, phone }),
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

  return (
    <>
      <h1>Edit Contact</h1>
      <br />
      <ul>
        <li>
          <Link href={`/contacts/${id}`}>Cancel</Link>
        </li>
        <li>
          <DeleteButton id={id} />
        </li>
      </ul>
      {error && <p>{error}</p>}
      <br />
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
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
            type="text"
            name="phone"
            defaultValue={contact?.phone}
            id="phone"
            placeholder="08123456789"
          />
        </div>
        <div>
          <br />
          <button type="submit" disabled={loading}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
