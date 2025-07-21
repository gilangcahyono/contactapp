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
import SubmitButton from "@/components/SubmitButton";
import { updateContact } from "@/server/actions";
import ImageUploadBox from "@/components/ImageUploadBox";

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
      <form action={updateContact}>
        <input type="hidden" name="contactId" value={contact.id} readOnly />
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
            <IconButton color="inherit" as="span">
              <SubmitButton>
                <CheckIcon />
              </SubmitButton>
            </IconButton>
          </Grid>
        </Grid>

        <ImageUploadBox avatar={contact.avatar} />

        <TextField
          label="Name"
          name="contactName"
          variant="outlined"
          fullWidth
          color="lightgray"
          defaultValue={contact.name}
          focused
          type="text"
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />

        <TextField
          label="Mobile"
          name="contactMobile"
          variant="outlined"
          fullWidth
          color="lightgray"
          defaultValue={contact.mobile}
          focused
          type="tel"
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
      </form>

      <DeleteContactButton contact={contact}>
        <Button
          type="button"
          variant="text"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ backgroundColor: "white" }}
        >
          Delete this contact
        </Button>
      </DeleteContactButton>
    </>
  );
};

export default Page;
