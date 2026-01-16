// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";


type PageProps = {
  params: Promise<{ slug: string }>;
};

/** (Optional but recommended) Pre-build all project pages */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** SEO per project */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.title} — Antonis Roussos`,
    description: project.summary ?? project.overview ?? "Project case study",
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-sm text-white/70 transition hover:text-white"
          >
            ← Back to Projects
          </Link>

          <a
            href="/CV-Roussos-Antonios.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            CV
          </a>
        </div>

        <div className="mt-8">
          <ProjectHero project={project} />

          {project.overview ? (
            <ProjectSection title="Overview">
              <p className="leading-relaxed text-white/80">{project.overview}</p>
            </ProjectSection>
          ) : null}

          {project.problem?.length ? (
            <ProjectSection title="Problem">
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {project.problem.map((x, i) => (
                  <li key={`${project.slug}-problem-${i}`}>{x}</li>
                ))}
              </ul>
            </ProjectSection>
          ) : null}

          {project.solution?.length ? (
            <ProjectSection title="Solution">
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {project.solution.map((x, i) => (
                  <li key={`${project.slug}-solution-${i}`}>{x}</li>
                ))}
              </ul>
            </ProjectSection>
          ) : null}

          {project.outcomes?.length ? (
            <ProjectSection title="Outcome">
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {project.outcomes.map((x, i) => (
                  <li key={`${project.slug}-outcome-${i}`}>{x}</li>
                ))}
              </ul>
            </ProjectSection>
          ) : null}

          {project.highlights?.length ? (
            <ProjectSection title="Highlights">
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {project.highlights.map((x, i) => (
                  <li key={`${project.slug}-highlights-${i}`}>{x}</li>
                ))}
              </ul>
            </ProjectSection>
          ) : null}
        </div>
      </div>
    </main>
  );
}
