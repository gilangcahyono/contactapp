import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import Link from "next/link";
import DeleteContactButton from "@/components/DeleteContactButton";
import prisma from "@/lib/prismaClient";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const contact = await prisma.contact.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!contact) {
    return notFound();
  }

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={3}>
          <Link
            href={`/contacts/${params.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton color="inherit">
              <CloseIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid size={6} textAlign="center">
          <Typography paddingTop="1rem" variant="h6" gutterBottom>
            Edit Contacts
          </Typography>
        </Grid>
        <Grid size={3} textAlign="right">
          <IconButton color="inherit" href="/">
            <CheckIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Avatar
          alt={contact.name}
          src={`/uploads/${contact.avatar || ""}`}
          sx={{ width: 70, height: 70, margin: "20px auto" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        color="lightgray"
        defaultValue={contact.name}
        focused
        type="text"
        sx={{ backgroundColor: "white", marginBottom: "25px" }}
      />
      <TextField
        id="outlined-basic"
        label="Mobile"
        variant="outlined"
        fullWidth
        color="lightgray"
        defaultValue={contact.mobile}
        focused
        type="tel"
        sx={{ backgroundColor: "white", marginBottom: "25px" }}
      />
      <DeleteContactButton />
    </>
  );
};

export default Page;
