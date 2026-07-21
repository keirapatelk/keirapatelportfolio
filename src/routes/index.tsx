import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/projects";
import heroCover from "@/assets/hero-cover.jpg";
import portraitPlaceholder from "@/assets/portrait-placeholder.jpg";

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
      {/* Full-bleed technical hero */}
      <section className="relative mt-8 h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroCover}
          alt="Calm ocean at dawn"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/15 to-background" />

        {/* Full-width technical grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-16 left-4 h-10 w-10 border-t border-l border-accent/30 sm:left-6" />
        <div className="absolute top-16 right-4 h-10 w-10 border-t border-r border-accent/30 sm:right-6" />
        <div className="absolute bottom-20 left-4 h-10 w-10 border-b border-l border-accent/30 sm:left-6" />
        <div className="absolute bottom-20 right-4 h-10 w-10 border-b border-r border-accent/30 sm:right-6" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-center px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:justify-between">
          {/* Tech-framed portrait — offset toward center */}
          <div className="relative lg:ml-16">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border-2 border-background bg-surface shadow-2xl sm:h-44 sm:w-44">
              <img
                src={portraitPlaceholder}
                alt="Portrait of Keira Patel"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Corner bracket accents */}
            <div className="absolute -inset-3 rounded-2xl border border-accent/30" />
            <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-accent" />

            {/* Reticle crosshairs */}
            <div className="absolute top-1/2 -left-6 h-px w-4 bg-accent/50 sm:-left-8 sm:w-6" />
            <div className="absolute top-1/2 -right-6 h-px w-4 bg-accent/50 sm:-right-8 sm:w-6" />
            <div className="absolute left-1/2 -top-6 h-4 w-px bg-accent/50 sm:-top-8 sm:h-6" />
            <div className="absolute left-1/2 -bottom-6 h-4 w-px bg-accent/50 sm:-bottom-8 sm:h-6" />

            {/* Floating labels */}
            <span className="absolute -right-20 top-2 hidden font-mono text-[9px] uppercase tracking-wider text-muted-foreground lg:block">
              UC_DAVIS_EE
            </span>
            <span className="absolute -left-24 bottom-2 hidden font-mono text-[9px] uppercase tracking-wider text-muted-foreground lg:block">
              CORE_LVL_03
            </span>
          </div>

          {/* Title — staggered lines */}
          <div className="mt-10 flex flex-col items-start lg:mt-0 lg:items-end lg:text-right">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Keira Patel
            </h1>
            <p className="mt-3 ml-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:ml-0 lg:mr-10">
              Project Portfolio
            </p>
          </div>
        </div>

        {/* Full-width bottom specs bar */}
        <div className="absolute bottom-0 inset-x-0 border-t border-border/40 bg-background/40 px-4 py-3 backdrop-blur-sm sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 sm:gap-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-accent">01</span> UC_DAVIS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-accent">02</span> ELECTRICAL_ENG
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-accent">03</span> DAVIS_CA
            </span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6">
        <section className="pt-4 pb-16">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
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
