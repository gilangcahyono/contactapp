import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      minHeight={"100dvh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <div>
        <Typography variant="h2" fontWeight={700}>
          404
        </Typography>
        <Typography variant="h5" fontWeight={700} marginBottom={2}>
          Page not found
        </Typography>
        <Typography variant="body1" marginBottom={4}>
          Sorry, we couldn't find this page.
        </Typography>
        <Link href="/">
          <Button variant="contained">Back to Homepage</Button>
        </Link>
      </div>
    </Box>
  );
}
