"use client";

import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { createNewContact } from "@/lib/actions";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

const Page = () => {
  //   const { pending } = useFormStatus();

  //   const [open, setOpen] = useState(false);

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <>
      <form action={createNewContact}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid size={3}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton color="inherit">
                <CloseIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography paddingTop="1rem" variant="h6" gutterBottom>
              New Contacts
            </Typography>
          </Grid>
          <Grid size={3} textAlign="right">
            <IconButton color="inherit" type="submit">
              <CheckIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Avatar sx={{ width: 70, height: 70, margin: "20px auto" }} />
        </Box>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          color="lightgray"
          type="text"
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
        <TextField
          name="mobile"
          label="Mobile"
          variant="outlined"
          fullWidth
          color="lightgray"
          type="tel"
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
      </form>
      {/* <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={pending}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </>
  );
};

export default Page;
