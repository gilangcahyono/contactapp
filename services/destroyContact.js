import prisma from "@/lib/prismaClient";

export const destroyContact = async (id) => {
  try {
    return await prisma.contact.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
