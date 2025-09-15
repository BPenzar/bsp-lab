import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";
import { socialLinks } from "../lib/config"; // import for mail address

const navItems = {
  "/": { name: "About" },
  "/projects": { name: "Projects" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        {/* Left: site title */}
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold">
            {metaData.title}
          </Link>
        </div>

        {/* Right: nav links, theme switch, contact */}
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}

          {/* Night mode toggle */}
          <ThemeSwitch />

          {/* Contact button (mailto from config) */}
          <a
            href={socialLinks.email}
            className="text-sm text-neutral-100 dark:text-neutral-100 border border-neutral-700 px-3 py-2 rounded-md hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

