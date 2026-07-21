import pagerImg from "@/assets/bluetoothPagerPhoto.jpg";
import pagerDetailImg from "@/assets/project-pager-detail.jpg";
import fpgaImg from "@/assets/project-fpga.jpg";
import fpgaDetailImg from "@/assets/project-fpga-detail.jpg";
import musicImg from "@/assets/project-music.jpg";
import musicDetailImg from "@/assets/project-music-detail.jpg";


export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "bluetooth-pager",
    title: "Bluetooth PCB Pager",
    kicker: "A pocket-sized message device, schematic to solder.",
    year: "2025",
    role: "Hardware & firmware",
    stack: ["KiCad", "nRF52", "C", "BLE", "Reflow"],
    summary: "Custom two-layer PCB with an e-ink display and BLE messaging.",
    body: [
      "Designed a two-layer PCB around an nRF52 module with a low-power e-ink display and a haptic driver. Every part was hand-picked for a 30-day battery target.",
      "Wrote the BLE service and a small companion app that lets a friend send a short message; the pager buzzes, then holds the note on-screen until you dismiss it.",
    ],
    image: pagerImg,
    imageAlt: "Custom Bluetooth pager PCB on light blue linen.",
    images: [
      { src: pagerImg, alt: "Custom Bluetooth pager PCB on light blue linen." },
      { src: pagerDetailImg, alt: "Close-up of the pager's e-ink display and nRF52 module." },
    ],
  },
  {
    slug: "fpga-playground",
    title: "FPGA Signal Playground",
    kicker: "Learning digital design by building it in Verilog.",
    year: "2024",
    role: "RTL & verification",
    stack: ["Verilog", "Vivado", "Artix-7", "UART", "Testbenches"],
    summary: "Rolling set of FPGA experiments — UART, FIR filters, and more.",
    body: [
      "A rolling set of FPGA experiments — from a pipelined UART to a small audio FIR filter — built to internalize how the pieces of a real datapath fit together.",
      "Every module ships with a self-checking testbench. Simulating before flashing has saved me more hours than I can count.",
    ],
    image: fpgaImg,
    imageAlt: "FPGA development board glowing with blue LEDs.",
    images: [
      { src: fpgaImg, alt: "FPGA development board glowing with blue LEDs." },
      { src: fpgaDetailImg, alt: "FPGA board with a waveform display and Verilog code in the background." },
    ],
  },
  {
    slug: "music-player",
    title: "Handheld Music Player",
    kicker: "One dial, one screen, one afternoon of songs.",
    year: "2024",
    role: "End-to-end build",
    stack: ["ESP32", "I²S DAC", "Fusion 360", "3D print"],
    summary: "ESP32-driven FLAC player with a rotary encoder and printed shell.",
    body: [
      "A tiny music player with a rotary encoder and a 1.3\" screen. FLAC decoding on an ESP32, driven into a PCM5102 DAC, wrapped in a machined-feeling printed shell.",
      "The goal wasn't to replace a phone — it was to build something that only does one thing, and does it calmly.",
    ],
    image: musicImg,
    imageAlt: "Handheld music player with a round dial on pale blue paper.",
    images: [
      { src: musicImg, alt: "Handheld music player with a round dial on pale blue paper." },
      { src: musicDetailImg, alt: "Exploded view of the music player showing the internal electronics." },
    ],
  },
  {
    slug: "mammoten-website",
    title: "Mammoten Vibecoded Website",
    kicker: "A vibecoded marketing site built fast and loose.",
    year: "2025",
    role: "Design & build",
    stack: ["React", "Tailwind", "Vite"],
    summary: "A vibecoded website for Mammoten — fast iteration, clean feel.",
    body: [
      "Built the Mammoten site in a single vibecoded sprint — going from a rough moodboard to a shipped marketing page in an afternoon.",
      "The goal was to lean into intuition over process: pick fonts that felt right, let the copy breathe, and ship before second-guessing it.",
    ],
    image: fpgaImg,
    imageAlt: "Mammoten website preview.",
    images: [
      { src: fpgaImg, alt: "Mammoten website preview." },
      { src: fpgaDetailImg, alt: "Mammoten website detail view." },
    ],
  },
  {
    slug: "asa-water-polo-tracker",
    title: "Aggie Sports Analytics Water Polo Tracker",
    kicker: "Live stat tracking for UC Davis water polo.",
    year: "2025",
    role: "Software & analytics",
    stack: ["Python", "React", "Data viz"],
    summary: "A live water polo stat-tracking tool built with Aggie Sports Analytics.",
    body: [
      "Worked with the Aggie Sports Analytics club to build a live water polo stat tracker — logging shots, saves, exclusions, and possession in real time.",
      "The bigger challenge was turning raw event logs into something coaches could actually read on the pool deck between quarters.",
    ],
    image: musicImg,
    imageAlt: "Water polo analytics dashboard.",
    images: [
      { src: musicImg, alt: "Water polo analytics dashboard." },
      { src: musicDetailImg, alt: "Stat tracking interface detail." },
    ],
  },
  {
    slug: "jamboree-smog",
    title: "Jamboree Smog Internship",
    kicker: "Emissions testing and diagnostics in the field.",
    year: "2024",
    role: "Intern",
    stack: ["OBD-II", "Diagnostics", "Field work"],
    summary: "Interned at Jamboree Smog running emissions tests and diagnostics.",
    body: [
      "Spent a summer at Jamboree Smog learning the ins and outs of vehicle emissions testing — OBD-II diagnostics, tailpipe measurements, and the paperwork behind a clean cert.",
      "It was the first time I connected classroom electronics to the greasy, real-world version of the same problem.",
    ],
    image: pagerImg,
    imageAlt: "Smog testing equipment.",
    images: [
      { src: pagerImg, alt: "Smog testing equipment." },
      { src: pagerDetailImg, alt: "Diagnostic tool close-up." },
    ],
  },
  {
    slug: "pig-dice-game",
    title: "PIG Dice Game",
    kicker: "A classic risk-it-or-bank-it dice game.",
    year: "2023",
    role: "Software",
    stack: ["Python", "CLI"],
    summary: "An implementation of the PIG dice game with a simple AI opponent.",
    body: [
      "Built the classic PIG dice game as a small programming exercise — roll to build a turn score, but a 1 wipes it out.",
      "Added a lightweight strategy opponent that decides when to bank based on the current score gap, which turned out to be a fun little decision-theory rabbit hole.",
    ],
    image: fpgaImg,
    imageAlt: "PIG dice game screenshot.",
    images: [
      { src: fpgaImg, alt: "PIG dice game screenshot." },
      { src: fpgaDetailImg, alt: "Game logic detail." },
    ],
  },
  {
    slug: "wheelchair-restraint",
    title: "Wheelchair Restraint System",
    kicker: "A safer, faster restraint mechanism.",
    year: "2024",
    role: "Mechanical design",
    stack: ["CAD", "Prototyping", "Human factors"],
    summary: "A prototype restraint system designed for quicker, safer wheelchair securement.",
    body: [
      "Designed a wheelchair restraint prototype aimed at cutting the time it takes to secure a chair in a vehicle without sacrificing safety.",
      "The design went through several iterations informed by user interviews — the final version prioritized one-handed operation and clear tactile feedback when locked.",
    ],
    image: musicImg,
    imageAlt: "Wheelchair restraint prototype.",
    images: [
      { src: musicImg, alt: "Wheelchair restraint prototype." },
      { src: musicDetailImg, alt: "Restraint mechanism detail." },
    ],
  },
  {
    slug: "watch-adapter",
    title: "3D Printed Watch Adapter",
    kicker: "A tiny part to bridge two incompatible bands.",
    year: "2024",
    role: "CAD & print",
    stack: ["Fusion 360", "FDM", "Tolerancing"],
    summary: "A 3D printed adapter to fit a non-standard band to a watch case.",
    body: [
      "Modeled and printed a small adapter to fit a band I liked onto a watch case it wasn't made for. Most of the work was in the tolerances — the spring bar pockets had to be right within a tenth of a millimeter.",
      "It's the kind of project that takes an evening and quietly makes something you use every day better.",
    ],
    image: pagerImg,
    imageAlt: "3D printed watch adapter.",
    images: [
      { src: pagerImg, alt: "3D printed watch adapter." },
      { src: pagerDetailImg, alt: "Adapter fit detail." },
    ],
  },
  {
    slug: "ping-pong-game",
    title: "Ping Pong Microcontroller Game",
    kicker: "Pong on a microcontroller with real buttons.",
    year: "2023",
    role: "Firmware & hardware",
    stack: ["C", "STM32", "OLED", "Buttons"],
    summary: "A microcontroller-driven Pong game with a small OLED and physical buttons.",
    body: [
      "Wrote a Pong clone in C for a microcontroller, driving a small OLED and reading two physical buttons per player.",
      "The interesting part was keeping the frame timing steady while polling inputs — a good excuse to learn about hardware timers and interrupt priorities.",
    ],
    image: fpgaImg,
    imageAlt: "Microcontroller Pong game.",
    images: [
      { src: fpgaImg, alt: "Microcontroller Pong game." },
      { src: fpgaDetailImg, alt: "OLED display detail." },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
