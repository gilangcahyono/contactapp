import type { Metadata } from "next";
import "./globals.css";
import Toast from "@/components/Toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Contacts",
    default: "Home",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="min-h-screen max-w-md mx-auto">{children}</div>
        <Toast />
      </body>
    </html>
  );
}
