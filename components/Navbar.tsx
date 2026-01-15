"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useActiveSection from "@/components/useActiveSection";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // active section μόνο στην Home
  const activeSection = useActiveSection(["projects", "experience", "contact"]);
  const onHome = pathname === "/";

  const isActive = (id: "projects" | "experience" | "contact") =>
    onHome && activeSection === id;

  const linkClass = (active: boolean) =>
    `transition ${active ? "text-white" : "text-white/70 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="font-semibold tracking-tight">
          Antonis<span className="text-white/60">.dev</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 text-sm sm:flex">
          {/* Anchor links = <a> */}
          <Link href="/#projects" className={linkClass(isActive("projects"))}>
            Featured
          </Link>

          {/* Page route = <Link> */}
          <Link href="/projects" className={linkClass(pathname === "/projects")}>
            Projects
          </Link>

          <Link href="/#experience" className={linkClass(isActive("experience"))}>
            Experience
          </Link>

          <Link href="/#contact" className={linkClass(isActive("contact"))}>
            Contact
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <a
            href="/CV-Roussos-Antonios.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:inline-flex"
          >
            CV
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-white sm:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-neutral-950 sm:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm">
            <Link
              href="/#projects"
              onClick={() => setOpen(false)}
              className={linkClass(isActive("projects"))}
            >
              Featured
            </Link>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className={linkClass(pathname === "/projects")}
            >
              Projects
            </Link>

            <Link
              href="/#experience"
              onClick={() => setOpen(false)}
              className={linkClass(isActive("experience"))}
            >
              Experience
            </Link>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className={linkClass(isActive("contact"))}
            >
              Contact
            </Link>

            <a
              href="/CV-Roussos-Antonios.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-medium text-neutral-950"
            >
              View CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
