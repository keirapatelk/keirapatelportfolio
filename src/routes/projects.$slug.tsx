import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Keira Patel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Keira Patel` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} — Keira Patel` },
        { property: "og:description", content: project.summary },
        { property: "og:image", content: project.image },
        { name: "twitter:image", content: project.image },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <SiteLayout>
      <main className="mx-auto max-w-3xl px-6">
        <div className="pt-10">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All projects
          </Link>
        </div>

        <section className="pt-10 pb-10">
          <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span className="text-accent">{p.year}</span>
            <span className="h-px flex-1 bg-border" />
            <span>{p.role}</span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.kicker}</p>
        </section>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={p.image}
            alt={p.imageAlt}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="grid gap-8 py-12 sm:grid-cols-[10rem_1fr]">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1">{p.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Stack
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <div className="space-y-4 text-base leading-relaxed text-foreground/85">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Next project
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-2 inline-block font-display text-2xl font-semibold tracking-tight hover:text-accent"
          >
            {next.title} →
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}

function ProjectNotFound() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Project not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          That project doesn't exist.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-deep"
        >
          Back to projects
        </Link>
      </main>
    </SiteLayout>
  );
}
