import Link from "next/link";


export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/new-project"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              New Project
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}