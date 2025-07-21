import prisma from "@/lib/prismaClient";

export const searchContacts = async (search) => {
  try {
    return await prisma.contact.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
