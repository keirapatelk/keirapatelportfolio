import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  bluetoothPagerCaseStudy,
  getProject,
  projects,
  type Project,
} from "@/lib/projects";
import circuitBranch from "@/assets/circuit-branch.png.asset.json";

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
         { property: "og:type", content: "website" },
         { name: "twitter:card", content: "summary_large_image" },
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

  if (p.slug === "bluetooth-pager") {
    return <BluetoothPagerDetail project={p} next={next} />;
  }

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

        <section className="relative pt-10 pb-10">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-6 hidden h-32 w-auto rotate-90 opacity-30 sm:block"
          />
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


        <section className="grid grid-cols-1 gap-8 border-y border-border py-12 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-8 content-start">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{p.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Tech Stack
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
            {p.sections.objective && (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Objective
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground/85">
                  {p.sections.objective}
                </dd>
              </div>
            )}
            {p.sections.results && (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Results
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground/85">
                  {p.sections.results}
                </dd>
              </div>
            )}
          </div>

          {p.sections.pairs && p.sections.pairs.length > 0 && (
            <div>
              <SectionLabel>Challenges & Solutions</SectionLabel>
              <div className="mt-5 grid gap-5">
                {p.sections.pairs.map((cs, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-6"
                  >
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {cs.challenge}
                    </p>
                    <div className="flex items-center justify-center sm:h-full">
                      <span className="hidden text-lg text-accent sm:inline-block">→</span>
                      <span className="text-lg text-accent sm:hidden">↓</span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {cs.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="relative border-t border-border py-10">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-2 bottom-4 hidden h-24 w-auto rotate-90 opacity-20 sm:block"
          />
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

function BluetoothPagerDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const study = bluetoothPagerCaseStudy;

  return (
    <SiteLayout>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10">
          <Link
            to="/projects"
            className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All projects
          </Link>
        </div>

        <header className="relative border-b border-border pb-10 pt-10 sm:pb-14">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-4 hidden h-32 w-auto rotate-90 opacity-30 sm:block"
          />
          <p className="font-mono text-xs uppercase text-accent">{project.year} · Embedded systems</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.kicker}
          </p>
        </header>

        <section className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <CaseStudyLabel>Tech Stack</CaseStudyLabel>
            <p className="mt-4 text-sm leading-7 text-foreground/85">
              {project.stack.join(" • ")}
            </p>
          </div>
          <div>
            <CaseStudyLabel>Overview</CaseStudyLabel>
            <p className="mt-4 text-base leading-7 text-foreground/85">{study.overview}</p>
          </div>
        </section>

        <figure className="my-10 overflow-hidden rounded-lg border border-border bg-surface sm:my-14">
          <img
            src={study.images[0].src}
            alt={study.images[0].alt}
            className="aspect-[16/7] h-full w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase text-muted-foreground">
            01 · Transmitter and receiver system
          </figcaption>
        </figure>

        <section className="grid gap-10 border-y border-border py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <CaseStudyLabel>Design Constraints &amp; Specifications</CaseStudyLabel>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {study.constraints.map((constraint, index) => (
                <li key={constraint} className="flex gap-4 py-4 text-sm text-foreground/85">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  {constraint}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CaseStudyLabel>Communication &amp; ACK Architecture</CaseStudyLabel>
            <div className="mt-6 space-y-5 text-base leading-7 text-foreground/85">
              {study.ackArchitecture.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <div className="grid gap-4 py-10 sm:grid-cols-2 sm:py-14">
          {study.images.slice(1, 3).map((image, index) => (
            <figure key={image.alt} className="overflow-hidden rounded-lg border border-border bg-surface">
              <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover" />
              <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase text-muted-foreground">
                0{index + 2} · {index === 0 ? "Custom board layout" : "Hardware detail"}
              </figcaption>
            </figure>
          ))}
        </div>

        <section className="grid gap-x-16 gap-y-12 border-y border-border py-12 md:grid-cols-2">
          <CaseStudySection title="Power Optimization">{study.powerOptimization}</CaseStudySection>
          <CaseStudySection title="Custom PCB Design">{study.customPcb}</CaseStudySection>
          <CaseStudySection title="User Interface & Interaction">{study.interaction}</CaseStudySection>
          <div>
            <CaseStudyLabel>What I Learned</CaseStudyLabel>
            <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/85">
              {study.learned.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <figure className="my-10 overflow-hidden rounded-lg border border-border bg-surface sm:my-14">
          <img
            src={study.images[3].src}
            alt={study.images[3].alt}
            className="aspect-[16/7] h-full w-full object-cover object-bottom"
          />
          <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase text-muted-foreground">
            04 · Completed pager system
          </figcaption>
        </figure>

        <section className="relative border-t border-border py-10">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-4 right-2 hidden h-24 w-auto rotate-90 opacity-20 sm:block"
          />
          <p className="font-mono text-xs uppercase text-muted-foreground">Next project</p>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-2 inline-block font-display text-2xl font-semibold hover:text-accent"
          >
            {next.title} →
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}

function CaseStudyLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl font-semibold sm:text-2xl">{children}</h2>;
}

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <CaseStudyLabel>{title}</CaseStudyLabel>
      <p className="mt-5 text-sm leading-7 text-foreground/85">{children}</p>
    </div>
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
