"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const Page = ({ params }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container>
        <Grid size={6}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ArrowBackIcon />
          </Link>
        </Grid>
        <Grid size={6} textAlign="right">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          alt="Gilang Cahyono"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 90, height: 90, margin: "20px auto" }}
        />
        <Typography variant="h4">Gilang Cahyono</Typography>
        <Typography variant="body1" gutterBottom>
          +62 812-3456-7890
        </Typography>
      </Box>
    </>
  );
};

export default Page;
