export default function NewProjectForm() {
  return (
    <section className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">New Project</h1>
      {/* Form */}
      <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        {/*Create project button */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Create project
          </button>
        </div>
      </form>
    </section>
  );
}
