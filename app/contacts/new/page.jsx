import {
  Avatar,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { createNewContact } from "@/server/actions";
import SubmitButton from "@/components/SubmitButton";
import CheckIcon from "@mui/icons-material/Check";
import ImageUploadBox from "@/components/ImageUploadBox";

const Page = () => {
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
            <IconButton color="inherit" component="span">
              <SubmitButton>
                <CheckIcon />
              </SubmitButton>
            </IconButton>
          </Grid>
        </Grid>
        <ImageUploadBox name="contactAvatar" />
        <TextField
          name="contactName"
          label="Name"
          variant="outlined"
          fullWidth
          color="lightgray"
          type="text"
          required
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
        <TextField
          name="contactMobile"
          label="Mobile"
          variant="outlined"
          fullWidth
          color="lightgray"
          type="tel"
          required
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
      </form>
    </>
  );
};

export default Page;
