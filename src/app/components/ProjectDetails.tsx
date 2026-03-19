import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectDetails({ id }: { id: string }) {
  const project = projects.find((item) => item.id === id); // Get the project by its id
  //console.log("project: ", project);

  const statusStyles =
    project?.status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-600";

  //throw new Error("Test error"); // Throw an error to test the Error component (error.tsx).

  return (
    <section>
      <Link href={"/"}>← Back to projects</Link>
      <div>
        <div className="mb-4 mt-4 flex items-center gap-4">
          <h1 className="text-3xl font-bold text-slate-900">
            {project?.title}
          </h1>
          {/* Status project */}
          <span
            aria-label="Project date"
            className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles}`}
          >
            {project?.status}
          </span>
        </div>
        {/* Date of project */}
        <p className="mb-6 text-sm text-slate-500">{project?.date}</p>
        {/* Description of project*/}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Description
          </h2>
          <p className="leading-7 text-slate-700">{project?.description}</p>
        </div>
      </div>
    </section>
  );
}
