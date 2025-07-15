"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Box,
  Typography,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Page = ({ params }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    alert("Contact deleted");
    window.location.href = "/";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container paddingTop={1}>
        <Grid size={6}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton color="inherit">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid size={6} textAlign="right">
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
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
            <Link
              href={`/${params.slug}/edit`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
              </MenuItem>
            </Link>
            <MenuItem onClick={handleDelete}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
              {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete this contact?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Delete "Gilang Cahyono" from your contacts?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="error">
                    Cancel
                  </Button>
                  <Button onClick={handleClose}>Delete</Button>
                </DialogActions>
              </Dialog> */}
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Avatar
          alt="Gilang Cahyono"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 90, height: 90, margin: "20px auto" }}
        />
        <Typography variant="h4">Gilang Cahyono</Typography>
      </Box>
      <Grid
        container
        display="flex"
        alignItems="center"
        sx={{ borderRadius: "15px", backgroundColor: "white", padding: "15px" }}
      >
        <Grid size={6}>
          <Typography variant="body1">+62 812-3456-7890</Typography>
          <Typography variant="caption" color="gray">
            Mobile | Indonesia
          </Typography>
        </Grid>
        <Grid size={6} textAlign="right">
          <IconButton
            color="success"
            href="https://wa.me/6281234567890"
            target="_blank"
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
