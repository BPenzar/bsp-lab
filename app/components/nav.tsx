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
    <nav className="w-full flex items-center justify-between py-3">
      {/* Left: site title */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-semibold">
          {metaData.title}
        </Link>
      </div>

      {/* Right: nav links, theme switch, contact */}
      <div className="flex flex-row gap-4 items-center">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {name}
          </Link>
        ))}

        <ThemeSwitch />

        <a
          href={socialLinks.email}
          className="text-sm border border-neutral-700 px-3 py-2 rounded-md hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

