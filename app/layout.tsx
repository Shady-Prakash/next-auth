import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
// import { auth } from "@/auth";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next-Auth",
  description: "Authentication",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
      <body
        className={inter.className}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
