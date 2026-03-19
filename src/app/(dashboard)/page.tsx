import Image from "next/image";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <div>
      <main >
       <section>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Project</h1>
        <ProjectList/>
       </section>
      </main>
    </div>
  );
}
