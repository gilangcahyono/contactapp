import prisma from "@/lib/prismaClient";

export const getContacts = async (cursor) => {
  try {
    return await prisma.contact.findMany({
      take: cursor,
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    console.error(error);
  }
};
