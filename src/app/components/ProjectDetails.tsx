"use client";

import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import { Project } from "../types/projectType";
import ProjectDetailsContent from "./ProjectDetailsContent";

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
    const projectFound = findProject();
    if (projectFound) setProject(projectFound);
  }, [id]);

  //throw new Error("Test error"); // Throw an error to test the Error component (error.tsx).

  if (project !== null) {
    return (
      <ProjectDetailsContent
        title={project?.title}
        status={project?.status}
        date={project?.date}
        description={project?.description}
      />
    );
  }
}
