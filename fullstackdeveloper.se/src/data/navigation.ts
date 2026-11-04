import { profile } from "@/data/profile";

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

/** Shared by header and footer so both always list the same pages. */
export const siteNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/ats", label: "ATS" },
  { href: profile.github, label: "GitHub", external: true },
  { href: "/contact", label: "Contact" },
];
