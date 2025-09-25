import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "BSP Lab Projects",
};

export default function Projects() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl px-6 flex flex-col items-center space-y-8 md:space-y-14">
        {/* Naslov i podnaslov */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Projekte
          </h1>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            Izbor aktualnih projekata i alata u izradi.
          </p>
        </div>

        {/* Lista projekata */}
        <div className="w-full space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between 
                         border-b border-neutral-200/20 dark:border-neutral-800/60 pb-3 hover:opacity-80"
            >
              <h2 className="text-lg md:text-xl font-medium group-hover:underline">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-right text-black dark:text-white">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
