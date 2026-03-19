"use client";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";

import { projects } from "../data/projects";
import { Project } from "../types/projectType";
import { useState } from "react";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectView({ projects }: ProjectsViewProps) {
  const [statusFilter, setStatusFilter] = useState("");
  return (
    <>
      {<ProjectFilter value={statusFilter} onChange={setStatusFilter}/>}
      <ProjectList projects={projects} />
    </>
  );
}
