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
      live: "https://saas-dashboard1.vercel.app",
      github: "https://github.com/RoussosAdo/saas-dashboard-ui",
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

  
] satisfies Project[];
