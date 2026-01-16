"use client";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* LEFT */}
          <div>
            <p className="font-medium text-white">
              Antonis Roussos
            </p>
            <p className="mt-1 text-sm text-white/60">
              Front-End (React) • Full-Stack (Laravel)
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/RoussosAdo"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/antonis-roussos-1a05b72b2/"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:roussos.ado@gmail.com"
              className="text-white/60 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} Antonis Roussos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
