"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="max-w-3xl">
      <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mb-6 text-slate-600">
          We couldn&apos;t load this project detail. Please try again.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
}
