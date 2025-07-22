"use server";

import { deleteFile } from "@/services/deleteFile";
import { destroyContact } from "@/services/destroyContact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteContact(contactId) {
  const deletedContact = await destroyContact(contactId);
  deletedContact.avatar && (await deleteFile(deletedContact.avatar));
  revalidatePath("/");
  return redirect("/");
}
