import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antonis-portfolio.netlify.app"), // άλλαξέ το όταν έχεις τελικό domain
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
  openGraph: {
    title: "Antonis Roussos | Front-End Developer",
    description:
      "Production-ready UI with React/Next.js, clean architecture, and real-world workflows.",
    url: "/",
    siteName: "Antonis Roussos",
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
    title: "Antonis Roussos | Front-End Developer",
    description:
      "Production-ready UI with React/Next.js, clean architecture, and real-world workflows.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
        <ScrollProgress />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
