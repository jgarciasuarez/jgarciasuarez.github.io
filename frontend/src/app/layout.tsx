import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteIndexingEnabled, siteUrl } from "@/lib/site";
import { createSocialMetadata } from "@/lib/socialMetadata";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  display: "swap",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joaquin Garcia-Suarez | Academic Portfolio",
  description: "SNSF Ambizione Fellow at EPFL. Researching interface mechanics, wave propagation, and computational methods.",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: siteIndexingEnabled,
    follow: siteIndexingEnabled,
  },
  ...createSocialMetadata({
    title: "Joaquin Garcia-Suarez | Data-Driven Computational Friction",
    description:
      "Academic portfolio and interactive DDCF research hub connecting friction physics, data-driven mechanics, and multiscale simulation.",
    url: "/",
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl.origin}/#website`,
      url: siteUrl.toString(),
      name: "Joaquin Garcia-Suarez | Academic Portfolio",
      description:
        "Research portfolio of Joaquin Garcia-Suarez, SNSF Ambizione Fellow at EPFL.",
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl.origin}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl.origin}/#person`,
      name: "Joaquin Garcia-Suarez",
      url: siteUrl.toString(),
      email: "mailto:joaquin.garciasuarez@epfl.ch",
      jobTitle: "SNSF Ambizione Fellow",
      worksFor: {
        "@type": "Organization",
        name: "EPFL",
        url: "https://www.epfl.ch/",
      },
      sameAs: [
        "https://jgarciasuarez.github.io/",
        "https://orcid.org/0000-0001-8830-4348",
        "https://github.com/jgarciasuarez",
        "https://x.com/jgs_research",
        "https://people.epfl.ch/joaquin.garciasuarez",
      ],
      knowsAbout: [
        "Interface mechanics",
        "Wave propagation",
        "Computational mechanics",
        "Data-driven friction",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="container">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
