import SearchInput from "@/components/SearchInput";
import prisma from "@/lib/prismaClient";
import { Avatar, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Page = async ({ searchParams }) => {
  const query = searchParams?.search || "";
  const contacts = await prisma.contact.findMany({
    select: {
      slug: true,
      name: true,
      avatar: true,
    },
    where: {
      name: {
        contains: query,
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          paddingTop: "1rem",
        }}
        variant="h5"
        gutterBottom
      >
        Contacts
      </Typography>
      <SearchInput />
      <List>
        {contacts.map((contact) => (
          <Link
            key={contact.slug}
            href={`/${contact.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding gutterbottom="true">
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt={contact.name} src={`/${contact.image}`} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "bold" }}
                  primary={contact.name}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <IconButton
        size="small"
        sx={{
          position: "fixed",
          bottom: "4rem",
          right: "2rem",
        }}
      >
        <Link href="/new">
          <AddCircleIcon color="primary" sx={{ fontSize: "4rem" }} />
        </Link>
      </IconButton>
    </>
  );
};

export default Page;
