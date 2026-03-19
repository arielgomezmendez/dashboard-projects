import React from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  title: string;
  status: "Active" | "Completed";
  date: string;
};

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project}/>
      ))}
    </ul>
  );
}
