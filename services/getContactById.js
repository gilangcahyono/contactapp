import prisma from "@/lib/prismaClient";

export const getContactById = async (id) => {
  try {
    return await prisma.contact.findUnique({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
