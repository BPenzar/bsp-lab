import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "BSP Lab Projects",
};

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-6 pb-12">

      <h1 className="mt-0 text-center text-4xl md:text-5xl font-semibold tracking-tight">
        Projekte
      </h1>
      <p className="mt-1 text-center text-neutral-600 dark:text-neutral-400">
        Izbor aktualnih projekata i alata u izradi.
      </p>

      <div className="mt-16 space-y-10">
        {projects.map((project, i) => (
          <Link
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between 
                      border-b border-neutral-200/20 dark:border-neutral-800/60 pb-3 hover:opacity-80"
          >
            <h2 className="text-xl font-medium text-blue-400 group-hover:underline">
              {project.title}
            </h2>
            <p className="text-white text-sm sm:text-base text-right">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
