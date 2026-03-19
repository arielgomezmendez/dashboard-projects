"use-client";

interface ProjectFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  return (
    <select
      name="Status"
      id="project-status"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-56 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
    >
      <label
        htmlFor="project-status"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {" "}
        Filter by status
      </label>
      <option value="">All Projects</option>
      <option value="Active">Active</option>
      <option value="Completed">Completed</option>
    </select>
  );
}
