"use server";

import prisma from "../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
const utapi = new UTApi();

export async function createContact(formData) {
  const contactName = formData.get("contactName");
  const contactMobile = formData.get("contactMobile");
  const contactAvatar = formData.get("contactAvatar");
  let contactAvatarName = null;

  if (contactAvatar.size) {
    const res = await utapi.uploadFiles(contactAvatar);
    contactAvatarName = res.data.ufsUrl;
  }

  const contact = await prisma.contact.create({
    data: {
      name: contactName,
      mobile: contactMobile,
      avatar: contactAvatarName,
    },
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

export async function deleteContact(formData) {
  const contactId = formData.get("contactId");

  const contact = await prisma.contact.delete({
    where: {
      id: Number(contactId),
    },
  });

  if (contact.avatar) {
    const fileKey = contact.avatar.split("/").pop();
    await utapi.deleteFiles(fileKey);
  }

  revalidatePath("/");
  return redirect("/");
}
