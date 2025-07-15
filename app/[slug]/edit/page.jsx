"use client";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  TextField,
  Typography,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

const Page = ({ params }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            href={`/${params.slug}`}
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
          alt="Gilang Cahyono"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 70, height: 70, margin: "20px auto" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        color="lightgray"
        defaultValue="Gilang Cahyono"
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
        defaultValue="081234567890"
        focused
        type="tel"
        sx={{ backgroundColor: "white", marginBottom: "25px" }}
      />
      <div>
        <Button
          variant="text"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ backgroundColor: "white" }}
          onClick={handleClickOpen}
        >
          Delete this contact
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete this contact?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Delete "Gilang Cahyono" from your contacts?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button onClick={handleClose}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Page;
