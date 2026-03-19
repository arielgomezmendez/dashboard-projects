import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className=" w-full md:w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-6">
      <div className="mb-8 border-b border-slate-200 pb-3" >
        <Image
            src="/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-700"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/new-project"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-700"
            >
              New Project
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}