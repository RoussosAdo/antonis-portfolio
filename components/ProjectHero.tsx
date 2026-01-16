// components/ProjectHero.tsx
import React from "react";
import type { Project } from "@/data/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm text-white/60">{project.role}</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl text-white/70">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
          >
            Live
          </a>
        )}

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
