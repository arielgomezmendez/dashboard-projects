"use client";

import Link from "next/link";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import { Project } from "../types/projectType";

export default function ProjectDetails({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);

  const findProject = () => {
    //Find the project in mock
    const mockProject = projects.find((item) => item.id === id);
    if (mockProject) return mockProject;

    //Find the project in localStorage
    const storedProjects = localStorage.getItem("projects");
    const parsedProjects: Project[] = storedProjects
      ? JSON.parse(storedProjects)
      : [];
  
    return parsedProjects.find((item) => item.id === id);
  };

  useEffect(() => {
    const projectFound = findProject()
    if (projectFound) setProject(projectFound);
  }, [id]);

  const statusStyles =
    project?.status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-600";

  //throw new Error("Test error"); // Throw an error to test the Error component (error.tsx).

  if (project !== null) {
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
}
