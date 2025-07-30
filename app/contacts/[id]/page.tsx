import { Contact } from "@/types/contact";
import { Params } from "@/types/request";
import Link from "next/link";

const Page = async ({ params }: Params) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/contacts/${id}`);
  const data = await res.json();
  const contact: Contact = data.data;

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Contact Details</h1>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <Link href="/" className="hover:underline">
            Back
          </Link>
        </li>
        <li>
          <Link href={`/contacts/${id}/edit`} className="hover:underline">
            Edit
          </Link>
        </li>
      </ul>
      <br />
      <pre>{JSON.stringify(contact, null, 2)}</pre>
    </>
  );
};

export default Page;
