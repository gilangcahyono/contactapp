import prisma from "@/lib/prismaClient";

export const storeContact = async (contact) => {
  try {
    return await prisma.contact.create({ data: contact });
  } catch (error) {
    console.error(error);
    return null;
  }
};
