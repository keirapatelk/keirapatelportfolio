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
    const description = project.summary.trim() || project.kicker;
    return {
      meta: [
        { title: `${project.title} — Keira Patel` },
        { name: "description", content: description },
        { property: "og:title", content: `${project.title} — Keira Patel` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const isPager = project.slug === "bluetooth-pager";
  const availableImages = isPager ? bluetoothPagerCaseStudy.images.slice(0, 3) : project.images;
  const hasSplitHeader = !isPager && availableImages.length > 1;
  const headerImages = hasSplitHeader ? availableImages.slice(0, 2) : availableImages.slice(0, 1);
  const supportingImages = isPager
    ? availableImages.slice(1, 3)
    : [availableImages[1] ?? availableImages[0], availableImages[0]];
  const overview = isPager
    ? bluetoothPagerCaseStudy.overview
    : project.sections.objective ?? project.summary;

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

        <header className="relative pb-10 pt-10 sm:pb-14">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-4 hidden h-32 w-auto rotate-90 opacity-30 sm:block"
          />
          <p className="font-mono text-xs uppercase text-accent">
            {project.year} · {project.role}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.kicker}
          </p>
        </header>

        <div className={hasSplitHeader ? "grid gap-4 sm:grid-cols-2" : "grid"}>
          {headerImages.map((image, index) => (
            <ProjectFigure
              key={`${image.src}-header-${index}`}
              image={image}
              number={index + 1}
              shape={hasSplitHeader ? "square" : "wide"}
            />
          ))}
        </div>

        <section className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <CaseStudyLabel>Tech Stack</CaseStudyLabel>
            <p className="mt-4 text-sm leading-7 text-foreground/85">
              {project.stack.join(" • ")}
            </p>
          </div>
          <div>
            <CaseStudyLabel>Overview</CaseStudyLabel>
            <p className="mt-4 text-base leading-7 text-foreground/85">{overview}</p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-border py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <CaseStudyLabel>Objective</CaseStudyLabel>
            <p className="mt-6 text-base leading-7 text-foreground/85">
              {project.sections.objective ?? project.kicker}
            </p>
          </div>

          <div>
            <CaseStudyLabel>Challenges &amp; Solutions</CaseStudyLabel>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {project.sections.pairs?.map((pair, index) => (
                <div
                  key={`${pair.challenge}-${index}`}
                  className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase text-accent">Challenge 0{index + 1}</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/85">{pair.challenge}</p>
                  </div>
                  <span className="self-center text-accent" aria-hidden>
                    <span className="hidden sm:inline">→</span>
                    <span className="sm:hidden">↓</span>
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase text-accent">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/85">{pair.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-4 py-10 sm:grid-cols-2 sm:py-14">
          {supportingImages.map((image, index) => (
            <ProjectFigure
              key={`${image.src}-support-${index}`}
              image={image}
              number={headerImages.length + index + 1}
              shape="square"
            />
          ))}
        </div>

        {isPager ? (
          <PagerDetails />
        ) : (
          <section className="border-y border-border py-12">
            <CaseStudyLabel>Results</CaseStudyLabel>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground/85">
              {project.sections.results}
            </p>
          </section>
        )}

        <section className="relative py-10">
          <img
            src={circuitBranch.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-4 right-2 hidden h-24 w-auto rotate-90 opacity-20 sm:block"
          />
          <p className="font-mono text-xs uppercase text-muted-foreground">Next project</p>
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="mt-2 inline-block font-display text-2xl font-semibold hover:text-accent"
          >
            {nextProject.title} →
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}

function ProjectFigure({
  image,
  number,
  shape,
}: {
  image: { src: string; alt: string };
  number: number;
  shape: "wide" | "square";
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-surface">
      <img
        src={image.src}
        alt={image.alt}
        loading={number === 1 ? "eager" : "lazy"}
        className={`${shape === "wide" ? "aspect-[16/7]" : "aspect-[4/3]"} h-full w-full object-cover`}
      />
      <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] uppercase text-muted-foreground">
        {String(number).padStart(2, "0")} · {image.alt}
      </figcaption>
    </figure>
  );
}

function PagerDetails() {
  const study = bluetoothPagerCaseStudy;

  return (
    <section className="grid gap-x-16 gap-y-12 border-y border-border py-12 md:grid-cols-2">
      <CaseStudySection title="Power Optimization">{study.powerOptimization}</CaseStudySection>
      <CaseStudySection title="Custom PCB Design">{study.customPcb}</CaseStudySection>
      <CaseStudySection title="User Interface & Interaction">{study.interaction}</CaseStudySection>
      <div>
        <CaseStudyLabel>What I Learned</CaseStudyLabel>
        <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/85">
          {study.learned.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
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

function ProjectNotFound() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-semibold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">That project doesn't exist.</p>
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