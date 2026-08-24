"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedLogo } from "@/components/branding/AnimatedLogo";
import { siteNavItems } from "@/lib/routes";

export function SiteNavigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={isHome ? "site-header site-header--home" : "site-header"}>
      <Link className="site-logo" href="/" aria-label="Leigh Salvage home">
        <AnimatedLogo />
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="site-nav-list">
          {siteNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  className="site-nav-link"
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
