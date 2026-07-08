import { createFileRoute } from "@tanstack/react-router";
import pagerImg from "@/assets/project-pager.jpg";
import fpgaImg from "@/assets/project-fpga.jpg";
import musicImg from "@/assets/project-music.jpg";
import oceanImg from "@/assets/hero-ocean.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keira Patel — Electrical Engineer & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Keira Patel, third-year electrical engineering major with an economics minor at UC Davis. PCBs, FPGAs, and things that make sound.",
      },
      { property: "og:title", content: "Keira Patel — Electrical Engineer & Builder" },
      {
        property: "og:description",
        content:
          "Third-year EE at UC Davis. Bluetooth PCB pagers, FPGA projects, and a handmade music player.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

type Project = {
  index: string;
  title: string;
  kicker: string;
  year: string;
  role: string;
  stack: string[];
  body: string[];
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Bluetooth PCB Pager",
    kicker: "A pocket-sized message device, from schematic to solder",
    year: "2025",
    role: "Hardware & firmware",
    stack: ["KiCad", "nRF52", "C", "BLE", "Reflow"],
    body: [
      "Designed a two-layer PCB around an nRF52 module with a low-power e-ink display and a haptic driver. Every part was hand-picked for a 30-day battery target.",
      "Wrote the BLE service and a small companion app that lets a friend send a short message; the pager buzzes, then holds the note on-screen until you dismiss it.",
    ],
    image: pagerImg,
    imageAlt: "Custom Bluetooth pager PCB resting on light blue linen.",
  },
  {
    index: "02",
    title: "FPGA Signal Playground",
    kicker: "Learning digital design by building it in Verilog",
    year: "2024",
    role: "RTL & verification",
    stack: ["Verilog", "Vivado", "Artix-7", "UART", "Testbenches"],
    body: [
      "A rolling set of FPGA experiments — from a pipelined UART to a small audio FIR filter — built to internalize how the pieces of a real datapath fit together.",
      "Every module ships with a self-checking testbench. Simulating before flashing has saved me more hours than I can count.",
    ],
    image: fpgaImg,
    imageAlt: "FPGA development board glowing with blue LEDs in dim light.",
  },
  {
    index: "03",
    title: "Handheld Music Player",
    kicker: "One dial, one screen, one afternoon of songs",
    year: "2024",
    role: "End-to-end build",
    stack: ["ESP32", "I²S DAC", "Fusion 360", "3D print"],
    body: [
      "A tiny music player with a rotary encoder and a 1.3\" screen. FLAC decoding on an ESP32, driven into a PCM5102 DAC, wrapped in a machined-feeling printed shell.",
      "The goal wasn't to replace a phone — it was to build something that only does one thing, and does it calmly.",
    ],
    image: musicImg,
    imageAlt: "Handheld music player with a round dial on pale blue paper.",
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 pt-8 text-sm">
        <span className="font-display font-semibold tracking-tight">Keira Patel</span>
        <nav className="flex items-center gap-6 text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a
            href="mailto:keira@example.com"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-6 pt-24 pb-20">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          Portfolio · 2026
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
          I build small,
          <br />
          <span className="text-accent">quiet electronics</span>
          <br />
          that do one thing well.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Keira Patel — third-year electrical engineering major, economics minor, at UC Davis.
          Somewhere between soldering irons and spreadsheets. Currently curious about
          low-power radios, tactile interfaces, and how good hardware feels in the hand.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-deep"
          >
            See selected work
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:keira@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* Ocean divider */}
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="animate-tide overflow-hidden rounded-2xl">
          <img
            src={oceanImg}
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            className="h-40 w-full object-cover sm:h-56"
          />
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-3xl px-6 pt-24">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Three pieces
          </span>
        </div>

        <ol className="space-y-28">
          {projects.map((p) => (
            <li key={p.index} className="group">
              <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="text-accent">{p.index}</span>
                <span className="h-px flex-1 bg-border" />
                <span>{p.year}</span>
              </div>

              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-3 text-lg text-muted-foreground">{p.kicker}</p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-[10rem_1fr]">
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
                          className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-foreground"
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
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-32">
        <div className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          About
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Engineering with a soft spot for the market it lands in.
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm studying electrical engineering at UC Davis with an economics minor.
            The EE side keeps me honest about physics; the econ side keeps me honest
            about who a thing is actually for.
          </p>
          <p>
            Off the bench, I'm usually near the water, running slow, or reading about
            semiconductor history. I like teams that ship small things carefully.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studying
            </dt>
            <dd className="mt-1">EE, Econ minor</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              At
            </dt>
            <dd className="mt-1">UC Davis</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Year
            </dt>
            <dd className="mt-1">Third year</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Based
            </dt>
            <dd className="mt-1">Davis, CA</dd>
          </div>
        </dl>
      </section>

      {/* Contact / footer */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Get in touch
            </p>
            <a
              href="mailto:keira@example.com"
              className="mt-3 inline-block font-display text-3xl font-semibold tracking-tight hover:text-accent sm:text-4xl"
            >
              keira@example.com
            </a>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
            <div className="flex gap-5">
              <a href="#" className="hover:text-foreground">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground">
                Résumé
              </a>
            </div>
            <p>© {new Date().getFullYear()} Keira Patel</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
