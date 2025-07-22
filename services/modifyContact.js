import prisma from "@/lib/prismaClient";

export const modifyContact = async (id, contact) => {
  try {
    return await prisma.contact.update({
      where: {
        id: Number(id),
      },
      data: contact,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
