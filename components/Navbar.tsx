"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import useActiveSection from "@/components/useActiveSection";

type Key = "featured" | "projects" | "experience" | "contact";

function KbdHint() {
  const isMac =
    typeof window !== "undefined" &&
    /Mac|iPhone|iPad|iPod/i.test(navigator.platform);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
      className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 transition hover:bg-white/10 sm:inline-flex"
      aria-label="Open search"
    >
      <span className="text-white/60">Search</span>
      <span className="flex items-center gap-1">
        <kbd className="rounded-md border border-white/10 bg-black/20 px-1.5 py-0.5 text-[11px]">
          {isMac ? "⌘" : "Ctrl"}
        </kbd>
        <kbd className="rounded-md border border-white/10 bg-black/20 px-1.5 py-0.5 text-[11px]">
          K
        </kbd>
      </span>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onHome = pathname === "/";
  const activeSection = useActiveSection(["projects", "experience", "contact"], 140);

  // Hash για instant active όταν πατάς anchor
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // ✅ Manual override: όταν πατάς logo (ή θες force underline), κλειδώνει προσωρινά
  const [manualKey, setManualKey] = useState<Key | null>(null);

  useEffect(() => {
    if (!manualKey) return;
    const t = window.setTimeout(() => setManualKey(null), 600);
    return () => window.clearTimeout(t);
  }, [manualKey]);

  const activeKey: Key = useMemo(() => {
    // ✅ manual wins
    if (manualKey) return manualKey;

    // ✅ projects + case studies
    if (pathname.startsWith("/projects")) return "projects";

    if (onHome) {
      // 1) hash priority (instant)
      if (hash === "#contact") return "contact";
      if (hash === "#experience") return "experience";
      if (hash === "#projects") return "featured";

      // 2) scrollspy
      if (activeSection === "contact") return "contact";
      if (activeSection === "experience") return "experience";
      return "featured";
    }

    return "featured";
  }, [manualKey, pathname, onHome, hash, activeSection]);

  const linkClass = (active: boolean) =>
    `transition ${active ? "text-white" : "text-white/70 hover:text-white"}`;

  // ----- Underline (dynamic, centered) -----
  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<Key, HTMLAnchorElement | null>>({
    featured: null,
    projects: null,
    experience: null,
    contact: null,
  });

  const [underline, setUnderline] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const updateUnderline = () => {
    const container = navRef.current;
    const el = linkRefs.current[activeKey];

    if (!container || !el) {
      setUnderline((u) => ({ ...u, opacity: 0 }));
      return;
    }

    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    const targetWidth = Math.max(18, Math.round(r.width));
    const centerX = r.left - cRect.left + r.width / 2;
    const left = Math.round(centerX - targetWidth / 2);

    setUnderline({ left, width: targetWidth, opacity: 1 });
  };

  useLayoutEffect(() => {
    updateUnderline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  useEffect(() => {
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);

    const t = window.setTimeout(() => updateUnderline(), 50);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Click helpers
  const goHash = (h: "#projects" | "#experience" | "#contact") => {
    setManualKey(null);
    setHash(h);
    setOpen(false);
  };

  const openSearch = () => {
    window.dispatchEvent(new Event("open-command-palette"));
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO — hard refresh to home */}
<a
  href="/"
  onClick={() => {
    setOpen(false);
    setHash("");
    setManualKey(null);
  }}
  className="font-semibold tracking-tight cursor-pointer"
>
  Antonis<span className="text-white/60">.dev</span>
</a>


        {/* DESKTOP NAV */}
        <div ref={navRef} className="relative hidden items-center gap-6 text-sm sm:flex">
          <span
            className="pointer-events-none absolute -bottom-2 h-0.5 rounded-full bg-white/80 transition-all duration-300"
            style={{
              left: underline.left,
              width: underline.width,
              opacity: underline.opacity,
            }}
          />

          <Link
            href="/#projects"
            ref={(el) => {
              linkRefs.current.featured = el;
            }}
            onClick={() => goHash("#projects")}
            className={linkClass(activeKey === "featured")}
          >
            Featured
          </Link>

          <Link
            href="/projects"
            ref={(el) => {
              linkRefs.current.projects = el;
            }}
            onClick={() => {
              setManualKey(null);
              setOpen(false);
            }}
            className={linkClass(activeKey === "projects")}
          >
            Projects
          </Link>

          <Link
            href="/#experience"
            ref={(el) => {
              linkRefs.current.experience = el;
            }}
            onClick={() => goHash("#experience")}
            className={linkClass(activeKey === "experience")}
          >
            Experience
          </Link>

          <Link
            href="/#contact"
            ref={(el) => {
              linkRefs.current.contact = el;
            }}
            onClick={() => goHash("#contact")}
            className={linkClass(activeKey === "contact")}
          >
            Contact
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <KbdHint />

          <a
            href="/CV-Roussos-Antonios.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:inline-flex"
          >
            CV
          </a>

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
            <button
              type="button"
              onClick={openSearch}
              className="text-left text-white/80 hover:text-white"
            >
              Search
            </button>

            <Link
              href="/#projects"
              onClick={() => goHash("#projects")}
              className={linkClass(activeKey === "featured")}
            >
              Featured
            </Link>

            <Link
              href="/projects"
              onClick={() => {
                setManualKey(null);
                setOpen(false);
              }}
              className={linkClass(activeKey === "projects")}
            >
              Projects
            </Link>

            <Link
              href="/#experience"
              onClick={() => goHash("#experience")}
              className={linkClass(activeKey === "experience")}
            >
              Experience
            </Link>

            <Link
              href="/#contact"
              onClick={() => goHash("#contact")}
              className={linkClass(activeKey === "contact")}
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
