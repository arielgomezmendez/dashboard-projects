import Link from "next/link";

type ProjectDetailsContentPropsType = {
    title:string,
    status: string,
    description: string,
    date:string
}

function ProjectDetailsContent(props:ProjectDetailsContentPropsType) {
  const { title, status, date, description } = props;

  const statusStyles =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-600";

  return (
    <section>
      <Link href={"/"}>← Back to projects</Link>
      <div>
        <div className="mb-4 mt-4 flex items-center gap-4">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          {/* Status project */}
          <span
            aria-label="Project date"
            className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles}`}
          >
            {status}
          </span>
        </div>
        {/* Date of project */}
        <p className="mb-6 text-sm text-slate-500">{date}</p>
        {/* Description of project*/}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Description
          </h2>
          <p className="leading-7 text-slate-700">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsContent;
