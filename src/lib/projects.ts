import pagerImg from "@/assets/bluetoothPagerPhoto.jpg";
import pagerBoardImg from "@/assets/project-pager.jpg";
import pagerDetailImg from "@/assets/project-pager-detail.jpg";
import fpgaImg from "@/assets/fpgaDiceGame.png";
import fpgaDetailImg from "@/assets/fpgaQuartus.png";
import musicImg from "@/assets/musicPlayer.jpg";
import musicDetailImg from "@/assets/project-music-player-detail.jpg";
import mammotenImg from "@/assets/mammoTENWebsite.png";
import mammotenDetailImg from "@/assets/project-mammoten-detail.jpg";
import waterPoloImg from "@/assets/project-water-polo.jpg";
import waterPoloDetailImg from "@/assets/project-water-polo-detail.jpg";
import smogImg from "@/assets/project-smog.jpg";
import smogDetailImg from "@/assets/project-smog-detail.jpg";
import pigGameImg from "@/assets/pigUI.png";
import pigGameDetailImg from "@/assets/project-pig-game-detail.jpg";
import wheelchairImg from "@/assets/wheelchairPresentation.png";
import wheelchairDetailImg from "@/assets/project-wheelchair-restraint-detail.jpg";
import watchImg from "@/assets/project-watch-adapter.jpg";
import watchDetailImg from "@/assets/project-watch-adapter-detail.jpg";
import pingPongImg from "@/assets/pingPongTIMSP.png";
import pingPongDetailImg from "@/assets/project-ping-pong-detail.jpg";
import ieeeWebsiteImg from "@/assets/ieeeWebsite.png";
import ieeeWebsiteDetailImg from "@/assets/ieeeWebsiteDetail.png";
import portraitPlaceholder from "@/assets/portrait-placeholder.jpg";


export type ChallengeSolution = { challenge: string; solution: string };

export type ProjectSections = {
  overview?: string;
  pairs?: ChallengeSolution[];
  details?: { title: string; paragraphs: string[] }[];
};


export type Project = {
  /** Set to false to hide this project everywhere (its page returns not found). */
  visible?: boolean;
  /** Set to true to show this project in the "Featured projects" section. */
  featured?: boolean;
  /** Header gallery layout: one wide image or two square images side by side. */
  headerMode?: "wide" | "split";
  slug: string;
  title: string;
  kicker: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  sections: ProjectSections;
  image: string;
  imageAlt: string;
  images: { src: string; alt: string }[];
};


export const bluetoothPagerCaseStudy = {
  overview:
    "I fully designed and built a compact wireless pager system consisting of two custom PCBs: a transmitter and a receiver. The system sends one of three predefined messages wirelessly over Bluetooth Low Energy, through walls and across a household.",
  constraints: [
    "Low power consumption",
    "Reliable communication across a household",
    "Successful acknowledgement protocol",
  ],
  ackArchitecture: [
    "I implemented a two-way acknowledgement system so the transmitter can indicate that an alert reached and was processed by the receiver. After receiving and displaying the alert, the receiver automatically sends an ACK back. The transmitter then activates its ACK LED, confirming that the message was successfully displayed.",
    "Each PCB also includes a dedicated connection-status LED. It illuminates once the transmitter and receiver establish a BLE connection, allowing the user to verify that both devices are ready before sending an alert.",
  ],
  powerOptimization:
    "Because the transmitter is mounted outside a doorway, it is battery-powered while the receiver uses continuous power. I implemented ESP32 sleep functionality and Bluetooth Low Energy to reduce idle consumption between messages.",
  customPcb:
    "Both devices were designed as custom two-layer PCBs rather than assembled from development boards. I used Altium Designer to lay out both boards and create the required component footprints. One unusual battery module required a custom schematic symbol, footprint, and pin layout for the transmitter PCB.",
  interaction:
    "The transmitter uses three physical buttons, each mapped to a predefined alert. The receiver displays incoming messages on a 1602A LCD and includes two potentiometers for backlight brightness and text contrast, keeping the display readable in different lighting conditions with an entirely hardware-controlled interface.",
  learned: [
    "This project required me to work across the boundary between hardware and firmware rather than treating them as separate systems.",
    "The most important lesson was that wireless communication is not simply a matter of sending data. A useful embedded system must communicate its own state: whether devices are connected, whether a message was received, and whether the system is operating reliably.",
    "I also gained experience taking a system from individual components and firmware to a custom PCB implementation, including footprint creation, board layout, wireless considerations, power management, and system-level debugging.",
  ],
  images: [
    { src: pagerImg, alt: "Bluetooth pager transmitter and receiver hardware." },
    { src: pagerBoardImg, alt: "Custom Bluetooth pager PCB and components." },
    { src: pagerDetailImg, alt: "Detailed view of the pager electronics." },
  ],
};

