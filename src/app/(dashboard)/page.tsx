import Link from "next/link";
import ProjectView from "../components/ProjectView";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <header className="flex lg:flex-row flex-col mb-2" style={{justifyContent:"space-between"}}>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Projects</h1>
        <Link
          href="/new-project"
          style={{ height:'40px'}}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4  text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          <span className="text-lg">+</span>
          Create Project
        </Link>
      </header>
      <main>
        <ProjectView projects={projects} />
      </main>
    </>
  );
}
