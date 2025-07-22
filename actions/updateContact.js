"use server";

import { deleteFile } from "@/services/deleteFile";
import { getContactById } from "@/services/getContactById";
import { modifyContact } from "@/services/modifyContact";
import { uploadFile } from "@/services/uploadFile";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
