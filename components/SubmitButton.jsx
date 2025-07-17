"use client";

import { Backdrop, CircularProgress, IconButton } from "@mui/material";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        style={{
          backgroundColor: "inherit",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        {children}
      </button>
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
