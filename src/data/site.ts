import projectKisan from "@/assets/project-kisan.jpg";
import projectNomorapaw from "@/assets/nomorapaw-interface.jpg";
import projectPromptsharp from "@/assets/project-promptsharp.jpg";

export interface Project {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  tags?: string[];
  techStack?: string;
  techLines?: string[];
  impact?: string;
  team?: string;
  link?: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  titleTagline: string;
  role: string;
  location: string;
  social: { linkedin: string };
  seo: { title: string; description: string; keywords: string };
  resumeUrl: string;
  quickFacts: string;
  stats: { label: string; icon: string }[];
  skills: { tech: string[]; cloudAi: string[] };
  certifications: { title: string; context: string }[];
  projects: Project[];
  volunteering: string[];
}

export const site: SiteConfig = {
  name: "Dhiman Manji",
  titleTagline:
    "CGI Partner | Associate Consultant | Full-Stack Expert (.NET, Angular, Microservices) | Agile Product Strategist",
  role: "Software Architect & AI/Agentic Builder",
  location: "Bengaluru, Karnataka, India",
  social: { linkedin: "https://www.linkedin.com/in/dmanji" },
  seo: {
    title: "Dhiman Manji — Software Architect & AI/Agentic Builder",
    description:
      "Full-stack architect building scalable, impact-driven systems with .NET, Angular, microservices, and AI/Agentic apps. Bengaluru, India.",
    keywords:
      "Dhiman Manji, software architect, .NET, Angular, microservices, AI, agentic, Bengaluru, CGI",
  },
  resumeUrl: "#",
  quickFacts:
    "Preferred stack: .NET, Angular, Node, Tailwind, FastAPI, Vite | Cloud: Azure, Google Cloud",
  stats: [
    { label: "Full-stack architecture & microservices", icon: "Layers" },
    { label: "AI/Agentic solutions", icon: "Cpu" },
    { label: ".NET - Angular - Cloud", icon: "Boxes" },
    { label: "Bengaluru, India", icon: "MapPin" },
  ],
  skills: {
    tech: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "T-SQL",
      "PostgreSQL",
      "WPF",
      "RabbitMQ",
      "Microservices",
      "FastAPI",
      "Vite",
      "Tailwind CSS",
      "Dexie.js",
    ],
    cloudAi: ["Azure", "Google Cloud", "OpenRouter API", "Mistral models"],
  },
  certifications: [
    {
      title: "Microsoft Azure AI Engineer Associate",
      context: "Validated skills in designing and implementing AI solutions",
    },
    {
      title: "Google Cloud Digital Leader",
      context: "Cloud strategy and product leadership on GCP",
    },
    {
      title: "GitHub Copilot",
      context: "Microsoft certification in AI-assisted development and prompt engineering",
    },
  ],
  projects: [
    {
      id: "kisan-mitra",
      title: "Kisan Mitra — AI-powered farming companion (Hackathon prototype)",
      summary:
        "Built in ~6–7 hours at Google Cloud Agentic AI Day; working prototype for smallholder farmers",
      bullets: [
        "Photo-based crop disease diagnosis",
        "Real-time mandi price forecasting with sell/hold guidance",
        "Scheme finder for central/state subsidies",
        "Voice-first expert guidance in local language",
        "Weather and pest alerts powered by AI",
      ],
      impact:
        "Proof that with the right tools and intent, tech can speak the farmer’s language—literally and contextually.",
      team: "Team: Yeduguru Jaganmohan Reddy, Gowtham Sai D R",
      tags: ["Agentic AI", "AgriTech", "AI for Good", "Google Cloud", "Hackathon"],
      techStack:
        "Tech stack: Agentic workflow, Google Cloud services, vision/LLM components",
      link: "https://www.linkedin.com/posts/dmanji_agenticai-kisanmitra-googlecloud-activity-7355850183714246659-okdG",
      image: projectKisan,
    },
    {
      id: "nomorapaw",
      title: "NomoraPaw — AI Pet Name Generator (MVP)",
      summary:
        "Built a tap-first web app that generates themed, personality-aware pet names with short rationales.",
      bullets: [
        "Tap-based UX: animal icons, trait chips, theme tiles (minimal typing)",
        "Photo auto-detect → preselects species, manual override available",
        "Clean JSON API; low-cost, high-velocity stack (FastAPI, OpenRouter, Netlify/Docker)",
      ],
      techLines: [
        "Frontend: React + Tailwind (Lovable/Bolt-compatible)",
        "Backend: FastAPI with OpenRouter using openai/gpt-oss-20b:free model and a free-tier image-classification API to auto-detect the animal from a photo",
        "Deployment: Lightweight hosting for near-zero ops and easy scaling",
      ],
      tags: ["AI", "OpenRouter", "FastAPI", "React", "Tailwind"],
      link: "https://github.com/midhiman-dev/nomorapaw",
      image: projectNomorapaw,
    },
    {
      id: "promptsharp",
      title: "PromptSharp — AI Prompt Optimization Tool",
      summary:
        "Lightweight web app that transforms user prompts into optimized, structured AI inputs within seconds. Built with Vite, Express.js, Tailwind CSS; integrates free LLMs via OpenRouter API.",
      bullets: [
        "Real-time prompt optimization using Mistral Small 3.1",
        "Side-by-side comparison interface with copy functionality",
        "Local storage with Dexie.js for prompt history and favorites",
        "Responsive design for developers, content creators, and QA testers",
        "Zero-cost infrastructure using Vercel’s serverless platform",
      ],
      impact:
        "Improves AI interaction effectiveness by 85% with sub-3s response times and near-zero ops",
      techStack:
        "Tech Stack: JavaScript, Node.js, Express.js, Tailwind CSS, Dexie.js, OpenRouter API, Vercel",
      tags: ["OpenRouter API", "Dexie.js", "Express.js", "Tailwind"],
      link: "#",
      image: projectPromptsharp,
    },
  ],
  volunteering: [
    "NGO volunteering",
    "Animal welfare initiatives",
    "Student mentoring for financial literacy",
  ],
};
