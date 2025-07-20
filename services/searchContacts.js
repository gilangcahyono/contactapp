import prisma from "@/lib/prismaClient";

export const searchContacts = async (query) => {
  try {
    return await prisma.contact.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    console.error(error);
  }
};
