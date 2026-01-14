export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          Open to Front-End (React) • Full-Stack (Laravel/PHP)
        </p>

        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Antonis Roussos
          <span className="block text-white/70">
            I build production-ready web apps.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
          Front-End developer focused on React and clean UI architecture. I ship
          features in real workflows (Git, PRs), care about performance, and
          build interfaces that hold up in production.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
          >
            View Projects
          </a>

          <a
            href="/CV-Roussos-Antonios.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View CV
          </a>

          <a
            href="/CV-Roussos-Antonios.pdf"
            download
            className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            Download PDF
          </a>


          <a
            href="https://github.com/RoussosAdo"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/antonis-roussos-1a05b72b2/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>

        {/* Quick proof row */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Main stack</p>
            <p className="mt-2 font-medium">React • Next.js • Tailwind</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Full-stack</p>
            <p className="mt-2 font-medium">PHP • Laravel • MySQL</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Workflow</p>
            <p className="mt-2 font-medium">Git • PRs • Debugging</p>
          </div>
        </div>
      </section>

      {/* Placeholder Projects anchor */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-white/70">
          Next step: we will add 3 flagship projects with case studies.
        </p>
      </section>
    </main>
  );
}
