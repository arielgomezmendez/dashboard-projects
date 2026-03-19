import Image from "next/image";
import ProjectList from "../components/ProjectList";
import {projects} from "../data/projects";

export default function Home() {
  return (
    <div>
      <main >
       <section>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Project</h1>
        <ProjectList projects={projects}/>
       </section>
      </main>
    </div>
  );
}
