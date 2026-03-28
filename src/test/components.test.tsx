import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import type { Project } from "@/data/portfolio";

describe("SectionHeading", () => {
  it("renders title", () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });
});

describe("ProjectCard", () => {
  const mockProject: Project = {
    title: "Test Project",
    description: "A test project description",
    tags: ["TypeScript", "React"],
    github: "https://github.com/test/test",
    featured: true,
  };

  it("renders project title and description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("links to github", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://github.com/test/test");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

describe("Footer", () => {
  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders Kuzey Gök in copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Kuzey Gök/)).toBeInTheDocument();
  });
});
