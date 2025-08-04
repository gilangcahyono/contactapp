import { getToken } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const token = await getToken();
  const res = await fetch("http://127.0.0.1:8000/api/user", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await res.json();

  return (
    <>
      <h1 className="text-2xl font-bold text-center">My Profile</h1>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <Link href="/" className="hover:underline">
            Back
          </Link>
        </li>
      </ul>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Page;
