import prisma from "@/lib/prismaClient";

export const getContacts = async () => {
  try {
    return await prisma.contact.findMany({
      take: 10,
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    console.error(error);
  }
};
