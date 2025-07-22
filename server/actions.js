"use server";

import { storeContact } from "@/services/storeContact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadFile } from "@/services/uploadFile";
import { destroyContact } from "@/services/destroyContact";
import { getContactById } from "@/services/getContactById";
import { modifyContact } from "@/services/modifyContact";
import { deleteFile } from "@/services/deleteFile";

export async function createContact(formData) {
  const contact = {
    name: formData.get("contactName"),
    mobile: formData.get("contactMobile"),
    avatar: formData.get("contactAvatar"),
  };

  const fileAvatarName = await uploadFile(contact.avatar);

  await storeContact({
    name: contact.name,
    mobile: contact.mobile,
    avatar: fileAvatarName,
  });

  revalidatePath("/");
  return redirect("/");
}

export async function updateContact(formData) {
  const contact = {
    id: formData.get("contactId"),
    name: formData.get("contactName"),
    mobile: formData.get("contactMobile"),
    avatar: formData.get("contactAvatar"),
  };

  const fileAvatarName = await uploadFile(contact.avatar);
  const prevContact = await getContactById(contact.id);
  prevContact.avatar && (await deleteFile(prevContact.avatar));

  const updatedContact = await modifyContact(contact.id, {
    name: contact.name,
    mobile: contact.mobile,
    avatar: contact.avatar.size ? fileAvatarName : prevContact.avatar,
  });

  revalidatePath(`/contacts/${updatedContact.id}`);
  return redirect(`/contacts/${updatedContact.id}`);
}

export async function deleteContact(contactId) {
  const deletedContact = await destroyContact(contactId);
  deletedContact.avatar && (await deleteFile(deletedContact.avatar));
  revalidatePath("/");
  return redirect("/");
}
