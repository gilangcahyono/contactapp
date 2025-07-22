"use server";

import { storeContact } from "@/services/storeContact";
import { uploadFile } from "@/services/uploadFile";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
