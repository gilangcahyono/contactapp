import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { Typography } from "@mui/material";

const ContactList = ({ initialContacts: contacts }) => {
  if (!contacts.length) {
    return (
      <Typography
        textAlign="center"
        paddingTop="1rem"
        variant="h6"
        gutterBottom
        color="text.secondary"
      >
        No contacts found
      </Typography>
    );
  }

  return (
    <List>
      {contacts.map((contact) => (
        <Link
          key={contact.id}
          href={`/contacts/${contact.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem disablePadding gutterbottom="true">
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={contact.name} src={contact.avatar || ""} />
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
  );
};

export default ContactList;
