import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Keira Patel" },
      {
        name: "description",
        content: "Get in touch with Keira Patel.",
      },
      { property: "og:title", content: "Contact — Keira Patel" },
      {
        property: "og:description",
        content: "Get in touch with Keira Patel.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-4xl px-6">
        <section className="pt-20 pb-16">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Contact
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Get in touch.
          </h1>

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:keipatel@ucdavis.edu"
                className="mt-2 inline-block font-display text-2xl font-semibold tracking-tight hover:text-accent sm:text-3xl"
              >
                keipatel@ucdavis.edu
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                About
              </p>
              <p className="mt-2 text-lg">Third-year Electrical Engineering student at UC Davis.</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/keira-patel"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-lg hover:text-accent"
              >
                linkedin.com/in/keira-patel
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
