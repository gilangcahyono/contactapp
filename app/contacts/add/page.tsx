"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const name = body.get("name");
    const phone = body.get("phone");

    try {
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        body: JSON.stringify({ name, phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Add Contact</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input className="border" type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input className="border" type="text" name="phone" id="phone" />
        </div>
        <div>
          <button className="border" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
