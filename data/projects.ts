// data/projects.ts

export type ProjectLink = {
  live?: string;
  github?: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  stack: string[];
  links: ProjectLink;

  overview: string;
  problem: string[];
  solution: string[];
  outcomes: string[];
  highlights?: string[];
};

// Helper (optional): ensures you never accidentally export empty arrays/strings
const p = (project: Project) => project;

export const projects = [
  p({
    slug: "saas-dashboard",
    title: "SaaS Dashboard (React UI)",
    role: "Front-End • React",
    summary:
      "A production-style dashboard UI with reusable components, responsive layout, and clean state handling.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    links: {
      live: "https://example.com",
      github: "https://github.com/RoussosAdo",
    },
    overview:
      "Built a clean, scalable dashboard UI focused on component reuse, responsiveness, and performance-friendly rendering.",
    problem: [
      "Dashboard screens grow fast → needs reusable layout patterns.",
      "Must be responsive and consistent across breakpoints.",
      "Avoid messy component coupling and duplicated UI code.",
    ],
    solution: [
      "Created reusable UI sections and consistent spacing/typography rules.",
      "Structured components by responsibility (layout, cards, data, actions).",
      "Kept state minimal, lifted only when necessary.",
    ],
    outcomes: [
      "Reusable components reduced repetition and sped up new screens.",
      "Cleaner structure improved maintainability and readability.",
      "Responsive UI behaves consistently across devices.",
    ],
    highlights: ["Keyboard-friendly interactions", "Accessible contrast & spacing"],
  }),

  p({
    slug: "fullstack-laravel",
    title: "Full-Stack App (Laravel + MySQL)",
    role: "Full-Stack • Laravel/PHP",
    summary:
      "A CRUD-style web app with authentication, server-side validation, and clean database design.",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    links: {
      live: "https://example.com",
      github: "https://github.com/RoussosAdo",
    },
    overview:
      "Implemented a full-stack workflow: routes → controllers → validation → database → Blade UI.",
    problem: [
      "Need a reliable CRUD workflow with proper validation.",
      "Data integrity and consistent error handling are required.",
      "Keep business logic separated from views.",
    ],
    solution: [
      "Used Form Request validation for clear, reusable rules.",
      "Designed database tables with sensible keys and indexes.",
      "Kept controllers thin and views clean.",
    ],
    outcomes: [
      "Predictable behavior with clear validation errors.",
      "Maintainable full-stack structure aligned with Laravel conventions.",
      "Database design supports growth without breaking changes.",
    ],
  }),

  p({
    slug: "vanilla-js",
    title: "Vanilla JS Project",
    role: "Front-End • JavaScript",
    summary:
      "A clean JavaScript project demonstrating DOM architecture, API calls, and state organization without frameworks.",
    stack: ["JavaScript", "HTML", "CSS", "API"],
    links: {
      live: "https://example.com",
      github: "https://github.com/RoussosAdo",
    },
    overview:
      "Demonstrated engineering fundamentals: modular code, predictable state, and clean DOM updates.",
    problem: [
      "Avoid spaghetti DOM code while staying framework-free.",
      "Keep state predictable and UI updates consistent.",
      "Handle async API calls with readable flow.",
    ],
    solution: [
      "Separated state, DOM rendering, and event wiring.",
      "Created small pure functions for transformations.",
      "Centralized async logic and error handling.",
    ],
    outcomes: [
      "Readable codebase without framework overhead.",
      "Easier debugging and feature additions.",
      "Stable UI updates with less side-effect chaos.",
    ],
  }),
] satisfies Project[];
