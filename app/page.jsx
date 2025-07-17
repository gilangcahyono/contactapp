import SearchInput from "@/components/SearchInput";
import prisma from "@/lib/prismaClient";
import { Avatar, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
import ContactList from "@/components/ContactList";

const Page = async ({ searchParams }) => {
  const query = searchParams?.search || "";

  const contacts = await prisma.contact.findMany({
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

  return (
    <>
      <Typography
        textAlign="center"
        fontWeight="bold"
        paddingTop="1rem"
        variant="h5"
        gutterBottom
      >
        Contacts
      </Typography>
      <SearchInput />
      <ContactList contacts={contacts} />
      <IconButton
        component={Link}
        href="/contacts/new"
        size="small"
        position="fixed"
        sx={{
          position: "fixed",
          bottom: "3rem",
          right: "1.5rem",
        }}
      >
        <AddCircleIcon color="primary" sx={{ fontSize: "4rem" }} />
      </IconButton>
    </>
  );
};

export default Page;
