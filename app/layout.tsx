import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import ScrollRestoration from "@/components/ScrollRestoration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://antonis-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Antonis Roussos | Front-End Developer",
    template: "%s | Antonis Roussos",
  },

  description:
    "Front-End developer focused on React, Next.js and clean UI architecture. Building production-ready web apps with strong workflows and maintainable code.",

  keywords: [
    "Antonis Roussos",
    "Front-End Developer",
    "React",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "Laravel",
    "Portfolio",
  ],

  authors: [{ name: "Antonis Roussos" }],
  creator: "Antonis Roussos",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      // αν έχεις και png favicon μπορείς να το προσθέσεις:
      // { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    title: "Antonis Roussos — Portfolio",
    description:
      "React front-end developer with full-stack experience (PHP/Laravel). Projects and case studies.",
    url: siteUrl,
    siteName: "Antonis Roussos",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Antonis Roussos — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Antonis Roussos — Portfolio",
    description:
      "React front-end developer with full-stack experience (PHP/Laravel). Projects and case studies.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        <ScrollRestoration />
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
