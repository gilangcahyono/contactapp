"use server";

import fs from "fs/promises";
import prisma from "./prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createNameFileImage } from "./utils";

export async function createNewContact(formData) {
  const contactName = formData.get("contactName");
  const contactMobile = formData.get("contactMobile");
  const contactAvatar = formData.get("contactAvatar");
  const contactAvatarName = createNameFileImage(contactAvatar);

  if (contactAvatar.size) {
    const buffer = Buffer.from(await contactAvatar.arrayBuffer());
    await fs.writeFile(`./public/uploads/${contactAvatarName}`, buffer);
  }
  await prisma.contact.create({
    data: {
      name: contactName,
      mobile: contactMobile,
      avatar: contactAvatarName,
    },
  });
  revalidatePath("/");
  return redirect("/");
}

export async function deleteContact(formData) {
  const contactId = formData.get("contactId");

  const contact = await prisma.contact.delete({
    where: {
      id: Number(contactId),
    },
  });

  contact.avatar && (await fs.unlink(`./public/uploads/${contact.avatar}`));

  revalidatePath("/");
  return redirect("/");
}
