import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading({ open = true }) {
  return (
    <Box
      display={open ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
      position="fixed"
      zIndex={9999999999}
      inset={0}
      bgcolor="rgba(0, 0, 0, 0.5)"
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <CircularProgress />
    </Box>
  );
}
