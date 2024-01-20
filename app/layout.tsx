import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import {Navbar} from "@/components/Navbar/Navbar";
import {LayoutWrapper} from "@/app/LayoutWrapper";
import {Paper} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Paper className="main">{children}</Paper>
          <Navbar />
        </body>
      </html>
    </LayoutWrapper>
  );
}
