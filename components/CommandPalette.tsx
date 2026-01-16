"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

type Item = {
  id: string;
  label: string;
  hint?: string;
  keywords?: string[];
  action: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setActiveIndex(0);
  }, []);

  const openExternal = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const goHash = useCallback(
    (hash: "#projects" | "#experience" | "#contact") => {
      // Αν δεν είμαστε στο home, πάμε πρώτα home με hash
      if (pathname !== "/") {
        router.push(`/${hash}`);
        close();
        return;
      }

      // Αν είμαστε home, κάνουμε scroll στο section
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", hash);
      } else {
        router.push(`/${hash}`);
      }

      close();
    },
    [pathname, router, close]
  );

  const items = useMemo<Item[]>(
    () => [
      {
        id: "featured",
        label: "Featured",
        hint: "Jump to Featured section",
        keywords: ["home", "hero", "featured"],
        action: () => goHash("#projects"),
      },
      {
        id: "experience",
        label: "Experience",
        hint: "Jump to Experience section",
        keywords: ["work", "job", "eli", "experience"],
        action: () => goHash("#experience"),
      },
      {
        id: "contact",
        label: "Contact",
        hint: "Jump to Contact section",
        keywords: ["email", "contact", "reach", "message"],
        action: () => goHash("#contact"),
      },
      {
        id: "projects",
        label: "Projects",
        hint: "Open Projects page",
        keywords: ["projects", "case studies"],
        action: () => {
          router.push("/projects");
          close();
        },
      },
      {
        id: "cv",
        label: "Open CV (PDF)",
        hint: "Opens in a new tab",
        keywords: ["cv", "resume", "pdf"],
        action: () => {
          openExternal("/CV-Roussos-Antonios.pdf");
          close();
        },
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "External link",
        keywords: ["github", "repo", "code"],
        action: () => {
          openExternal("https://github.com/RoussosAdo");
          close();
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "External link",
        keywords: ["linkedin", "profile"],
        action: () => {
          openExternal("https://www.linkedin.com/in/antonis-roussos-1a05b72b2/");
          close();
        },
      },
      {
        id: "email",
        label: "Email me",
        hint: "Opens mail client",
        keywords: ["email", "contact"],
        action: () => {
          window.location.href = "mailto:roussos.ado@gmail.com";
          close();
        },
      },
    ],
    [router, close, goHash, openExternal]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;

    return items.filter((it) => {
      const hay = [
        it.label,
        it.hint ?? "",
        ...(it.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(s);
    });
  }, [q, items]);

  // Ctrl/Cmd + K + navigation keys
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k";
      const isCmdK = (e.metaKey || e.ctrlKey) && isK;

      if (isCmdK) {
        e.preventDefault();
        setOpen((v) => {
          const next = !v;
          if (next) {
            setQ("");
            setActiveIndex(0);
          }
          return next;
        });
        return;
      }


      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[activeIndex]?.action?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, close]);

  // Event from Navbar button
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setQ("");
      setActiveIndex(0);
    };
    window.addEventListener("open-command-palette", handler);
    return () => window.removeEventListener("open-command-palette", handler);
  }, []);


  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center bg-black/60 px-4 pt-24"
      onMouseDown={close}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/10 p-4">
          <input
            autoFocus
            value={q}
            onChange={(e) => {setQ(e.target.value);setActiveIndex(0);}}
            placeholder='Search… (e.g. "cv", "contact", "projects")'
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
          />
          <div className="mt-2 text-xs text-white/50">
            Press <span className="rounded bg-white/10 px-1.5 py-0.5">Esc</span>{" "}
            to close •{" "}
            <span className="rounded bg-white/10 px-1.5 py-0.5">Enter</span> to
            run
          </div>
        </div>

        <div className="max-h-90 overflow-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-6 text-sm text-white/60">No results.</div>
          ) : (
            filtered.map((it, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={it.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={it.action}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className="font-medium">{it.label}</span>
                  {it.hint ? (
                    <span className="text-xs text-white/50">{it.hint}</span>
                  ) : null}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
