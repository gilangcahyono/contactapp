"use client";

import { deleteContact } from "@/server/actions";
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

const DeleteContactButton = ({ children, contact }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this contact?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete "{contact.name}" from your contacts?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={() => setOpen(false)} color="error">
            Cancel
          </Button>
          <form action={deleteContact}>
            <input type="hidden" name="contactId" value={contact.id} />
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
