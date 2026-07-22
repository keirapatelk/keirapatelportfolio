import pagerImg from "@/assets/bluetoothPagerPhoto.jpg";
import fpgaImg from "@/assets/fpgaDiceGame.png";
import fpgaDetailImg from "@/assets/fpgaQuartus.png";
import musicImg from "@/assets/project-music-player.jpg";
import musicDetailImg from "@/assets/project-music-player-detail.jpg";
import mammotenImg from "@/assets/project-mammoten.jpg";
import mammotenDetailImg from "@/assets/project-mammoten-detail.jpg";
import waterPoloImg from "@/assets/project-water-polo.jpg";
import waterPoloDetailImg from "@/assets/project-water-polo-detail.jpg";
import smogImg from "@/assets/project-smog.jpg";
import smogDetailImg from "@/assets/project-smog-detail.jpg";
import pigGameImg from "@/assets/project-pig-game.jpg";
import pigGameDetailImg from "@/assets/project-pig-game-detail.jpg";
import wheelchairImg from "@/assets/project-wheelchair-restraint.jpg";
import wheelchairDetailImg from "@/assets/project-wheelchair-restraint-detail.jpg";
import watchImg from "@/assets/project-watch-adapter.jpg";
import watchDetailImg from "@/assets/project-watch-adapter-detail.jpg";
import pingPongImg from "@/assets/project-ping-pong.jpg";
import pingPongDetailImg from "@/assets/project-ping-pong-detail.jpg";


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
    title: "PCB Bluetooth Pager",
    kicker: "A pocket-sized message device, schematic to solder.",
    year: "2025",
    role: "Hardware & firmware",
    stack: ["ESP32", "SPI", "C++", "Altium Designer", "Arduino IDE"],
    summary: "Custom two-layer PCB with an e-ink display and BLE messaging.",
    body: [
      "Designed a two-layer PCB around an nRF52 module with a low-power e-ink display and a haptic driver. Every part was hand-picked for a 30-day battery target.",
      "Wrote the BLE service and a small companion app that lets a friend send a short message; the pager buzzes, then holds the note on-screen until you dismiss it.",
    ],
    image: pagerImg,
    imageAlt: "Custom Bluetooth pager PCB on light blue linen.",
    images: [
      { src: pagerImg, alt: "Custom Bluetooth pager PCB on light blue linen." },
    ],

  },

  {
    slug: "fpga-playground",
    title: "FPGA Dice Game",
    kicker: "Learning digital design by building it in Verilog.",
    year: "2024",
    role: "RTL & verification",
    stack: ["Quartus Prime", "Intel DE10-Lite", "Mealy FSM", "Karnaugh Maps", "Digital Logic"],
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
    title: "Embedded Audio Player",
    kicker: "One dial, one screen, one afternoon of songs.",
    year: "2024",
    role: "End-to-end build",
    stack: ["ESP32", "I²S DAC", "I2C", "SPI", "Interrupts", "State Machine"],
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
    title: "MammoTEN Vibecoded Website",
    kicker: "A vibecoded marketing site built fast and loose.",
    year: "2025",
    role: "Design & build",
    stack: ["React", "Tailwind", "Vite"],
    summary: "A vibecoded website for Mammoten — fast iteration, clean feel.",
    body: [
      "Built the Mammoten site in a single vibecoded sprint — going from a rough moodboard to a shipped marketing page in an afternoon.",
      "The goal was to lean into intuition over process: pick fonts that felt right, let the copy breathe, and ship before second-guessing it.",
    ],
    image: mammotenImg,
    imageAlt: "Mammoten website preview.",
    images: [
      { src: mammotenImg, alt: "Mammoten website preview." },
      { src: mammotenDetailImg, alt: "Mammoten website detail view." },
    ],
  },
  {
    slug: "asa-water-polo-tracker",
    title: "Computer Vision Water Polo Tracker",
    kicker: "Live stat tracking for UC Davis water polo.",
    year: "2025",
    role: "Software & analytics",
    stack: ["Python", "React", "PostgreSQL", "OpenCV"],
    summary: "A live water polo stat-tracking tool built with Aggie Sports Analytics.",
    body: [
      "Worked with the Aggie Sports Analytics club to build a live water polo stat tracker — logging shots, saves, exclusions, and possession in real time.",
      "The bigger challenge was turning raw event logs into something coaches could actually read on the pool deck between quarters.",
    ],
    image: waterPoloImg,
    imageAlt: "Water polo analytics dashboard.",
    images: [
      { src: waterPoloImg, alt: "Water polo analytics dashboard." },
      { src: waterPoloDetailImg, alt: "Stat tracking interface detail." },
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
    image: smogImg,
    imageAlt: "Smog testing equipment.",
    images: [
      { src: smogImg, alt: "Smog testing equipment." },
      { src: smogDetailImg, alt: "Diagnostic tool close-up." },
    ],
  },
  {
    slug: "pig-dice-game",
    title: "MATLAB Online PIG Game",
    kicker: "A classic risk-it-or-bank-it dice game.",
    year: "2023",
    role: "Software",
    stack: ["MATLAB", "ThingSpeak", "Online Gameplay", "MATLAB App Designer"],
    summary: "An implementation of the PIG dice game with a simple AI opponent.",
    body: [
      "Built the classic PIG dice game as a small programming exercise — roll to build a turn score, but a 1 wipes it out.",
      "Added a lightweight strategy opponent that decides when to bank based on the current score gap, which turned out to be a fun little decision-theory rabbit hole.",
    ],
    image: pigGameImg,
    imageAlt: "PIG dice game screenshot.",
    images: [
      { src: pigGameImg, alt: "PIG dice game screenshot." },
      { src: pigGameDetailImg, alt: "Game logic detail." },
    ],
  },
  {
    slug: "wheelchair-restraint",
    title: "CAD Wheelchair Restraint System",
    kicker: "A safer, faster restraint mechanism.",
    year: "2024",
    role: "Mechanical design",
    stack: ["Fusion 360", "Arduino IDE", "Bambu Studio", "AutoCAD", "Laser Cutting"],
    summary: "A prototype restraint system designed for quicker, safer wheelchair securement.",
    body: [
      "Designed a wheelchair restraint prototype aimed at cutting the time it takes to secure a chair in a vehicle without sacrificing safety.",
      "The design went through several iterations informed by user interviews — the final version prioritized one-handed operation and clear tactile feedback when locked.",
    ],
    image: wheelchairImg,
    imageAlt: "Wheelchair restraint prototype.",
    images: [
      { src: wheelchairImg, alt: "Wheelchair restraint prototype." },
      { src: wheelchairDetailImg, alt: "Restraint mechanism detail." },
    ],
  },
  {
    slug: "watch-adapter",
    title: "Watch & Sensor Adapter",
    kicker: "A tiny part to bridge two incompatible bands.",
    year: "2024",
    role: "CAD & print",
    stack: ["Fusion 360", "Bambu Studio"],
    summary: "A 3D printed adapter to fit a non-standard band to a watch case.",
    body: [
      "Modeled and printed a small adapter to fit a band I liked onto a watch case it wasn't made for. Most of the work was in the tolerances — the spring bar pockets had to be right within a tenth of a millimeter.",
      "It's the kind of project that takes an evening and quietly makes something you use every day better.",
    ],
    image: watchImg,
    imageAlt: "3D printed watch adapter.",
    images: [
      { src: watchImg, alt: "3D printed watch adapter." },
      { src: watchDetailImg, alt: "Adapter fit detail." },
    ],
  },
  {
    slug: "ping-pong-game",
    title: "TI-MSP Ping Pong ",
    kicker: "Pong on a microcontroller with real buttons.",
    year: "2023",
    role: "Firmware & hardware",
    stack: ["C", "TI-MSPEXP430", "Interrupts"],
    summary: "A microcontroller-driven Pong game with a small OLED and physical buttons.",
    body: [
      "Wrote a Pong clone in C for a microcontroller, driving a small OLED and reading two physical buttons per player.",
      "The interesting part was keeping the frame timing steady while polling inputs — a good excuse to learn about hardware timers and interrupt priorities.",
    ],
    image: pingPongImg,
    imageAlt: "Microcontroller Pong game.",
    images: [
      { src: pingPongImg, alt: "Microcontroller Pong game." },
      { src: pingPongDetailImg, alt: "OLED display detail." },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
