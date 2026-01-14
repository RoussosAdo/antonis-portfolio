export type Project = {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Admin Dashboard",
    role: "Front-End (React) • Production-style UI",
    stack: ["Next.js", "React", "Tailwind", "REST API"],
    summary:
      "A production-style admin dashboard with real-world UI patterns: tables, filters, pagination, forms, loading/error states, and clean component architecture.",
    highlights: [
      "Auth (mock), protected routes, and clean layout structure",
      "Data table with search, filters, sorting, pagination",
      "Forms with validation and reusable UI components",
      "Loading skeletons + error states like real products",
    ],
    links: {
      live: "", // θα το βάλεις όταν κάνεις deploy
      github: "", // θα το βάλεις όταν φτιάξεις το repo του project ή folder
    },
  },
  {
    slug: "fullstack-laravel",
    title: "Full-Stack App (Laravel + React)",
    role: "Full-Stack • CRUD + Auth",
    stack: ["Laravel", "PHP", "MySQL", "Blade/React"],
    summary:
      "A full-stack app demonstrating backend fundamentals: authentication, validation, CRUD, and a clean UI layer.",
    highlights: [
      "Auth, validation, and database-backed CRUD",
      "Server-rendered pages (Blade) or React UI layer",
      "Structured controllers/services approach",
      "Deployed demo with real data flows",
    ],
    links: {
      live: "",
      github: "",
    },
  },
  {
    slug: "vanilla-js",
    title: "Vanilla JavaScript Micro-App",
    role: "JavaScript • Engineering fundamentals",
    stack: ["HTML", "CSS", "JavaScript"],
    summary:
      "A small but high-quality project focused on clean JS, accessibility, and performance patterns without frameworks.",
    highlights: [
      "Modular JS structure (no spaghetti)",
      "Keyboard accessible UI (focus states, semantics)",
      "Performance patterns (debounce/throttle where needed)",
      "LocalStorage persistence + error handling",
    ],
    links: {
      live: "",
      github: "",
    },
  },
];
