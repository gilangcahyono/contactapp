import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      zIndex={9999999}
      inset={0}
      bgcolor="rgba(0, 0, 0, 0.1)"
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <CircularProgress />
    </Box>
  );
}
