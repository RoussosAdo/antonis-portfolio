import Link from "next/link";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { MotionDiv, stagger, fadeUp } from "@/components/Motion";

export default function Home() {
  const featured = projects;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <Reveal>
        <section className="relative mx-auto max-w-6xl px-6 py-20">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-6xl blur-3xl">
            <div className="h-full w-full rounded-full bg-white/10" />
          </div>

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
            Front-End developer focused on React and clean UI architecture. I
            ship features in real workflows (Git, PRs), care about performance,
            and build interfaces that hold up in production.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {/* Primary */}
            <Magnetic>
              <a
                href="#projects"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0"
              >
                View Projects
              </a>
            </Magnetic>

            {/* Secondary */}
            <a
              href="/CV-Roussos-Antonios.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              View CV
            </a>

            {/* Outline */}
            <a
              href="/CV-Roussos-Antonios.pdf"
              download
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download PDF
            </a>

            <a
              href="https://github.com/RoussosAdo"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/antonis-roussos-1a05b72b2/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0"
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
      </Reveal>

      {/* FEATURED PROJECTS */}
      <Reveal delayMs={80}>
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Production-style React work, full-stack fundamentals, and clean
                JavaScript engineering.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:inline-flex"
            >
              View all →
            </Link>
          </div>

          <MotionDiv
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
>
  {featured.map((p) => (
    <div key={p.slug}>
      <MotionDiv variants={fadeUp}>
        <Link
          href={`/projects/${p.slug}`}
          className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          <p className="text-sm text-white/60">{p.role}</p>
          <h3 className="mt-2 text-xl font-semibold transition group-hover:text-white">
            {p.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {p.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm font-medium text-white/80 transition group-hover:text-white">
            Read case study →
          </p>
        </Link>
      </MotionDiv>
    </div>
  ))}
</MotionDiv>


          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              View all projects →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal delayMs={120}>
        <section id="experience" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-lg font-semibold">Front-End Developer</p>
              <p className="text-sm text-white/60">eLearning Industry</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
              <li>
                Shipped UI features in an existing codebase using Git + PR
                workflow.
              </li>
              <li>
                Built reusable components and improved maintainability through
                refactors.
              </li>
              <li>
                Debugged production issues and delivered fixes under deadlines.
              </li>
              <li>
                Worked with responsive layouts and consistent UI patterns.
              </li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* CONTACT */}
      <Reveal delayMs={160}>
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/70">Email me directly and I’ll reply fast.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:roussos.ado@gmail.com"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/antonis-roussos-1a05b72b2/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/RoussosAdo"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Antonis Roussos. Built with Next.js and
          Tailwind.
        </div>
      </footer>
    </main>
  );
}
