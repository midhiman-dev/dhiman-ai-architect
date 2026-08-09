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

export interface ArchitecturePrinciple {
  id: string;
  title: string;
  shortDescription: string;
}

export interface ArchitectureCapabilities {
  enterpriseArchitecture: string[];
  aiSystems: string[];
  cloudDelivery: string[];
}

export interface ArchitectureEvidence {
  id: string;
  title: string;
  subtitle: string;
  architectureSignal: string;
  summary: string;
  evidence: string[];
  technologies?: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: string;
  tier: "flagship" | "supporting";
}

export interface CertificationItem {
  title: string;
  context: string;
  status?: "active" | "previous";
}

export interface SiteConfig {
  name: string;
  employerRole: string;
  positioning: string;
  focusLine: string;
  deliveryLine: string;
  titleTagline: string;
  role: string;
  location: string;
  summary: string;
  social: {
    linkedin: string;
    github: string;
  };
  seo: { title: string; description: string; keywords: string };
  resumeUrl: string;
  quickFacts: string;
  stats: { label: string; icon: string }[];
  skills: { tech: string[]; cloudAi: string[] };
  architectureSignature: ArchitecturePrinciple[];
  architectureCapabilities: ArchitectureCapabilities;
  architectureEvidence: ArchitectureEvidence[];
  certifications: CertificationItem[];
  projects: Project[];
  volunteering: string[];
}

