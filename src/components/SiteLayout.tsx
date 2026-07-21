import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 text-sm">
        <Link to="/" className="font-display font-semibold tracking-tight">
          Keira Patel
        </Link>
        <nav className="flex items-center gap-6 text-muted-foreground">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/projects"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </header>

      {children ?? <Outlet />}

      <footer className="mt-24 border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Keira Patel</p>
          <p>Davis, CA · keipatel@ucdavis.edu</p>
        </div>
      </footer>
    </div>
  );
}
