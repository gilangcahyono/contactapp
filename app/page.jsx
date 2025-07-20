import SearchInput from "@/components/SearchInput";
import { IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
import ContactList from "@/components/ContactList";
import { getContacts } from "@/services/getContacts";
import { searchContacts } from "@/services/searchContacts";

const Page = async ({ searchParams }) => {
  const query = searchParams?.search || "";
  let contacts = query ? await searchContacts(query) : await getContacts();

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
      <ContactList initialContacts={contacts} />
      <IconButton
        component={Link}
        href="/contacts/new"
        size="small"
        sx={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
        }}
      >
        <AddCircleIcon color="primary" sx={{ fontSize: "4rem" }} />
      </IconButton>
    </>
  );
};

export default Page;
