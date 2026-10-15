import trinitariosInicioImg from "@/assets/trinitarios-inicio.webp";
import trinitariosAfiliadosImg from "@/assets/trinitarios-afiliados.webp";
import trinitariosCofresImg from "@/assets/trinitarios-cofres.webp";
import cloudVideoPlayerImg from "@/assets/cloud-video-player.webp";
import ichingImg from "@/assets/iching.webp";
import aiSimulatorImg from "@/assets/ai-simulator.webp";
import nayaSportImg from "@/assets/nayasport.webp";
import speakerAppImg from "@/assets/speaker-app.webp";

export const profile = {
  name: "Yany Gonzalez Yepez",
  firstName: "Yany",
  lastName: "Gonzalez Yepez",
  role: "Full stack engineer",
  focus: "TypeScript and React, Python, and AI on Google Cloud",
  location: "Remote",
  email: "yanygonzalezyepez@gmail.com",
  phone: { href: "tel:+17866696004", label: "+1 786 669 6004" },
  linkedin: "https://linkedin.com/in/yany-gonzalez-yepez-80594820b/",
  github: "https://github.com/Yany954",
};

export type ProjectImage = {
  src: string;
  alt: string;
  label?: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  kind: string;
  status: string;
  year?: string;
  description: string;
  tags: string[];
  /** Flat colour behind the screenshot, sampled from the product itself. */
  field: string;
  images: ProjectImage[];
  link?: { href: string; label: string };
  /** Shown instead of a link when the project cannot be opened publicly. */
  note?: string;
};

export const projects: Project[] = [
  {
    id: "los-trinitarios",
    title: "Funerales Los Trinitarios",
    kind: "Client platform · internal dashboard",
    status: "In testing",
    description:
      "A family-owned funeral home in Colombia needed order across its affiliates, services, coffin catalogue, burial vaults, partner agreements and billing. I built a dashboard with separate admin and employee permissions, shaped around the company’s own rules rather than a generic template. Development is nearly finished and the platform is now in testing.",
    tags: ["Admin & employee roles", "Affiliates", "Billing", "Inventory", "Multi-branch"],
    field: "#561b36",
    images: [
      {
        src: trinitariosInicioImg,
        label: "Home",
        alt: "Los Trinitarios dashboard home: monthly services, pending billing and vaults about to expire",
        width: 1250,
        height: 703,
      },
      {
        src: trinitariosAfiliadosImg,
        label: "Affiliates",
        alt: "Affiliates list with search, status counters and filters; personal data blurred",
        width: 1235,
        height: 653,
      },
      {
        src: trinitariosCofresImg,
        label: "Coffins",
        alt: "Coffin catalogue with photos, category, tier and price for adult and child sizes",
        width: 1261,
        height: 810,
      },
    ],
    note: "No public link: the dashboard holds private client data.",
  },
  {
    id: "cloud-video-player",
    title: "Cloud Video Player",
    kind: "Personal project",
    status: "In development",
    description:
      "Born from running out of phone storage and the hassle of passing around videos after family events and concerts. Upload your videos, group them into events and share them with the people who were there. Create an account and try it; it is free up to 15\u00a0GB.",
    tags: ["Next.js", "AWS", "Video upload", "Event sharing"],
    field: "#dfe5f2",
    images: [
      {
        src: cloudVideoPlayerImg,
        alt: "Cloud Video Player upload screen with a drop zone and an option to upload straight into an event",
        width: 836,
        height: 825,
      },
    ],
    link: {
      href: "https://main.d1fywgy7g1rdyk.amplifyapp.com/",
      label: "Try it free",
    },
  },
  {
    id: "iching",
    title: "IChing — El Oráculo Emprendedor",
    kind: "Built at 38 Grados Lab for a client in Mexico",
    status: "Live on the App Store",
    description:
      "Native iOS app that 38 Grados Lab delivered to a Mexican company; the product belongs to that client. I was in charge of its development: a complete UI/UX redesign, a restructured core interaction flow, and ongoing maintenance and App Store releases.",
    tags: ["iOS", "Swift", "UI/UX redesign", "App Store"],
    field: "#eee6d4",
    images: [
      {
        src: ichingImg,
        alt: "IChing app home screen with the gold Oráculo wordmark",
        width: 738,
        height: 1600,
      },
    ],
    link: {
      href: "https://apps.apple.com/ar/app/iching-el-or%C3%A1culo-emprendedor/id6754896663",
      label: "View on the App Store",
    },
  },
  {
    id: "ai-simulator",
    title: "AI Interview Simulator",
    kind: "AI & machine learning",
    status: "AI Engineer Course 2026 capstone",
    description:
      "Interactive job interview simulator developed as the capstone project for “The AI Engineer Course 2026”. Evaluates candidate responses in real time using LLMs and provides instant feedback.",
    tags: ["Python", "Streamlit", "LLMs", "GenAI", "Prompt engineering"],
    field: "#0e1117",
    images: [
      {
        src: aiSimulatorImg,
        alt: "AI Interview Simulator chat, with the assistant opening the interview",
        width: 895,
        height: 752,
      },
    ],
    link: {
      href: "https://interview-ai-simulator-git-streaml.streamlit.app/",
      label: "Try the AI demo",
    },
  },
  {
    id: "naya-sport",
    title: "Naya Sport — E-commerce",
    kind: "Web development · client project",
    status: "Live client site",
    description:
      "Custom-built e-commerce platform developed for the Naya Sport sportswear brand. Designed to showcase product catalogs and streamline direct-to-consumer sales.",
    tags: ["React / Web", "E-commerce", "UX/UI", "SEO"],
    field: "#e4e1dc",
    images: [
      {
        src: nayaSportImg,
        alt: "Naya Sport home page with custom team jerseys",
        width: 1336,
        height: 727,
      },
    ],
    link: { href: "https://www.nayasport.com.co/", label: "Visit the website" },
  },
  {
    id: "speaker-app",
    title: "Audio & Speaker Sync",
    kind: "iOS mobile connectivity",
    status: "In development",
    description:
      "Mobile application created from a real-world concept to route and pair audio directly between mobile devices and external speakers.",
    tags: ["iOS", "Swift", "CoreAudio", "AVFoundation"],
    field: "#2a1f5c",
    images: [
      {
        src: speakerAppImg,
        alt: "Audio & Speaker Sync screen titled The voice with a speaker grille",
        width: 401,
        height: 551,
      },
    ],
    note: "Still in development, so there is no public build yet.",
  },
];

