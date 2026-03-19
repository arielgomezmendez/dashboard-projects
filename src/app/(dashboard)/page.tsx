
import ProjectView from "../components/ProjectView";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <main >
       <section>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Projects</h1>
        <ProjectView projects={projects}/>
       </section>
      </main>
    </div>
  );
}
