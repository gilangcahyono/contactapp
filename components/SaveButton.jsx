"use client";

import { Backdrop, CircularProgress, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <IconButton color="inherit" type="submit">
        <CheckIcon />
      </IconButton>
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={pending}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default SaveButton;
