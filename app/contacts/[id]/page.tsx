import DropdownMenu from "@/components/DropdownMenu";
import Header from "@/components/Header";
import axios from "@/lib/axios";
import { getToken } from "@/lib/utils";
import { Contact } from "@/types/contact";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const token = await getToken();
  const res = await axios.get(`/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const contact: Contact = res.data.data;

  return (
    <div className="px-4">
      <Header>
        <Header.Back>
          <Link href="/">
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
        <Header.Actions>
          <DropdownMenu />
        </Header.Actions>
      </Header>

      <div className="mb-5">
        <div className="w-20 h-20 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full bg-gray-400 rounded-full p-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <h2 className="text-center text-2xl w-full mt-5">{contact.name}</h2>
      </div>

      <div className="bg-white rounded-xl px-3 py-3 mb-4">
        <p>{contact.phone}</p>
      </div>

      <div className="text-sm text-gray-500 ml-3 mb-2">More</div>

      <div className="bg-white rounded-xl px-3 py-3">
        <p>QR code</p>
      </div>
    </div>
  );
};

export default Page;
