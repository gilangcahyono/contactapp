import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Avatar, Box, Typography, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import ActionMenu from "@/components/ActionMenu";
import prisma from "@/lib/prismaClient";

const Page = async ({ params }) => {
  const contact = await prisma.contact.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <>
      <Grid container paddingTop={1}>
        <Grid size={6}>
          <IconButton component={Link} href="/" color="inherit">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid size={6} textAlign="right">
          <ActionMenu id={params.id} />
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Avatar
          alt={contact.name}
          src={`/${contact.avatar || ""}`}
          sx={{ width: 90, height: 90, margin: "20px auto" }}
        />
        <Typography variant="h4">{contact.name}</Typography>
      </Box>
      <Grid
        container
        display="flex"
        alignItems="center"
        sx={{ borderRadius: "15px", backgroundColor: "white", padding: "15px" }}
      >
        <Grid size={6}>
          <Typography variant="body1">{contact.mobile}</Typography>
          <Typography variant="caption" color="gray">
            Mobile | Indonesia
          </Typography>
        </Grid>
        <Grid size={6} textAlign="right">
          <IconButton
            color="success"
            href={`https://wa.me/${contact.mobile}`}
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
