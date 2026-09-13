import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { featuredProjects, otherProjects, type Project } from "@/lib/projects";
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
            <p className="mt-3 ml-8 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground lg:ml-0 lg:mr-10">
              Project Portfolio
            </p>
          </div>
        </div>

      </section>

      <main className="mx-auto max-w-6xl px-6">
        {/* Collage */}
        <section className="pt-4 pb-14">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <Link
              to="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              See all →
            </Link>
          </div>
          <HomeProjectGrid items={featuredProjects()} />
        </section>

        <section className="pb-24">
          <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight">
            Projects
          </h2>
          <HomeProjectGrid items={otherProjects()} />
        </section>

        <section className="pb-16">
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
            About Me
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Third-year electrical engineering major with an economics minor at
              UC Davis. I like small, quiet electronics — PCBs you can hold in
              one hand, FPGAs that do one thing well, and hardware that feels
              considered.
            </p>
            <p>
              Off the bench I'm usually near the water, running slow, or reading
              about semiconductor history. Above is a small collage of things
              I've built recently — click one to read more.
            </p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
