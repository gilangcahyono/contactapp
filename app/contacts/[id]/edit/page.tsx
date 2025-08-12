import Link from "next/link";
import { getToken } from "@/lib/utils";
import Header from "@/components/Header";
import axios from "@/lib/axios";
import EditForm from "@/components/EditForm";
import { Contact } from "@/types/contact";
import SubmitIconButton from "@/components/SubmitIconButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit contact",
};

type Props = {
  params: Promise<{ id: string }>;
};

const Page: React.FC<Props> = async ({ params }) => {
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
          <Link href={`/contacts/${id}`} scroll={false}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </Header.Back>
        <Header.Title>Edit Contact</Header.Title>
        <Header.Actions>
          <SubmitIconButton form="edit-contact-form" />
        </Header.Actions>
      </Header>

      <EditForm contact={contact} />

      <p className="text-sm text-gray-500 ml-3 mb-2">More</p>

      <div className="bg-white rounded-2xl px-3 py-3 flex items-center justify-between">
        <p className="text-red-500 font-semibold">Delete this contact</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page;