export const site: SiteConfig = {
  name: "Dhiman Manji",
  employerRole: "Associate Consultant @ CGI",
  positioning: "AI-native Solution Architect",
  focusLine: "Enterprise AI · Agentic Systems · Modernization · .NET/Cloud",
  deliveryLine: "Business → Technology → Delivery",
  titleTagline: "Associate Consultant @ CGI | AI-native Solution Architect",
  role: "AI-native Solution Architect",
  location: "Bengaluru, Karnataka, India",
  summary:
    "Associate Consultant at CGI with 20+ years across enterprise software delivery, application architecture, modernization, and solution implementation. Focused increasingly on AI-enabled enterprise workflows, agentic systems, governance, and production readiness while retaining hands-on delivery depth.",
  social: {
    linkedin: "https://www.linkedin.com/in/dmanji",
    github: "https://github.com/midhiman-dev",
  },
  seo: {
    title: "Dhiman Manji — AI-native Solution Architect",
    description:
      "AI-native Solution Architect focused on enterprise AI, agentic systems, modernization, governed delivery, and .NET/cloud architecture, backed by 20+ years of enterprise software delivery.",
    keywords:
      "Dhiman Manji, AI-native solution architect, enterprise AI, agentic systems, AI architecture, solution architecture, enterprise modernization, .NET, cloud architecture, AI governance",
  },
  resumeUrl: "#",
  quickFacts: "Enterprise AI · Agentic Systems · Modernization · .NET/Cloud",
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
  architectureSignature: [
    {
      id: "enterprise-fitment",
      title: "Enterprise fitment before AI novelty",
      shortDescription:
        "Start with the workflow, users, systems, constraints, and decision points. Introduce AI only where it creates meaningful value.",
    },
    {
      id: "deterministic-core",
      title: "Deterministic core, intelligent edge",
      shortDescription:
        "Keep facts, calculations, validation, workflow state, and consequential controls deterministic; use AI for interpretation, generation, prioritization, and explanation.",
    },
    {
      id: "human-authority",
      title: "Human authority at consequential points",
      shortDescription:
        "Sensitive decisions, approvals, irreversible writes, and high-risk actions remain reviewable and attributable.",
    },
    {
      id: "verification-first",
      title: "Verification before expansion",
      shortDescription:
        "Prefer a smaller workflow that is tested and demonstrably reliable over a broad feature set that cannot be confidently verified.",
    },
  ],
  architectureCapabilities: {
    enterpriseArchitecture: [
      ".NET Framework / .NET 8–10",
      "C#",
      "ASP.NET Core",
      "APIs and integration",
      "Messaging / event-driven systems",
      "SQL Server / PostgreSQL / Oracle",
      "Brownfield modernization",
    ],
    aiSystems: [
      "Generative AI",
      "Grounded / retrieval-augmented patterns",
      "Agentic workflows",
      "Provider abstraction and integration",
      "Human-in-the-loop controls",
      "Evaluation / guardrail patterns",
      "Deterministic validation around probabilistic models",
    ],
    cloudDelivery: [
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "CI/CD",
      "GitHub",
      "Azure DevOps",
      "Cloud-native and hybrid delivery",
    ],
  },
  architectureEvidence: [
    {
      id: "carbon-coach",
      title: "CarbonCoach",
      subtitle: "Bounded generative AI with a deterministic core",
      architectureSignal:
        "Deterministic logic owns the facts; generative AI explains them within controlled boundaries.",
      summary:
        "AI-assisted carbon-awareness platform separating deterministic calculations and recommendation logic from Gemini-powered explanation and coaching.",
      evidence: [
        "286 automated tests",
        "Approximately 94.79% statement coverage",
        "Numeric Invention Guard rejects unsupported generated numbers",
      ],
      technologies: ["TypeScript", "Gemini", "Google Cloud Run"],
      githubUrl: "https://github.com/midhiman-dev/CarbonCoach",
      tier: "flagship",
    },
    {
      id: "voteready-india",
      title: "VoteReady India",
      subtitle:
        "Grounded AI with source-trust and deterministic safety routing",
      architectureSignal:
        "Generated guidance remains bounded by controlled sources, deterministic routing, and explicit uncertainty handling.",
      summary:
        "Source-backed civic education application combining controlled retrieval, generative simplification, source metadata, and safety-oriented routing.",
      evidence: [
        "164-test regression suite",
        "Controlled source registry",
        "Explicit cannot-verify behaviour",
      ],
      technologies: ["Gemini", "Firestore", "Firebase", "Google Cloud Run"],
      githubUrl: "https://github.com/midhiman-dev/VoteReady-India",
      tier: "flagship",
    },
    {
      id: "nfi-cmdws",
      title: "NFI CMDWS",
      subtitle: "Role-aware workflow with human decision gates",
      architectureSignal:
        "Workflow integrity, traceability, and human authority are treated as first-class architecture concerns.",
      summary:
        "Public prototype/reference implementation exploring structured beneficiary-management workflows, document handling, role separation, and review/approval gates.",
      evidence: [
        "Role-aware workflow states",
        "Human review and approval gates",
        "Audit-oriented process design",
      ],
      githubUrl: "https://github.com/midhiman-dev/NFI_CMDWS",
      status: "Public prototype / reference implementation",
      tier: "flagship",
    },
    {
      id: "ai-engineering-utilities",
      title: "AI Engineering Utilities",
      subtitle: "Reliability and safety tooling around AI delivery",
      architectureSignal:
        "Production AI needs validation, diagnostics, privacy, and secret-safe engineering around the model.",
      summary:
        "Collection of practical engineering utilities including SecureLLMHarness and Redact Secrets.",
      evidence: [
        ".NET 8 OpenAI-compatible endpoint validation",
        "Deterministic response validation and latency measurement",
        "Secret-safe diagnostics and sensitive-value redaction",
      ],
      githubUrl: "https://github.com/midhiman-dev/Utilities",
      tier: "supporting",
    },
    {
      id: "tripledger-nano",
      title: "TripLedger-Nano",
      subtitle: "End-to-end product delivery with deterministic forecasting",
      architectureSignal:
        "Working product delivery combining identity, persistence, deterministic business logic, and reporting.",
      summary:
        "Mobile-first travel budget application with persistent data, deterministic forecasting, risk indication, and PDF reporting.",
      evidence: [
        "Firebase persistence",
        "Google authentication",
        "Deterministic budget forecasting and RAG-style risk indication",
      ],
      githubUrl: "https://github.com/midhiman-dev/TripLedger-Nano",
      tier: "supporting",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: AI Transformation Leader",
      context:
        "Enterprise AI adoption strategy, governance, and organizational transformation",
      status: "active",
    },
    {
      title: "Google Generative AI Leader",
      context:
        "Generative AI capabilities, Google Cloud AI ecosystem, and enterprise fitment",
      status: "active",
    },
    {
      title: "GitHub Copilot Certification",
      context:
        "AI-assisted software engineering and prompt engineering",
      status: "active",
    },
    {
      title: "Google Cloud Digital Leader",
      context:
        "Cloud strategy, cloud-native architecture, and Google Cloud products",
      status: "active",
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      context:
        "Previously certified in Azure AI solutions design and implementation",
      status: "previous",
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
