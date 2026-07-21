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
            Say hello.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            The fastest way to reach me is email. I read everything, and reply
            to most within a few days.
          </p>

          <a
            href="mailto:keira@example.com"
            className="mt-10 inline-block font-display text-3xl font-semibold tracking-tight hover:text-accent sm:text-4xl"
          >
            keira@example.com
          </a>

          <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-1">Davis, CA</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Elsewhere
              </dt>
              <dd className="mt-1 flex gap-4">
                <a href="#" className="hover:text-accent">GitHub</a>
                <a href="#" className="hover:text-accent">LinkedIn</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Résumé
              </dt>
              <dd className="mt-1">
                <a href="#" className="hover:text-accent">Available on request</a>
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </SiteLayout>
  );
}
