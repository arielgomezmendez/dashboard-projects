import Link from "next/link";

type Props = {
  id: string;
  title: string;
  status: "Active" | "Completed";
  date: string;
};

export default function ProjectCard({ id, title, status, date }: Props) {
  const statusStyles =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-600";

  return (
    <li>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="mb-4 items-start justify-between gap-3">
            {/*Card header*/}
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          {/* Status */}
          <span className={`text-xs font-medium px-4 py-1 rounded-full ${statusStyles}`}>
            {status}
          </span>
        </div>
        {/*Date */}
        <p className="mb-5 text-sm text-slate-500">{date}</p>
        <Link
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          href={"/"}
        >
          View details
        </Link>
      </article>
    </li>
  );
}
