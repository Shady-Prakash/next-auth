import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

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
        <Suspense>
          <Toaster/>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
