"use client";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { Project } from "../types/projectType";
import { useMemo, useState } from "react";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectView({ projects }: ProjectsViewProps) {
  const [statusFilter, setStatusFilter] = useState("");

  //let filteredProjects

  const filteredProjects = useMemo(() => {
    if (!statusFilter) return projects;
    return projects.filter((project) => project.status === statusFilter);
  }, [statusFilter,projects]);

  return (
    <>
      {<ProjectFilter value={statusFilter} onChange={setStatusFilter} />}
      <ProjectList projects={filteredProjects} />
    </>
  );
}
