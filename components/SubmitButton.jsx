"use client";

import { Backdrop, CircularProgress, IconButton } from "@mui/material";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <IconButton color="inherit" type="submit">
        {children}
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

export default SubmitButton;
