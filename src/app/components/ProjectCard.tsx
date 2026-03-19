import Link from "next/link";

export default function ProjectCard() {
  return (
    <div>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="mb-4 items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">Title</h3>
          <span className="rounded-full px-3 py-1 text-xs font-medium">
            Status
          </span>
        </div>
        <p className="mb-5 text-sm text-slate-500">Date</p>
        <Link
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          href={"/"}
        >
          View details
        </Link>
      </article>
    </div>
  );
}
