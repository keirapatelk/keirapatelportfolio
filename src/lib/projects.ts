import pagerImg from "@/assets/bluetoothPagerPhoto.jpg";
import pagerBoardImg from "@/assets/pagerPCBSchematic.png";
import pagerCodeImg from "@/assets/pagerCodeSnip.png";
import fpgaImg from "@/assets/FPGAPic.png";
import fpgaDetailImg from "@/assets/FPGASchematic.png";
import fpgaWideAsset from "@/assets/FPGASimulation.png";
import musicImg from "@/assets/MPimage.jpg";
//import musicDetailImg from "@/assets/MPImg.jpg";
import musicSquareOneImg from "@/assets/MPPCB.jpg";
import musicSquareTwoImg from "@/assets/MPCode.png";
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
import robotImg from "@/assets/SFRImg.png";
import robotSchematic from "@/assets/SFRSpice.png";
import robotOsc from "@/assets/SFROsc.png";
import robotCode from "@/assets/SRCDebugger.png";


export type ChallengeSolution = { challenge: string; solution: string };

export type ProjectSections = {
  overview?: string;
  pairs?: ChallengeSolution[];
  details?: { title: string; paragraphs: string[]; wide?: boolean }[];
};


export type Project = {
  /** Set to false to hide this project everywhere (its page returns not found). */
  visible?: boolean;
  /** Set to true to show this project in the "Featured projects" section. */
  featured?: boolean;
  /** Header gallery layout: one wide image, two square images side by side, or one wide image with two square images below it. */
  headerMode?: "wide" | "split" | "stacked";
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
  /** Optional full-width image rendered below the supporting gallery. */
  wideImage?: { src: string; alt: string };
};


