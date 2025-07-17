"use server";

import prisma from "./prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewContact(formData) {
  const contactName = formData.get("contactName");
  const contactMobile = formData.get("contactMobile");

  await prisma.contact.create({
    data: {
      name: contactName,
      mobile: contactMobile,
    },
  });

  revalidatePath("/");
  return redirect("/");
}

export async function deleteContact(formData) {
  const contactId = formData.get("contactId");

  await prisma.contact.delete({
    where: {
      id: Number(contactId),
    },
  });

  revalidatePath("/");
  return redirect("/");
}
