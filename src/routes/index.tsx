import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keira Patel — Electrical Engineering Portfolio" },
      {
        name: "description",
        content:
          "Keira Patel — third-year electrical engineering major at UC Davis. PCBs, FPGAs, and small quiet electronics.",
      },
      { property: "og:title", content: "Keira Patel — Electrical Engineer" },
      {
        property: "og:description",
        content: "Third-year EE at UC Davis. Selected hardware projects.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-4xl px-6">
        {/* Hero / about */}
        <section className="pt-20 pb-16">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Hello
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            I'm Keira Patel.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Third-year electrical engineering major with an economics minor at
              UC Davis. I like small, quiet electronics — PCBs you can hold in
              one hand, FPGAs that do one thing well, and hardware that feels
              considered.
            </p>
            <p>
              Off the bench I'm usually near the water, running slow, or reading
              about semiconductor history. Below is a small collage of things
              I've built recently — click one to read more.
            </p>
          </div>
        </section>

        {/* Collage */}
        <section className="pb-24">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Selected projects
            </h2>
            <Link
              to="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              See all →
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
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
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
}