export const bluetoothPagerCaseStudy = {
  overview:
    "In this project, I fully designed and built a compact wireless pager system consisting of two custom PCBs: a transmitter and a receiver. The system allows a user to send one of three predefined messages wirelessly over BLE through walls and across a household.",
  pairs: [
    {
      challenge: "Low power consumption for the wall-mounted transmitter.",
      solution:
        "Used Bluetooth Low Energy and ESP32 sleep functionality to reduce energy use between messages.",
    },
    {
      challenge: "Reliable communication across a household and through walls.",
      solution:
        "Built the system around a stable BLE connection and added dedicated connection-status LEDs so users can confirm both devices are ready before sending an alert.",
    },
    {
      challenge: "A successful acknowledgement protocol between transmitter and receiver.",
      solution:
        "Implemented a two-way ACK system that confirms each alert was received and processed, with an ACK LED on both devices for immediate feedback.",
    },
  ],
  ackArchitecture: [
    "I implemented a two-way acknowledgment system so the transmitter can indicate that an alert reached and was processed by the receiver. After receiving and displaying the alert sent by the transmitter, the receiver automatically sends an ACK back and activates its ACK LED. Upon receiving the ACK from the receiver, the transmitter then activates its ACK LED. The devices automatically acknowledge each other to let both users know they are communicating successfully.",
    "To provide immediate feedback on their wireless connection, each PCB includes a dedicated connection status LED. The LED illuminates once the transmitter and receiver successfully establish a BLE connection, allowing the user to verify that the devices are ready to communicate before sending an alert.",
  ],
  powerOptimization:
    "Since the transmitter is meant to be mounted on the wall, it is designed to be battery-powered, unlike the receiver. Minimizing idle power consumption was an important design consideration for the transmitter. I implemented ESP32 sleep functionality and utilized Bluetooth Low Energy to reduce energy consumption between messages.",
  customPcb:
    "Both devices were designed as custom PCBs rather than assembled from development boards. I used Altium Designer to design the boards and create the required component footprints. One unusual battery module required a custom footprint. I created the footprint in Altium Designer with a custom schematic and pin layout. This module can be seen on the transmitter PCB.",
  interaction:
    "The transmitter uses three physical buttons, with each button mapped to a different predefined alert message. The receiver uses a 1602A LCD to display incoming messages and includes two potentiometers for adjusting the display's backlight brightness and text contrast. This allows the display to remain readable under different ambient lighting conditions while keeping the interface entirely hardware controlled.",
  images: [
    { src: pagerImg, alt: "Bluetooth pager transmitter and receiver hardware." },
    { src: pagerBoardImg, alt: "Custom Bluetooth pager PCB layout." },
    { src: pagerCodeImg, alt: "Code snippet of child class." },
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
    role: "Hardware & Firmware / PCB Design",
    stack: [
      "ESP32",
      "C++",
      "Altium Designer",
      "SPI",
      "Bluetooth Low Energy (BLE)",
      "2 Layer Custom PCBs and Components",
    ],
    summary: " ",
    sections: {},
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
    year: "2026",
    role: "Digital Logic / FPGA Design",
    stack: [
      "Intel DE10-Lite",
      "Quartus Prime",
      "D Flip-Flops",
      "Logic Gates",
      "Karnaugh Maps",
      "Mealy FSM",
      "Digital Logic",
    ],
    summary: "A dice game simulator built from scratch on an FPGA using digital logic.",
    sections: {
      overview:
        "In this project, I designed and built a dice game simulator with logic gates where players try to accumulate a score of exactly 23 based on simulated dice rolls. Special cases and clocked inputs increase the logic complexity and game complexity.",
      pairs: [
        {
          challenge:
            "Flip-flops, the dice roller, and other components must be created from scratch using digital logic.",
          solution:
            "Utilized Karnaugh maps to simplify complex logic and created S-R Latches with clocked inputs to form flip flops.",
        },
        {
          challenge:
            "Switches must be debounced using the 50MHz clock and logic inside of Quartus.",
          solution:
            "Built clocked debouncers with D flip-flops that store previous switch states and only register a change after it has held steady for several clock cycles.",
        },
        {
          challenge:
            "All combinational logic must be compressed to its simplest form using Karnaugh maps.",
          solution:
            "Reduced every combinational block with Karnaugh maps before converting it to gate-level logic.",
        },
      ],
      details: [
        {
          title: "System Architecture",
          paragraphs: [
            "The game runs off of a Mealy Finite State Machine with 7 states. In normal gameplay, as players roll and accumulate points, they pass through most of the states. There are 7 D Flip-Flops as the state is set through one-hot encoding. Combinational logic feeding each flip-flop's input determines the next state based on the current state and inputs.",
            "To assist with debugging, on-board LEDs are used to indicate the state of the machine. This made it easy to verify state transitions during both simulation and hardware bring-up.",
          ],
        },
        {
          title: "Switch Debouncing & Debugging",
          paragraphs: [
            "The on-board switches were not debounced and would oscillate many times between the values 0 and 1 when flipped. This was discovered after analyzing faulty gameplay footage and finding that dice rolls were being added multiple times to the running sum since switches were firing multiple times on each individual flick. Clocked debouncers were added using digital logic and D Flip-Flops to fix this by storing the state of previous switch states and ensuring they had changed for a minimum period of time.",
          ],
        },
        {
          title: "Dice Roller",
          paragraphs: [
            "The 7-segment HEX display is driven by an IC 7447 that decodes a binary number into 7 segments that can be used to drive the display. To correctly display the numbers 1 - 6 to simulate dice rolls, Karnaugh maps are used to simplify digital logic and produce a working display from binary numbers. This dice roller cycles through a preset order of numbers driven by the clock as the roll button is pressed. This simulates randomness as the clock is moving so fast that the user is unable to control the roll output.",
          ],
        },
        {
          title: "Special Implementations to Game Logic",
          paragraphs: [
            "There are a few special rules implemented into this game to increase logic complexity. A roll of 6 is automatically added to the player's running score, the player loses after 9 rolls, the player loses if their score exceeds 23, and the player automatically wins if they apply a hidden hardware shortcut.",
            "When a player rolls a 6, they bypass the state where the user chooses to add their roll to their accumulated sum and enter the state after, where the number has been summed with their score, and they are prompted to roll again. There is a counter and display for both the number of turns and the accumulated score that the player is on. Similar to the roll, when a player loses by turns or by score, they enter the loss state immediately through combinational logic driven by the control.",
            "One of the interesting features of this game is a hardware hack. Users can write the number 23 in binary using on-board switches, with 1 being the upward position and 0 being the downward position to win. When the switches are correctly aligned, the number 23 is automatically loaded internally so that the next roll will immediately show that the player has won with a score of 23.",
          ],
        },
      ],
    },
    image: fpgaImg,
    imageAlt: "FPGA development board glowing with blue LEDs.",
    images: [
      { src: fpgaImg, alt: "FPGA development board glowing with blue LEDs." },
      { src: fpgaDetailImg, alt: "FPGA board with a waveform display and Verilog code in the background." },
    ],
    wideImage: {
      src: fpgaWideAsset,
      alt: "Wide shot of the FPGA dice game board powered on with seven-segment displays.",
    },
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
    image: robotImg,
    imageAlt: "Sound following robot prototype.",
    images: [
      { src: robotImg, alt: "Sound following robot front view." },
      { src: robotSchematic, alt: "Sound following robot microphone and circuit layout." },
      { src: robotOsc, alt: "Sound following robot motor driver wiring." },
      { src: robotCode, alt: "Sound following robot oscilloscope reading." },
    ],
  },

  {
    visible: true,
    featured: true,
    headerMode: "wide",
    slug: "music-player",
    title: "Embedded Audio Player",
    kicker: "Custom MP3 player with playlists, album art, and a beginner-friendly build guide.",
    year: "2026",
    role: "Embedded Systems / PCB Design",
    stack: [
      "ESP32",
      "C++",
      "Altium Designer",
      "SPI",
      "I2S",
      "Mealy State Machine (FSM)",
      "2 Layer Custom PCBs and Components",
      "Hardware Interrupts",
      "Adafruit ST7789",
    ],
    summary: "Custom MP3 player with playlists, album art, and a beginner-friendly build guide.",
    sections: {
      overview:
        "In this project, I fully designed and built a custom MP3 music player capable of browsing playlists, displaying album art, and playing audio directly from a microSD card. The design also features real JPG images and organizes songs by playlist and song order for user ease.",
      pairs: [
        {
          challenge: "Fully custom-rendered UI.",
          solution:
            "Built a screen-redraw flag into a three-state Mealy FSM so the display only updates once per state transition, minimizing unnecessary SPI writes.",
        },
        {
          challenge:
            "Dynamically load music library structure from a microSD card at runtime, rather than using hardcoded paths.",
          solution:
            "On startup the microcontroller scans the microSD card's folder structure into playlist structs, so users only need to update the card to add songs or playlists.",
        },
        {
          challenge:
            "Create a secondary state machine within an existing state machine to handle highlighted on-screen buttons.",
          solution:
            "The top-level FSM selects the active screen, and a nested FSM tracks the current function of the physical buttons for that screen using enumerators.",
        },
      ],
      details: [
        {
          title: "UI State Architecture",
          paragraphs: [
            "The interface runs on a three-state finite state machine (Music, Playlist, Song) that stores the active state. Rather than redrawing the display every loop cycle, I implemented a separate state flag that only triggers a screen redraw once per state transition, preventing unnecessary SPI writes to the display and minimizing delays.",
            "Within this large state machine is a second state machine that tracks the current function of the buttons on the screen for each specific screen. The first state machine determines which screen is active, which in turn constrains which button functions are valid. The second state machine is embedded within the screen and controls the movement of the highlighted on-screen buttons as dictated by the physical pushbuttons. Enumerators are used to store the state of the second state machine.",
          ],
        },
        {
          title: "Interrupt-Driven Controls & State Machines",
          paragraphs: [
            "Each of the 7 physical buttons is wired to its own GPIO interrupt with an independent debounce timestamp; having interrupts run independently prevents a single input from stalling the responsiveness of others. Each ISR sets a flag and records a timestamp, but the main loop checks for these flags and calls the corresponding handler, keeping the interrupts fast.",
            "One input required distinguishing a single click from a double click using a timing window. Since this can't be resolved quickly in an interrupt, the interrupt just records when a press occurred, while a separate check in the main loop resolves it as single or double once the window has passed, without blocking the rest of the system.",
          ],
        },
        {
          title: "Dynamic Music Library Loading",
          paragraphs: [
            "A playlist struct variable contains the attributes of type string for the title of the playlist, a string pointer that points to an array of songs, and an int that stores the number of songs in the playlist. Upon startup, the microcontroller scans the microSD card's folder structure into an array of playlist objects to build the music library dynamically, rather than using hardcoded folder paths.",
            "This means that to add a playlist or songs, users only need to modify the microSD card and follow the given folder structure, but not modify any code.",
          ],
        },
        {
          title: "Beginner's Guide",
          paragraphs: [
            "To make the ESP32 music player accessible for beginner engineers, I designed and wrote a beginner-focused engineering guide that teaches readers how to build the system from the ground up. The guide breaks down the interactions between the ESP32, a microSD card, TFT display, physical controls, and I2S audio hardware, while introducing the embedded concepts and functions required to bring each subsystem together.",
            "Rather than treating the project as a collection of copy and paste code, I structured the guide around problem-solving and function creation. Each chapter explains why specific hardware and software decisions were made, walks through key code components, and incorporates debugging exercises and challenges that encourage readers to modify the system themselves.",
          ],
        },
      ],
    },
    image: musicImg,
    imageAlt: "Handheld music player with a round dial on pale blue paper.",
    images: [
      //{ src: musicDetailImg, alt: "Exploded view of the music player showing the internal electronics." },
      { src: musicSquareOneImg, alt: "Handheld music player with a round dial on pale blue paper." },
      { src: musicSquareTwoImg, alt: "Music player case and internal PCB with volume knob." },
    ],
  },
  {
    visible: false,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
