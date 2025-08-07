import Link from "next/link";
import { Contact } from "@/types/contact";
import { getToken } from "@/lib/utils";
import LogoutButton from "@/components/LogoutButton";

const Home = async () => {
  const token = await getToken();
  const response = await fetch("http://127.0.0.1:8000/api/contacts", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message);
  const contacts: Contact[] = result;

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <br />
      <Link href="/contacts/add">Add Contact</Link>
      <br /> <br />
      <ol>
        {contacts.length === 0 ? (
          <p className="text-center">No contacts found</p>
        ) : (
          contacts.map((contact, idx) => (
            <li key={idx}>
              <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
            </li>
          ))
        )}
      </ol>
    </>
  );
};

export default Home;
