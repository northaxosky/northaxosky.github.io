export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "internship" | "education";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const profile = {
  name: "Kuzey Gök",
  title: "Software Development Engineer",
  company: "Microsoft",
  tagline:
    "I build web apps, dev tools, and game mods — mostly whatever I find interesting.",
  about:
    "I'm a software engineer at Microsoft with a background in cloud infrastructure from my time at AWS. Outside of work, I spend my time building personal projects ranging from finance dashboards to CLI tools, and reverse engineering Fallout 4 for the modding community.",
  social: {
    github: "https://github.com/northaxosky",
    linkedin: "https://www.linkedin.com/in/kuzeygok/",
    twitter: "https://x.com/MuteBusterr",
    nexusmods: "https://www.nexusmods.com/profile/MuteBustNut",
  },
} as const;

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer",
    company: "Microsoft",
    period: "Current",
    description: "Building software at scale.",
    type: "work",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    period: "Previously",
    description:
      "Interned twice at AWS working on cloud infrastructure and services.",
    type: "internship",
  },
  {
    title: "B.S. Computer Science",
    company: "University of Washington Bothell",
    period: "Graduated",
    description: "Studied computer science with a focus on software engineering.",
    type: "education",
  },
];

export const projects: Project[] = [
  {
    title: "Vault",
    description:
      "A personal finance dashboard for tracking investments, spending, and net worth. Built with real-time market data and Plaid integration.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma"],
    github: "https://github.com/northaxosky/Vault",
    featured: true,
  },
  {
    title: "copilot-btw",
    description:
      "A /btw slash command extension for GitHub Copilot CLI — ask quick side questions without polluting your main conversation context.",
    tags: ["JavaScript", "CLI", "GitHub Copilot"],
    github: "https://github.com/northaxosky/copilot-btw",
    featured: true,
  },
  {
    title: "FloatingSubtitlesF4",
    description:
      "F4SE plugin that adds floating subtitles to Fallout 4. Ported from the next-gen version back to the original game.",
    tags: ["C++", "F4SE", "Reverse Engineering"],
    github: "https://github.com/northaxosky/FloatingSubtitlesF4",
    featured: true,
  },
  {
    title: "R6RustRecoilScript",
    description: "Recoil management script for Rainbow 6 Siege written in Rust.",
    tags: ["Rust"],
    github: "https://github.com/northaxosky/R6RustRecoilScript",
  },
  {
    title: "TicTacToe",
    description:
      "WebGL TicTacToe game built with Unity, playable directly in the browser.",
    tags: ["Unity", "C#", "WebGL"],
    github: "https://github.com/northaxosky/TicTacToe",
  },
  {
    title: "ProjectileAPI",
    description:
      "2D projectile systems API with GLSL shaders for game engines.",
    tags: ["JavaScript", "GLSL", "Game Dev"],
    github: "https://github.com/northaxosky/ProjectileAPI",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Rust", "C++", "C#", "HTML/CSS"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Unity"],
  },
  {
    name: "Tools",
    skills: ["Git", "VS Code", "Docker", "Prisma", "F4SE"],
  },
  {
    name: "Cloud & Infra",
    skills: ["AWS", "Azure", "GitHub Actions", "CI/CD"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
