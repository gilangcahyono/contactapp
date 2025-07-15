"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { cloneElement, useState } from "react";

const DeleteContactButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
    </>
  );
};

export default DeleteContactButton;
