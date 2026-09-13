import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { featuredProjects, otherProjects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Keira Patel" },
      {
        name: "description",
        content: "All of Keira Patel's electrical engineering projects.",
      },
      { property: "og:title", content: "Projects — Keira Patel" },
      {
        property: "og:description",
        content: "Hardware and firmware projects by Keira Patel.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-6">
        <section className="pt-20 pb-10">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Projects
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Things I've built.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Click any project to read the full write-up.
          </p>
        </section>

        {featuredProjects().length > 0 && (
          <section className="pb-14">
            <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <ProjectGrid items={featuredProjects()} />
          </section>
        )}

        <section className="pb-24">
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
            Projects
          </h2>
          <ProjectGrid items={otherProjects()} />
        </section>
      </main>
    </SiteLayout>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((p) => (
        <li key={p.slug}>
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface">
              <img
                src={p.image}
                alt={p.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{p.year}</span>
                <span>{p.role}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
