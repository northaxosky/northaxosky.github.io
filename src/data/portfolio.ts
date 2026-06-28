export type Lane =
  | "Systems & Tooling"
  | "Machine Learning"
  | "Game Tech"
  | "Fallout 4"
  | "Web & Product";

export const lanes: Lane[] = [
  "Systems & Tooling",
  "Machine Learning",
  "Game Tech",
  "Fallout 4",
  "Web & Product",
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "internship" | "education";
}

export interface Project {
  title: string;
  summary: string;
  description?: string;
  tags: string[];
  github: string;
  lane: Lane;
  stars?: number;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const profile = {
  name: "Kuzey Gök",
  title: "Software Engineer",
  company: "Microsoft",
  location: "Seattle, WA",
  tagline:
    "I build close to the metal: Rust tooling, machine learning from scratch, and game engines.",
  about: [
    "I'm a software engineer at Microsoft. I studied computer science and interned twice at AWS before joining. Most of what I build, though, lives outside the day job.",
    "I like working close to the metal: developer tooling and CLIs in Rust, machine-learning systems written from scratch, a small C++ game engine, and years of reverse-engineering and modding Fallout 4. Most projects start from a practical itch: make something faster, automate a workflow, or learn a system deeply enough to bend it.",
  ],
  now: "Building Overseer in Rust and training Sky-AI from scratch.",
  social: {
    github: "https://github.com/northaxosky",
    linkedin: "https://www.linkedin.com/in/kuzeygok/",
    twitter: "https://x.com/MuteBusterr",
    nexusmods: "https://www.nexusmods.com/profile/MuteBustNut",
  },
} as const;

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Microsoft",
    period: "Now",
    description: "Building production software at scale.",
    type: "work",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    period: "2× Intern",
    description:
      "Two internships on cloud infrastructure and backend services.",
    type: "internship",
  },
  {
    title: "B.S. Computer Science",
    company: "University of Washington Bothell",
    period: "Graduated",
    description: "Computer science, focused on software engineering and systems.",
    type: "education",
  },
];

export const projects: Project[] = [
  {
    title: "Overseer",
    summary: "A Fallout 4 mod manager in Rust, on the Mod Organizer 2 model.",
    description:
      "Non-destructive, crash-safe transactional deploys, real Plugins.txt load-order management, a setup health checker, and a ratatui TUI, all over a UI-agnostic core.",
    tags: ["Rust", "ratatui", "libloadorder"],
    github: "https://github.com/northaxosky/overseer",
    lane: "Systems & Tooling",
    stars: 1,
    featured: true,
  },
  {
    title: "Sky-AI",
    summary: "GPT-2 (124M), reproduced from scratch, then scaled.",
    description:
      "A clean-room GPT-2 that matches OpenAI bit-for-bit, plus a modern skyai stack scaling toward ~1.5B, on a hand-written training harness (Flash Attention, bf16, torch.compile).",
    tags: ["Python", "PyTorch", "LLMs"],
    github: "https://github.com/northaxosky/sky-ai",
    lane: "Machine Learning",
    stars: 2,
    featured: true,
  },
  {
    title: "Sky-CLI",
    summary: "A Claude Code-style coding-agent CLI in Rust.",
    description:
      "An LLM agent loop with tool calling, over OpenRouter, built well past the original challenge spec.",
    tags: ["Rust", "LLM", "agents"],
    github: "https://github.com/northaxosky/sky-cli",
    lane: "Systems & Tooling",
    stars: 2,
  },
  {
    title: "interpreter-rust",
    summary: "A tree-walk interpreter for Lox, in Rust.",
    description:
      "Tokenizer, AST, and evaluator built following Crafting Interpreters.",
    tags: ["Rust", "interpreters"],
    github: "https://github.com/northaxosky/interpreter-rust",
    lane: "Systems & Tooling",
    stars: 1,
  },
  {
    title: "copilot-btw",
    summary: "A /btw slash-command extension for GitHub Copilot CLI.",
    description:
      "Ask quick side questions without polluting your main conversation context.",
    tags: ["JavaScript", "Copilot CLI"],
    github: "https://github.com/northaxosky/copilot-btw",
    lane: "Systems & Tooling",
    stars: 1,
  },
  {
    title: "Kuma",
    summary: "A lightweight C++ game engine with Vulkan rendering.",
    description:
      "Vulkan renderer, an SDL3 platform layer, resource loading, input, and timing over a growing core.",
    tags: ["C++", "Vulkan", "SDL3"],
    github: "https://github.com/northaxosky/Kuma",
    lane: "Game Tech",
    stars: 1,
  },
  {
    title: "Addictol",
    summary:
      "Combined Fallout 4 engine fixes: performance, stability, and crash patches.",
    description:
      "Built with the Dear Modding FO4 group. My most-starred project.",
    tags: ["C++", "F4SE"],
    github: "https://github.com/Dear-Modding-FO4/Addictol",
    lane: "Fallout 4",
    stars: 23,
  },
  {
    title: "fallout4-community-shaders",
    summary: "A Community Shaders port, bringing modern rendering to Fallout 4.",
    description:
      "Porting the Community Shaders feature set to the Creation engine.",
    tags: ["C++", "HLSL"],
    github: "https://github.com/northaxosky/fallout4-community-shaders",
    lane: "Fallout 4",
    stars: 5,
  },
  {
    title: "HouseRules",
    summary: "A curated Fallout 4 configuration mod (F4SE + MCM + ESP).",
    description: "Sensible engine and gameplay defaults, configurable in-game.",
    tags: ["C++", "F4SE", "MCM"],
    github: "https://github.com/northaxosky/HouseRules",
    lane: "Fallout 4",
    stars: 2,
  },
  {
    title: "Vault",
    summary: "A personal finance dashboard with Plaid integration.",
    description:
      "Budgets, analytics, recurring-charge detection, alerts, and secure token handling.",
    tags: ["TypeScript", "Next.js", "Prisma", "Plaid"],
    github: "https://github.com/northaxosky/Vault",
    lane: "Web & Product",
    stars: 1,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Rust", "C++", "TypeScript", "Python", "JavaScript", "C"],
  },
  {
    name: "Frameworks & ML",
    skills: ["React", "Next.js", "Node.js", "PyTorch", "Tauri"],
  },
  {
    name: "Systems & Graphics",
    skills: ["Vulkan", "SDL3", "HLSL", "CMake", "ratatui"],
  },
  {
    name: "Tools",
    skills: ["Git", "Neovim", "GitHub Actions", "Azure", "F4SE"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
