// components/ProjectSection.tsx
import React from "react";

export default function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-white/75">{children}</div>
    </section>
  );
}
