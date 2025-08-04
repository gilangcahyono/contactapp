import DeleteButton from "@/components/DeleteButton";
import { getToken } from "@/lib/utils";
import { Contact } from "@/types/contact";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const token = await getToken();

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
  const contact: Contact = data;

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
        <li>
          <DeleteButton id={id} />
        </li>
      </ul>
      <br />
      <pre>{JSON.stringify(contact, null, 2)}</pre>
    </>
  );
};

export default Page;
