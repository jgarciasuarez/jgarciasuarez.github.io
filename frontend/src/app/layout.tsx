import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Joaquin Garcia-Suarez | Academic Portfolio",
  description: "SNSF Ambizione Fellow at EPFL. Researching interface mechanics, wave propagation, and computational methods.",
};

import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
