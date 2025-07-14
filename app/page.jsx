import Box from "@mui/material/Box";
import { Avatar, TextField, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";

import React from "react";

const Page = () => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
        variant="h5"
        gutterBottom
      >
        Contacts
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <TextField
          id="outlined-search"
          label="Search contact"
          type="search"
          fullWidth
          size="small"
          color="lightgray"
        />
      </Box>
      <List>
        <Link
          href="/gilang-cahyono"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem disablePadding gutterbottom="true">
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="Gilang Cahyono"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText
                sx={{ fontWeight: "bold" }}
                primary="Gilang Cahyono"
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          href="/puri-rahma-riswanti"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem disablePadding gutterbottom="true">
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="Puri Rahma Riswanti"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText
                sx={{ fontWeight: "bold" }}
                primary="Puri Rahma Riswanti"
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default Page;
