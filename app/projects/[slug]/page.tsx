import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/projects" className="text-sm text-white/70 hover:text-white">
          ← Back to Projects
        </Link>

        <p className="mt-8 text-sm text-white/60">{project.role}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
            >
              Live Demo
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/50">
              Live Demo (coming soon)
            </span>
          )}

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
            >
              GitHub
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/50">
              GitHub (coming soon)
            </span>
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-6">
          <h3 className="text-base font-semibold">Next upgrade (we’ll do this)</h3>
          <p className="mt-2 text-sm text-white/70">
            We’ll expand this page into a full case study: problem, approach,
            architecture, screenshots, challenges, and measurable results.
          </p>
        </div>
      </section>
    </main>
  );
}
