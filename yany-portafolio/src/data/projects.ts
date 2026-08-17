// src/data/projectsData.ts (or src/data/projects.ts)

import ichingImg from "../assets/iching.png";
import aiSimulatorImg from "../assets/ai-simulator.png";
import nayaSportImg from "../assets/nayasport.png";
import speakerAppImg from "../assets/speaker-app.png";

export const projectsData = [
  {
    id: "iching",
    title: "IChing — El Oráculo Emprendedor",
    subtitle: "iOS Production App",
    description:
      "Native iOS application available on the App Store. Led a complete UI/UX redesign, restructured the core user interaction flow, and managed ongoing app maintenance and App Store releases.",
    tags: ["iOS", "Swift", "UI/UX Redesign", "App Store"],
    link: "https://apps.apple.com/ar/app/iching-el-or%C3%A1culo-emprendedor/id6754896663",
    linkText: "View on App Store",
    badge: "Live on App Store",
    image: ichingImg, 
  },
  {
    id: "ai-simulator",
    title: "AI Interview Simulator",
    subtitle: "AI & Machine Learning Project",
    description:
      "Interactive job interview simulator developed as the capstone project for 'The AI Engineer Course 2026'. Evaluates candidate responses in real time using LLMs and provides instant feedback.",
    tags: ["Python", "Streamlit", "LLMs", "GenAI", "Prompt Engineering"],
    link: "https://interview-ai-simulator-git-streaml.streamlit.app/",
    linkText: "Try AI Demo",
    badge: "AI Engineer Course 2026",
    image: aiSimulatorImg,
  },
  {
    id: "naya-sport",
    title: "Naya Sport — E-Commerce Platform",
    subtitle: "Web Development / Client Project",
    description:
      "Custom-built e-commerce platform developed for the Naya Sport sportswear brand. Designed to showcase product catalogs and streamline direct-to-consumer sales.",
    tags: ["React / Web", "E-Commerce", "UX/UI", "SEO"],
    link: "https://www.nayasport.com.co/",
    linkText: "Visit Website",
    badge: "Real Client",
    image: nayaSportImg,
  },
  {
    id: "speaker-app",
    title: "Audio & Speaker Sync App",
    subtitle: "iOS Mobile Connectivity",
    description:
      "Mobile application currently in TestFlight beta. Created from a real-world concept to seamlessly route and pair audio directly between mobile devices and external speakers.",
    tags: ["iOS", "Swift", "CoreAudio", "AVFoundation", "TestFlight"],
    link: "https://testflight.apple.com/",
    linkText: "Test on TestFlight",
    badge: "TestFlight Beta",
    image: speakerAppImg,
  },
];