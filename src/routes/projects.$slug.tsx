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
      <main className="mx-auto max-w-5xl px-6">
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

        <div
          className={
            p.images.length === 1
              ? "grid grid-cols-1 gap-4"
              : "grid grid-cols-1 gap-4 sm:grid-cols-2"
          }
        >
          {p.images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border border-border bg-surface ${
                p.images.length === 1 ? "aspect-[11/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
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
          <div className="space-y-10 text-base leading-relaxed text-foreground/85">
            {p.sections.objective && (
              <div>
                <SectionLabel>Objective</SectionLabel>
                <p className="mt-3">{p.sections.objective}</p>
              </div>
            )}

            {p.sections.pairs && p.sections.pairs.length > 0 && (
              <div>
                <SectionLabel>Challenges & Solutions</SectionLabel>
                <div className="mt-5 grid gap-5">
                  {p.sections.pairs.map((cs, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-6"
                    >
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          Challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                          {cs.challenge}
                        </p>
                      </div>
                      <div className="flex items-center justify-center sm:h-full">
                        <span className="hidden text-lg text-accent sm:inline-block">→</span>
                        <span className="text-lg text-accent sm:hidden">↓</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                          {cs.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {p.sections.results && (
              <div>
                <SectionLabel>Results</SectionLabel>
                <p className="mt-3">{p.sections.results}</p>
              </div>
            )}
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

function SectionLabel({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <h2
      className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
        tone === "accent" ? "text-accent" : "text-foreground"
      }`}
    >
      {children}
    </h2>
  );
}

function ProjectNotFound() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
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
