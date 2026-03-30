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
  features?: string[];
};

// κοντεντ/ντατα σεπερειτιντ- ηζι του μαιγρειτ το cms λειτερ

// Helper (optional): ensures you never accidentally export empty arrays/strings
const p = (project: Project) => project;

export const projects = [
  p({
    slug: "saas-dashboard",
    title: "SaaS Dashboard (React UI)",
    role: "Front-End • React",
    summary:
      "Production-ready SaaS dashboard built with reusable components, responsive layout, and scalable UI architecture.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    links: {
      live: "",
      github: "https://github.com/RoussosAdo",
    },
    overview:
      "Designed and implemented a scalable dashboard UI system with reusable components, consistent layout patterns, and performance-focused rendering.",
    problem: [
      "Dashboard interfaces scale quickly and require reusable UI patterns.",
      "Ensuring responsiveness and consistency across breakpoints is critical.",
      "Avoiding duplicated logic and tightly coupled components."
    ],
    solution: [
      "Implemented modular UI components (cards, tables, actions) with clear separation of concerns.",
      "Established consistent spacing, typography, and layout system.",
      "Managed state efficiently, lifting state only where necessary."
    ],
    outcomes: [
      "Reduced UI duplication through reusable component patterns.",
      "Improved maintainability with structured and scalable architecture.",
      "Delivered consistent responsive behavior across devices."
    ],
    features: [
    "Reusable dashboard layout with modular components",
    "Responsive design across mobile, tablet, and desktop",
    "Interactive data table with search, filtering, and pagination",
    "Clean component architecture with performance-focused rendering",
    "Accessible UI with keyboard navigation and proper contrast",
    "Simulated analytics data (users, metrics, dashboard stats)"
    ],
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
