import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  bluetoothPagerCaseStudy,
  getProject,
  projects,
  type Project,
} from "@/lib/projects";

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
  const list = projects.filter((item) => item.visible !== false);
  const projectIndex = list.findIndex((item) => item.slug === project.slug);
  const nextProject = list[(projectIndex + 1) % list.length];
  const isPager = project.slug === "bluetooth-pager";
  const availableImages = isPager ? bluetoothPagerCaseStudy.images.slice(0, 3) : project.images;
  const inferredHeaderMode = project.images.length > 1 ? "split" : "wide";
  const headerMode = isPager ? "wide" : project.headerMode ?? inferredHeaderMode;
  const hasSplitHeader = headerMode === "split";
  const headerImages = hasSplitHeader ? availableImages.slice(0, 2) : availableImages.slice(0, 1);
  const supportingImages = hasSplitHeader
    ? availableImages.slice(2, 4)
    : availableImages.slice(1, 3);
  const overview = isPager
    ? bluetoothPagerCaseStudy.overview
    : project.sections.overview ?? project.summary;


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

        <header className="pb-8 pt-8 sm:pb-10">
          <p className="font-mono text-xs uppercase text-accent">
            {project.year} · {project.role}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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

        <section className="grid gap-6 border-b border-border py-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          <div>
            <CaseStudyLabel>Tech Stack</CaseStudyLabel>
            <p className="mt-3 text-sm leading-6 text-foreground/85">
              {project.stack.join(" • ")}
            </p>
          </div>
          <div>
            <CaseStudyLabel>Overview</CaseStudyLabel>
            <p className="mt-3 text-base leading-6 text-foreground/85">{overview}</p>
          </div>
        </section>

        <section className="grid gap-6 border-b border-border py-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div>
            <CaseStudyLabel>Objective</CaseStudyLabel>
            <p className="mt-3 text-base leading-6 text-foreground/85">
              {project.sections.objective ?? project.kicker}
            </p>
          </div>

          <div>
            <CaseStudyLabel>Challenges &amp; Solutions</CaseStudyLabel>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.sections.pairs?.map((pair, index) => (
                <div
                  key={`${pair.challenge}-${index}`}
                  className="rounded-lg border border-border bg-surface/50 p-3"
                >
                  <p className="font-mono text-[10px] uppercase text-accent">0{index + 1}</p>
                  <p className="mt-1 text-sm leading-5 text-foreground/85">{pair.challenge}</p>
                  <div className="my-2 h-px bg-border" aria-hidden />
                  <p className="font-mono text-[10px] uppercase text-accent">Solution</p>
                  <p className="mt-1 text-sm leading-5 text-foreground/85">{pair.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-4 py-8 sm:grid-cols-2 sm:py-10">
          {supportingImages.map((image, index) => (
            <ProjectFigure
              key={`${image.src}-support-${index}`}
              image={image}
              number={headerImages.length + index + 1}
              shape="square"
            />
          ))}
        </div>

        <div className="border-y border-border py-8">
          {project.sections.details && project.sections.details.length > 0 && (
            <section className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {project.sections.details.map((detail) => (
                <CaseStudySection key={detail.title} title={detail.title}>
                  {detail.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-6 text-foreground/85">
                      {paragraph}
                    </p>
                  ))}
                </CaseStudySection>
              ))}
            </section>
          )}

          {isPager ? (
            <PagerDetails
              className={
                project.sections.details && project.sections.details.length > 0
                  ? "border-t border-border pt-8"
                  : undefined
              }
            />
          ) : (
            <section
              className={
                project.sections.details && project.sections.details.length > 0
                  ? "border-t border-border pt-8"
                  : undefined
              }
            >
              <CaseStudyLabel>Results</CaseStudyLabel>
              <p className="mt-3 max-w-3xl text-base leading-6 text-foreground/85">
                {project.sections.results}
              </p>
            </section>
          )}
        </div>


        <section className="py-8">
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
      <figcaption className="border-t border-border px-3 py-2 font-mono text-[11px] uppercase text-muted-foreground">
        {String(number).padStart(2, "0")} · {image.alt}
      </figcaption>
    </figure>
  );
}

function PagerDetails({ className }: { className?: string }) {
  const study = bluetoothPagerCaseStudy;

  return (
    <section
      className={`grid gap-x-10 gap-y-8 md:grid-cols-2 ${className ?? ""}`}
    >
      <CaseStudySection title="Power Optimization">{study.powerOptimization}</CaseStudySection>
      <CaseStudySection title="Custom PCB Design">{study.customPcb}</CaseStudySection>
      <CaseStudySection title="User Interface & Interaction">{study.interaction}</CaseStudySection>
      <div>
        <CaseStudyLabel>What I Learned</CaseStudyLabel>
        <div className="mt-3 space-y-2 text-sm leading-6 text-foreground/85">
          {study.learned.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}


function CaseStudyLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold sm:text-xl">{children}</h2>;
}

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <CaseStudyLabel>{title}</CaseStudyLabel>
      <div className="mt-3 space-y-2 text-sm leading-6 text-foreground/85">{children}</div>
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