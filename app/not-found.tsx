import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm text-white/60">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 max-w-xl text-white/70">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
          >
            Go home
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
