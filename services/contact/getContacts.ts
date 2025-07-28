import { Contact } from "@/types/contact";

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const res = await fetch(" http://localhost:3000/api/contacts");
    const data = await res.json();
    const contacts: Contact[] = data.data;
    return contacts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
