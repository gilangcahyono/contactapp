import Header from "@/components/Header";
import InvisibleButton from "@/components/icons/InvisibleButton";
import axios from "@/lib/axios";
import { getToken } from "@/lib/utils";
import { User } from "@/types/user";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const token = await getToken();
  const res = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user: User = res.data.data;
  return (
    <div className="px-4">
      <Header>
        <Header.Back>
          <Link href="/" scroll={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </Header.Back>
        <Header.Title>My Profile</Header.Title>
        <Header.Actions>
          <InvisibleButton />
        </Header.Actions>
      </Header>

      <div className="flex justify-center items-center bg-gray-100 p-4 mt-10">
        {/* <!-- Profile Card Container --> */}
        <div className="max-w-sm w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 relative">
          {/* <!-- Profile Image --> */}
          <div className="flex justify-center -mt-16 mb-4">
            <div className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md hover:scale-105 transform transition-transform duration-300">
              <div className="w-full h-full rounded-full flex items-center justify-center text-3xl font-bold text-white bg-cyan-500">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>
          {/* <!-- Name and Title --> */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
          {/* <!-- Description --> */}
          <p className="text-center text-gray-600 mb-6 px-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            ducimus deleniti eius est maiores expedita cum consequuntur harum
            repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
