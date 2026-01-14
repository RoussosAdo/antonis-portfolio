import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Three flagship projects focused on production-ready React and
          full-stack fundamentals.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p className="text-sm text-white/60">{p.role}</p>
              <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {p.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
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
          ))}
        </div>
      </section>
    </main>
  );
}
