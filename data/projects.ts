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

// κοντεντ/ντατα separated - easy to migrate to CMS later

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
      "Avoiding duplicated logic and tightly coupled components.",
    ],
    solution: [
      "Implemented modular UI components (cards, tables, actions) with clear separation of concerns.",
      "Established consistent spacing, typography, and layout system.",
      "Managed state efficiently, lifting state only where necessary.",
    ],
    outcomes: [
      "Reduced UI duplication through reusable component patterns.",
      "Improved maintainability with structured and scalable architecture.",
      "Delivered consistent responsive behavior across devices.",
    ],
    features: [
      "Reusable dashboard layout with modular components",
      "Responsive design across mobile, tablet, and desktop",
      "Interactive data table with search, filtering, and pagination",
      "Clean component architecture with performance-focused rendering",
      "Accessible UI with keyboard navigation and proper contrast",
      "Simulated analytics data (users, metrics, dashboard stats)",
    ],
  }),

  p({
    slug: "orbitops",
    title: "OrbitOps",
    role: "Front-End/FullStack • Product UI",
    summary:
      "Modern multi-tenant SaaS dashboard concept built with responsive dashboard architecture, reusable components, and clean product-focused UI.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://orbitops.tech",
      github: "https://github.com/RoussosAdo/orbitops",
    },
    overview:
      "Built OrbitOps as a modern SaaS admin platform concept focused on scalable dashboard structure, reusable interface patterns, and interactive task-oriented product flows.",
    problem: [
      "Many dashboard projects look visually polished but lack realistic product structure.",
      "SaaS interfaces need to support multiple sections, data-heavy screens, and reusable design patterns.",
      "Maintaining consistency across tasks, projects, team, clients, billing, and settings becomes difficult without a scalable UI system.",
    ],
    solution: [
      "Designed a multi-tenant SaaS dashboard experience with clear information hierarchy and reusable page patterns.",
      "Created responsive UI sections and modular components to support growth across product areas.",
      "Focused on clean product styling, interactive task flows, and dashboard usability instead of static showcase-only screens.",
    ],
    outcomes: [
      "Delivered a realistic SaaS product concept that presents strong frontend and product-thinking skills.",
      "Improved consistency through reusable components and shared dashboard structure.",
      "Created a portfolio project that better reflects real-world admin platform design and implementation.",
    ],
    features: [
      "Multi-tenant SaaS dashboard structure",
      "Responsive admin layout across screen sizes",
      "Reusable product UI components",
      "Interactive task and workflow-oriented screens",
      "Clean information hierarchy for dashboard sections",
      "Modern product-focused visual design",
    ],
  }),
] satisfies Project[];