export const projects: Project[] = [
  {
    visible: true,
    featured: true,
    slug: "bluetooth-pager",
    title: "PCB Bluetooth Pager",
    kicker: "Mid-range, multilevel household message system made with ESP32.",
    year: "2025",
    role: "Hardware & firmware",
    stack: [
      "ESP32",
      "C++",
      "Altium Designer",
      "SPI",
      "Bluetooth Low Energy (BLE)",
      "2-layer custom PCBs and components",
    ],
    summary: " ",
    sections: {
      pairs: [
        {
          challenge: "Low power consumption — the transmitter runs on a small battery mounted outside a doorway.",
          solution:
            "Implemented ESP32 sleep functionality and used Bluetooth Low Energy (BLE) to keep average current draw low between messages.",
        },
        {
          challenge: "Reliable communication across a household, through walls and between rooms.",
          solution:
            "Optimized antenna placement, minimized device separation, and paired the link with an acknowledgement protocol so dropped messages are visible.",
        },
        {
          challenge: "Successful acknowledgement protocol so the user knows the alert was received.",
          solution:
            "Built a two-way ACK system: the receiver sends an ACK back after displaying the message, and the transmitter lights an ACK LED. A separate connection-status LED on each board confirms the BLE link is ready.",
        },
      ],
},
    image: pagerImg,
    imageAlt: "Custom Bluetooth pager PCB on light blue linen.",
    images: [
      { src: pagerImg, alt: "Custom Bluetooth pager PCB on light blue linen." },
    ],
  },

  {
    visible: true,
    featured: true,
    slug: "fpga-playground",
    title: "FPGA Dice Game",
    kicker: "Learning digital design by building it in Verilog.",
    year: "2024",
    role: "RTL & verification",
    stack: ["Quartus Prime", "Intel DE10-Lite", "Mealy FSM", "Karnaugh Maps", "Digital Logic"],
    summary: "Rolling set of FPGA experiments — UART, FIR filters, and more.",
    sections: {
      pairs: [
        {
          challenge: "Translating game rules into clean synchronous logic.",
          solution:
            "Modeled gameplay as a Mealy FSM with clearly separated state, next-state, and output logic.",
        },
        {
          challenge: "Debouncing physical buttons without adding jitter.",
          solution:
            "Added a small synchronizer and debounce counter so a single press produces a single clean event.",
        },
        {
          challenge: "Catching regressions when tweaking modules.",
          solution:
            "Wrote self-checking testbenches for every module so simulation catches bugs before flashing the board.",
        },
      ],
},
    image: fpgaImg,
    imageAlt: "FPGA development board glowing with blue LEDs.",
    images: [
      { src: fpgaImg, alt: "FPGA development board glowing with blue LEDs." },
      { src: fpgaDetailImg, alt: "FPGA board with a waveform display and Verilog code in the background." },
    ],
  },
  {
    visible: true,
    featured: true,
    headerMode: "split",
    slug: "sound-following-robot",
    title: "Sound Following Robot",
    kicker: "A two-microphone robot that turns and drives toward a sound source.",
    year: "2026",
    role: "Embedded Systems / Signal Processing",
    stack: [
      "TI MSP432 ARM Cortex-M4",
      "C",
      "ADALM 2000 (USB Oscilloscope)",
      "Oscilloscope",
      "Multimeter",
      "LTspice",
      "Scopy",
      "PWM",
    ],
    summary:
      "A sound-following robot built on the TI MSP432 that uses analog and digital filters to locate and drive toward a sound source.",
    sections: {
      overview:
        "In this project, I built a sound following robot that autonomously turns and drives towards a sound source using a two microphone input system. Raw inputs are converted through the analog and digital filters to find and adjust movement towards the sound source’s direction.",
      pairs: [
        {
          challenge: "Reject frequencies outside of the human vocal frequency range.",
          solution:
            "Designed an analog RC filter plus cascaded high-pass and low-pass digital filters in firmware to isolate the vocal passband and ignore external noise such as the robot's own wheels.",
        },
        {
          challenge: "Real-time response using a fixed-rate interrupt-driven control loop.",
          solution:
            "Used a hardware handler to trigger ADC sampling at a fixed rate, averaged the samples, and drove each motor through PWM with Timer_A compare registers for smooth tracking turns.",
        },
        {
          challenge: "Accurate directionality despite mismatched microphone sensitivity.",
          solution:
            "Created a MIC_CALIBRATION variable to scale the left and right microphone amplitudes so the microcontroller could reliably determine the sound source direction.",
        },
      ],
details: [
        {
          title: "Motor Control & Turn Logic",
          paragraphs: [
            "Each motor's direction is controlled through an external H-bridge driver, with GPIO pin pairs setting which way current flows through each motor to determine wheel direction. Speed is controlled independently through PWM, using Timer_A compare registers to set the duty cycle delivered to each wheel.",
            "During normal tracking, the robot performs gradual turns by running both motors forward but at different duty cycles to make one wheel faster than the other. For a full 180° rotation, the robot instead spins around by reversing one motor's direction pins while driving both wheels at equal speed.",
            "The motor control decision-making is determined by the amplitude difference between the right and left side microphones. A strong signal from the left microphone prompts the motors to execute a left-side turn, and vice versa. If there is a significant volume drop across both microphones, the microcontroller assumes the audio source has been moved behind the robot and rotates 180°.",
            "I noticed a microphone sensitivity difference between the left and right side microphones and created a “MIC_CALIBRATION” variable to scale the different sides to the same intensity and ensure the robot could accurately determine the location of the sound source.",
          ],
        },
        {
          title: "Analog & Digital Filter Design",
          paragraphs: [
            "To handle the analog filter, I used a first-order RC circuit with a potentiometer to alter the cutoff frequencies as needed. A simple formula can be used to determine the cutoff frequencies for a given RC circuit, and the resistance across the potentiometer can be found with an oscilloscope. Bode plots were analyzed over the RC circuits to determine that the calculated cutoff frequency was correct by inspecting where the circuit’s power had halved.",
            "For the digital filtering, I used a hardware handler to trigger ADC sampling. These samples were averaged out, and a single value was cascaded into high-pass and low-pass digital filters in firmware using C programming. I debugged digital cutoff frequencies by analyzing Fast Fourier Transform (FFT) graphs and confirming that frequencies outside the passband were sufficiently attenuated.",
            "By designing a passband to isolate the human vocal frequency range, the robot was able to ignore external noise, such as the turning of its own wheels, to ensure directional commands were accurate.",
          ],
        },
        {
          title: "Analog Front-End & Circuit Validation",
          paragraphs: [
            "To make the raw microphone signal readable, I designed a preamplifier circuit to boost the AC signal. Correct resistor and capacitor values were validated in LTspice using circuit building and simulation software to ensure the circuit was behaving correctly. In this circuit, a coupling capacitor is used to pass AC and block DC signals to the op-amp. The op-amp and the resistor circuitry around it then amplify the signal into readable data, ready for digital signal processing.",
          ],
        },
        {
          title: "Debugging & Non-Ideal Inductor Resistance",
          paragraphs: [
            "While performing Scopy oscilloscope readings, I discovered that the voltage over the inductor never reached the 0V threshold. The inductor’s purpose is to keep current continuous; therefore, it has extreme voltage spikes and should act like a ‘wire’ with 0V at times. After discovering this was not the case, I calculated that this was a non-ideal inductor with internal resistance. I determined the resistance using an oscilloscope, and accounted for it while creating RL circuits.",
          ],
        },
      ],
    },
    image: portraitPlaceholder,
    imageAlt: "Sound following robot prototype.",
    images: [
      { src: portraitPlaceholder, alt: "Sound following robot front view." },
      { src: portraitPlaceholder, alt: "Sound following robot microphone and circuit layout." },
      { src: portraitPlaceholder, alt: "Sound following robot motor driver wiring." },
      { src: portraitPlaceholder, alt: "Sound following robot oscilloscope reading." },
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
    sections: {
      pairs: [
        {
          challenge: "Decoding FLAC in real time on a resource-constrained ESP32.",
          solution:
            "Streamed audio into an I²S PCM5102 DAC with a tight buffer loop so playback stays glitch-free.",
        },
        {
          challenge: "Handling encoder input without missing detents.",
          solution:
            "Wired the encoder through interrupts and a small debounce state machine so every click registers exactly once.",
        },
        {
          challenge: "Making the device feel like a real product, not a breadboard.",
          solution:
            "Designed a printed shell around the PCB with recesses for the screen and dial so it feels machined in hand.",
        },
      ],
      results:
        "A pocket player with a 1.3\" screen and a rotary encoder that boots straight into music — no menus, no distractions.",
    },
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
    sections: {
      pairs: [
        {
          challenge: "Choosing a visual direction without a full brand system.",
          solution:
            "Picked typography and spacing that felt right in the moment and committed instead of iterating forever.",
        },
        {
          challenge: "Keeping copy tight while explaining the product.",
          solution:
            "Let the copy breathe with generous whitespace and cut anything that didn't earn its line.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Logging fast-moving events without falling behind play.",
          solution:
            "Built a keyboard-driven event logger so a single operator can tag events with minimal latency.",
        },
        {
          challenge: "Turning raw event logs into something coaches can read between quarters.",
          solution:
            "Aggregated events into a coach-facing dashboard with per-player summaries and possession trends.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Reading intermittent OBD-II fault codes on older vehicles.",
          solution:
            "Cross-referenced live sensor data with freeze-frame data to isolate real faults from noise.",
        },
        {
          challenge: "Connecting classroom circuit theory to greasy real hardware.",
          solution:
            "Traced sensor and actuator signals on real cars to see textbook waveforms show up in the shop.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Syncing turns between two players over the network.",
          solution:
            "Used ThingSpeak channels as a shared state store so each client polls for the current turn.",
        },
        {
          challenge: "Making the AI feel decisive without being trivial.",
          solution:
            "Wrote a scoring heuristic that decides when to bank based on the current lead or deficit.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Existing restraints require two hands and multiple steps.",
          solution:
            "Designed a mechanism prioritized for one-handed operation with fewer discrete steps.",
        },
        {
          challenge: "Users can't always tell when the restraint is fully locked.",
          solution:
            "Added a tactile detent at the locked position so the user feels a clear click when secure.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Spring bar pockets have to be right within a tenth of a millimeter.",
          solution:
            "Iterated on tolerances with test prints until the bars snapped in cleanly with no wiggle.",
        },
        {
          challenge: "The adapter has to disappear visually against the case.",
          solution:
            "Matched fillets and chamfers to the watch case profile so the seam reads as intentional.",
        },
      ],
},
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
    sections: {
      pairs: [
        {
          challenge: "Keeping frame timing steady while polling inputs.",
          solution:
            "Used hardware timers and prioritized interrupts to separate render cadence from input handling.",
        },
        {
          challenge: "Fitting the game loop in limited flash and RAM.",
          solution:
            "Kept the render path tight and reused buffers instead of allocating per frame.",
        },
      ],
},
    image: pingPongImg,
    imageAlt: "Microcontroller Pong game.",
    images: [
      { src: pingPongImg, alt: "Microcontroller Pong game." },
      { src: pingPongDetailImg, alt: "OLED display detail." },
    ],
  },
  {
    slug: "ieee-website-vibecoded",
    title: "IEEE Website Vibecoded",
    kicker: "A club website built with vibe and velocity.",
    year: "2025",
    role: "Design & build",
    stack: ["React", "Tailwind", "Vite"],
    summary: "A vibecoded website for the IEEE student branch — shipped fast, kept clean.",
    sections: {
      pairs: [
        {
          challenge: "Communicating events clearly to new members.",
          solution:
            "Designed bold event cards as the primary content unit so upcoming events are unmissable.",
        },
        {
          challenge: "Making it easy for someone new to actually join.",
          solution:
            "Kept navigation minimal and put a straightforward join path one click away from every page.",
        },
      ],
},
    image: ieeeWebsiteImg,
    imageAlt: "IEEE student branch website preview.",
    images: [
      { src: ieeeWebsiteImg, alt: "IEEE student branch website preview." },
      { src: ieeeWebsiteDetailImg, alt: "IEEE website detail view showing event cards and member join section." },
    ],
  },
];

export function isVisible(p: Project): boolean {
  return p.visible !== false;
}

/** Every project that should show up on the site. */
export const visibleProjects = (): Project[] => projects.filter(isVisible);

/** Projects marked featured: true. */
export const featuredProjects = (): Project[] =>
  visibleProjects().filter((p) => p.featured === true);

/** Visible projects that are not featured. */
export const otherProjects = (): Project[] =>
  visibleProjects().filter((p) => p.featured !== true);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && isVisible(p));
}
