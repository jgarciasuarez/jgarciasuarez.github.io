import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Joaquin Garcia-Suarez | Academic Portfolio",
  description: "SNSF Ambizione Fellow at EPFL. Researching interface mechanics, wave propagation, and computational methods.",
  openGraph: {
    title: "Joaquin Garcia-Suarez | Data-Driven Computational Friction",
    description:
      "Academic portfolio and interactive DDCF research hub connecting friction physics, data-driven mechanics, and multiscale simulation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DDCF | Data-Driven Computational Friction",
    description:
      "Explore the SNSF Ambizione project connecting friction physics, data-driven mechanics, and multiscale simulation.",
  },
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
