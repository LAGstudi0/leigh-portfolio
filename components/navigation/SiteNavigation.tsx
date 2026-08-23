import Link from "next/link";
import { siteNavItems } from "@/lib/routes";

export function SiteNavigation() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/" aria-label="Leigh Salvage home">
        Leigh Salvage
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="site-nav-list">
          {siteNavItems.map((item) => (
            <li key={item.href}>
              <Link className="site-nav-link" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
