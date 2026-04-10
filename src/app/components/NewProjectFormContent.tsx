import React from "react";
import { ProjectStatus } from "../types/projectType";

type NewProjectFormContentPropsType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  status: ProjectStatus;
  setStatus: React.Dispatch<React.SetStateAction<ProjectStatus>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

function NewProjectFormContent(props: NewProjectFormContentPropsType) {
  const {
    handleSubmit,
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    date,
    setDate,
    error,
  } = props;

  return (
    <section className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">New Project</h1>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/*Input title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            placeholder="Enter project title"
          />
        </div>
        {/*Input description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            placeholder="Enter project description"
          />
        </div>
        {/*Input status */}
        <div className="mb-5">
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as ProjectStatus)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
          >
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {/*Input date */}
        <div className="mb-6">
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        {error ? (
          <p className="mb-4 text-sm font-medium text-red-600">{error}</p>
        ) : null}
        {/*Create project button */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Create project
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewProjectFormContent;
