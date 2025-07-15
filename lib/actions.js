"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prismaClient";
import { slugify } from "./utils";

export async function createNewContact(formData) {
  const name = formData.get("name");
  const mobile = formData.get("mobile");

  await prisma.contact.create({
    data: {
      name,
      mobile,
      slug: slugify(name),
    },
  });

  revalidatePath("/");
  return redirect("/");
}
