import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectDetails({ id }: { id: string }) {
    
  const project = projects.find((item) => item.id === id); // Get the project by its id
  //console.log("project: ", project);
  return (
    <section>
      <Link href={"/"}>← Back to projects</Link>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-slate-900">
            {project?.title}
          </h1>

          <span className={`rounded-full px-3 py-1 text-sm font-medium`}>
            {project?.status}
          </span>
        </div>

        <p className="mb-6 text-sm text-slate-500">{project?.date}</p>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Description
          </h2>
          <p className="leading-7 text-slate-700">{project?.description}</p>
        </div>
      </div>
    </section>
  );
}
