import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";

export const metadata = {
  title: "Contacts",
  description: "Next.js 14 Contacts App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f7f5f0" }}>
        <Container
          sx={{
            minHeight: "100dvh",
          }}
          maxWidth="sm"
        >
          {children}
        </Container>
      </body>
    </html>
  );
}
