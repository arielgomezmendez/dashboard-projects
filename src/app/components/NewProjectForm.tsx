"use client";

import { useState } from "react";
import { Project, ProjectStatus } from "../types/projectType";
import { useRouter } from "next/navigation";
import NewProjectFormContent from "./NewProjectFormContent";

export default function NewProjectForm() {
  /* States to save the info of form inputs */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ProjectStatus>("Active");
  const [date, setDate] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Handling empty fields
    if (!title.trim() || !description.trim() || !date) {
      setError("Please complete all fields.");
      return;
    }

    const newProject: Project = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status,
      date,
    };

    const storedProjects = localStorage.getItem("projects"); // Get project from local storage

    const parsedProjects: Project[] = storedProjects
      ? JSON.parse(storedProjects)
      : [];

    const updatedProject = [newProject, ...parsedProjects]; // Create a new array with the new project and the previous projects

    localStorage.setItem("projects", JSON.stringify(updatedProject));

    router.push("/"); //Navigate to the main route
    router.refresh();
  };

  return (
    <NewProjectFormContent
      handleSubmit={handleSubmit}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      status= {status}
      setStatus={setStatus}
      date = {date}
      setDate={setDate}
      error={error} 
    />
  );
}
