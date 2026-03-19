import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-6">
      <div className="mb-8 border-b border-slate-200 pb-3" >
        <h2 className="pb-2 text-2xl ml-2 font-bold text-slate-900">Logo</h2>
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