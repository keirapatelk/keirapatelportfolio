import pagerImg from "@/assets/project-pager.jpg";
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
