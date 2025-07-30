import Link from "next/link";
import { Contact } from "@/types/contact";
import { notFound } from "next/navigation";

const Home = async () => {
  const res = await fetch(" http://localhost:3000/api/contacts", {
    cache: "no-cache",
  });

  const data = await res.json();
  if (!data.success) return notFound();
  const contacts: Contact[] = data.data;

  return (
    <>
      <h1 className="text-2xl font-bold text-center">My Contacts</h1>
      <br />
      <Link href="/contacts/add" className="hover:underline">
        Add Contact
      </Link>
      <br /> <br />
      <ul className="list-disc list-inside">
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
