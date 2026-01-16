export default function Loading() {
  return (
    <main className="min-h-[70vh] bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="h-5 w-24 animate-pulse rounded bg-white/10" />
        <div className="mt-6 h-10 w-[320px] animate-pulse rounded bg-white/10" />
        <div className="mt-4 h-4 w-[520px] max-w-full animate-pulse rounded bg-white/10" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          <div className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          <div className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
        </div>
      </div>
    </main>
  );
}
