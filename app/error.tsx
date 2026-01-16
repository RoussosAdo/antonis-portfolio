"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // optional: console log for debugging
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm text-white/60">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Unexpected error
        </h1>
        <p className="mt-3 max-w-xl text-white/70">
          Try again. If it keeps happening, it’s probably a bug in the app.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Go home
          </a>
        </div>

        {/* Optional debug block (hide later) */}
        <pre className="mt-10 overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
          {error.message}
        </pre>
      </div>
    </main>
  );
}
