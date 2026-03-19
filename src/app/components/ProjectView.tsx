"use client";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { Project } from "../types/projectType";
import { useEffect, useMemo, useState } from "react";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectView({ projects }: ProjectsViewProps) {
  const [statusFilter, setStatusFilter] = useState("");
  const [allProjects, setAllProjects] = useState<Project[]>(projects);

  useEffect(()=>{
    const storedProjects = localStorage.getItem("projects");
    //console.log("Stored project ", storedProjects)
    if (storedProjects) {
      const parsedProjects: Project[] = JSON.parse(storedProjects);
      setAllProjects([...parsedProjects, ...projects]);
    } else {
      setAllProjects(projects);
    }
  },[projects]);

  const filteredProjects = useMemo(() => {
    if (!statusFilter) return allProjects;
    return allProjects.filter((project) => project.status === statusFilter);
  }, [statusFilter,allProjects]);

  return (
    <>
      {<ProjectFilter value={statusFilter} onChange={setStatusFilter} />}
      <ProjectList projects={filteredProjects} />
    </>
  );
}