export type Role = {
  title: string;
  period?: string;
  points: string[];
};

export type Job = {
  company: string;
  location: string;
  period: string;
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: "38 Grados Lab",
    location: "Remote",
    period: "2022 – 2025",
    roles: [
      {
        title: "AI & Mobile Lead",
        period: "Final year",
        points: [
          "Designed and implemented AI solutions with Vertex AI and Firebase on the company’s GCP infrastructure.",
          "Built generative AI products such as automated WhatsApp messaging and a conversational agent builder.",
          "Gathered requirements directly with clients and turned them into architecture diagrams and cloud cost estimates.",
          "Planned deliverables and deadlines together with management.",
          "Led a team of interns: follow-up meetings, progress reviews and support on projects and MVPs.",
        ],
      },
      {
        title: "Mobile Developer",
        points: [
          "Built the company’s mobile apps with Flutter and Kotlin Multiplatform.",
          "Maintained and evolved legacy apps in Cordova and in Capacitor + Angular.",
          "Handled builds, publishing, certificates and push notifications in Apple Developer.",
        ],
      },
      {
        title: "Internship",
        points: [
          "Administered the company’s Google Workspace: users, access and tools.",
        ],
      },
    ],
  },
  {
    company: "La Quinta Inn & Suites",
    location: "Rock Hill, NC",
    period: "2025 – Present",
    roles: [
      {
        title: "Front Desk Agent",
        points: [
          "Mastering customer experience and understanding user needs through direct interaction. Exceptional service delivery and problem-solving.",
        ],
      },
    ],
  },
  {
    company: "Naya Sport",
    location: "Bogotá, Colombia",
    period: "2020 – 2023",
    roles: [
      {
        title: "Secretary",
        points: [
          "Sales management, customer service excellence, and business operations in the sportswear industry.",
        ],
      },
    ],
  },
];

export const about = {
  summary: [
    "I’m a full stack software engineer with three years of experience: TypeScript and React on the front end, Python on the back end, and mobile apps, all on Google Cloud Platform. I led the AI and Mobile area at 38 Grados Lab, integrating Vertex AI and Firebase into client products.",
    "From cross-platform mobile apps in Flutter to responsive web work in React, I bring both technical rigour and user empathy to every project.",
    "I am a proactive, bilingual (C1) collaborator committed to excellence and adaptability across the full project lifecycle.",
  ],
  process:
    "I build with AI assistants like Claude Code without handing over technical judgement. I define the architecture and review security; every delivery ships with unit tests and a retrospective, and the interface has to be accessible.",
};

export const skillGroups: { name: string; items: string[] }[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "Dart", "Java", "SQL"] },
  {
    name: "Frontend & mobile",
    items: ["React", "Next.js", "Angular", "Flutter", "Capacitor", "Cordova", "Accessible interfaces"],
  },
  {
    name: "Backend & cloud",
    items: ["Python", "Google Cloud Platform", "Firebase (Auth, Firestore, Cloud Functions, FCM)", "Node.js", "AWS"],
  },
  { name: "AI", items: ["Vertex AI", "LLM integration", "Generative AI solutions", "Prompt engineering"] },
  {
    name: "Practice",
    items: [
      "Clean Architecture",
      "Unit testing",
      "Retrospectives",
      "AI-assisted development (Claude Code)",
      "Git",
      "App Store Connect",
      "Google Play Console",
    ],
  },
];

export const education = [
  { title: "B.S. Software Engineering", detail: "" },
  {
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    detail: "Udemy (365 Careers) · July 2026 · 29.5\u00a0hours",
  },
  {
    title: "CS50’s Introduction to Artificial Intelligence with Python",
    detail: "Harvard University",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1" },
];
