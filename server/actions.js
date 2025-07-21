"use server";

import { storeContact } from "@/services/storeContact";
import prisma from "../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadFile } from "@/services/uploadFile";
import { destroyContact } from "@/services/destroyContact";

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
  const contactId = formData.get("contactId");
  const contactName = formData.get("contactName");
  const contactMobile = formData.get("contactMobile");
  const contactAvatar = formData.get("contactAvatar");
  let contactAvatarName = null;

  if (contactAvatar.size) {
    const res = await utapi.uploadFiles(contactAvatar);
    contactAvatarName = res.data.ufsUrl;
  }

  const prevContact = await prisma.contact.findUnique({
    where: {
      id: Number(contactId),
    },
    select: {
      avatar: true,
    },
  });

  if (prevContact.avatar) {
    const fileKey = prevContact.avatar.split("/").pop();
    const res = await utapi.deleteFiles(fileKey);
  }

  const contact = await prisma.contact.update({
    where: {
      id: Number(contactId),
    },
    data: {
      name: contactName,
      mobile: contactMobile,
      avatar: contactAvatar.size ? contactAvatarName : prevContact.avatar,
    },
  });

  revalidatePath(`/contacts/${contact.id}`);
  return redirect(`/contacts/${contact.id}`);
}

export async function deleteContact(contactId, formData) {
  const deletedContact = await destroyContact(contactId);

  if (deletedContact.avatar) {
    const fileKey = deletedContact.avatar.split("/").pop();
    await utapi.deleteFiles(fileKey);
  }

  revalidatePath("/");
  return redirect("/");
}
