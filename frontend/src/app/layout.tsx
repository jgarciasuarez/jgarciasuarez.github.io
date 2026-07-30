import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Joaquin Garcia-Suarez | Academic Portfolio",
  description: "SNSF Ambizione Fellow at EPFL. Researching interface mechanics, wave propagation, and computational methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
