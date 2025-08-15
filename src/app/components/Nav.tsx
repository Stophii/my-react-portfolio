"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={active ? "underline underline-offset-6" : "hover:underline"}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="flex gap-6 text-lg">
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/games">Games</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
}