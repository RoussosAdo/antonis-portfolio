import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonis Roussos — Front-End (React) / Full-Stack (Laravel)",
  description:
    "Portfolio of Antonis Roussos — React front-end developer with full-stack experience (PHP/Laravel). Projects, case studies, and production-focused work.",
  metadataBase: new URL("https://antonis-portfolio.netlify.app"), // θα το αλλάξεις όταν πάρεις custom domain
  openGraph: {
    title: "Antonis Roussos — Portfolio",
    description:
      "React front-end developer with full-stack experience (PHP/Laravel). Projects and case studies.",
    url: "https://antonis-portfolio.netlify.app",
    siteName: "Antonis Roussos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonis Roussos — Portfolio",
    description:
      "React front-end developer with full-stack experience (PHP/Laravel). Projects and case studies.",
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
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
