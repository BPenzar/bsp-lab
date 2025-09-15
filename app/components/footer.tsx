"use client";

import React from "react";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ComponentType }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={href} className="opacity-90 hover:opacity-100">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between gap-4 text-[#1C1C1C] dark:text-[#D4D4D4] text-sm">
      <small>
        <time>© {YEAR}</time>{" "}
        <Link href="/" className="no-underline">
          {metaData.title ?? "BSP Lab"}
        </Link>
      </small>
      <SocialLinks />
    </div>
  );
}
