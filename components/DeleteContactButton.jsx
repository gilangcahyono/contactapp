"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { deleteContact } from "@/actions/deleteContact";

const DeleteContactButton = ({ children, contact }) => {
  const [open, setOpen] = useState(false);
  const deleteContactWithId = deleteContact.bind(null, contact.id);

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this contact?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete "{contact.name}" from your contacts?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={() => setOpen(false)} color="error">
            Cancel
          </Button>
          <form action={deleteContactWithId}>
            <SubmitButton>
              <Button as="span">Delete</Button>
            </SubmitButton>
          </form>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteContactButton;
