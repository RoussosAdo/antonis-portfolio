import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://antonis-portfolio.vercel.app";

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
    "Tailwind CSS",
    "TypeScript",
    "Laravel",
    "Portfolio",
  ],

  authors: [{ name: "Antonis Roussos" }],
  creator: "Antonis Roussos",
  applicationName: "Antonis Roussos Portfolio",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Antonis Roussos — Front-End Developer",
    description:
      "React, Next.js, Tailwind CSS and scalable UI systems. Explore my portfolio and projects.",
    url: siteUrl,
    siteName: "Antonis Roussos",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Antonis Roussos Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Antonis Roussos — Front-End Developer",
    description:
      "React, Next.js, Tailwind CSS and scalable UI systems. Explore my portfolio and projects.",
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 text-white antialiased`}
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