"use server";

import prisma from "./prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewContact(formData) {
  const rawFormData = {
    name: formData.get("name"),
    mobile: formData.get("mobile"),
  };

  const contact = await prisma.contact.create({
    data: {
      name: rawFormData.name,
      mobile: rawFormData.mobile,
    },
  });

  console.log(contact);

  revalidatePath("/");
  return redirect("/");
}
