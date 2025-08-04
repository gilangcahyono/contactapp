import Link from "next/link";
import { Contact } from "@/types/contact";
import { getToken } from "@/lib/utils";
import LogoutButton from "@/components/LogoutButton";

const Home = async () => {
  const token = await getToken();

  const res = await fetch("http://127.0.0.1:8000/api/contacts", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      cache: "no-cache",
    },
  });

  const contacts: Contact[] = await res.json();

  return (
    <>
      <h1 className="text-2xl font-bold text-center">My Contacts</h1>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <br />
      <Link href="/contacts/add" className="hover:underline">
        Add Contact
      </Link>
      <br /> <br />
      <ol className="list-inside list-decimal">
        {contacts.length > 0 ? (
          contacts.map((contact, idx) => (
            <li key={idx}>
              <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
            </li>
          ))
        ) : (
          <p className="text-center">No contacts found</p>
        )}
      </ol>
    </>
  );
};

export default Home;
