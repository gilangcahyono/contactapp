"use client";

import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught by error.js:", error);
  }, [error]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "8px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Terjadi Kesalahan
        </Typography>
        <Typography variant="body1" marginBottom={2} gutterBottom>
          Maaf, terjadi kesalahan. Silakan coba lagi nanti.
        </Typography>
        <Button variant="contained" color="error" onClick={() => reset()}>
          Coba Lagi
        </Button>
      </Box>
    </Box>
  );
}
