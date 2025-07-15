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
import { createNewContact } from "@/lib/actions";
import SaveButton from "@/components/SaveButton";

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
            <SaveButton />
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
          required
          sx={{ backgroundColor: "white", marginBottom: "25px" }}
        />
        <TextField
          name="mobile"
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
