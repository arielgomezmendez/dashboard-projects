export default function Loading() {
  return (
    <section className="max-w-4xl">
      <div className="mb-6 h-6 w-40 animate-pulse rounded bg-slate-200" />

      <div className="mb-4 flex items-center gap-4">
        {/* Title skeleton */}
        <div className="h-12 w-40 animate-pulse rounded bg-slate-200" />
        {/*Badge skeleton */}
        <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200" />
      </div>

      {/*Date skeleton */}
      <div className="mb-8 h-6 w-32 animate-pulse rounded bg-slate-200" />

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 h-8 w-40 animate-pulse rounded bg-slate-200" />
        <div className="mb-3 h-5 w-full animate-pulse rounded bg-slate-200" />
        <div className="mb-3 h-5 w-11/12 animate-pulse rounded bg-slate-200" />
        <div className="h-5 w-9/12 animate-pulse rounded bg-slate-200" />
      </div>
    </section>
  );
}
