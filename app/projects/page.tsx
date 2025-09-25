import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl 2xl:max-w-7xl mx-auto px-6">
      {/* Lijevi stupac – isti raster kao na početnoj */}
      <div className="lg:col-span-7">
        <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Projects
        </h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="block transition-opacity duration-200 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                <h2 className="text-lg md:text-xl text-black dark:text-white">
                  {project.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desni “prazan” stupac za poravnanje kao na homepageu */}
      <div className="hidden lg:block lg:col-span-5" />
    </section>

  );
}
