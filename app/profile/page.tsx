import { getToken } from "@/lib/utils";
import { User } from "@/types/user";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const token = await getToken();
  const response = await fetch("http://127.0.0.1:8000/api/user", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const user: User = result.data;
  return (
    <>
      <h1>My Profile</h1>
      <br />
      <ul>
        <li>
          <Link href="/">Back</Link>
        </li>
      </ul>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Page;
