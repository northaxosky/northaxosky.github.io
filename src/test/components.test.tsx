import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { Footer } from "@/components/footer";
import type { Project } from "@/data/portfolio";

describe("SectionHeading", () => {
  it("renders title", () => {
    render(<SectionHeading title="Test Title" />);
    expect(
      screen.getByRole("heading", { name: /Test Title/ })
    ).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });

  it("renders marker when provided", () => {
    render(<SectionHeading title="Title" marker="10 projects" />);
    expect(screen.getByText("10 projects")).toBeInTheDocument();
  });
});

describe("ProjectRow", () => {
  const mockProject: Project = {
    title: "Test Project",
    summary: "A test project summary",
    tags: ["Rust", "TypeScript"],
    github: "https://github.com/test/test",
    lane: "Systems & Tooling",
    stars: 7,
  };

  it("renders title and summary", () => {
    render(<ProjectRow project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("A test project summary")).toBeInTheDocument();
  });

  it("renders joined tags", () => {
    render(<ProjectRow project={mockProject} />);
    expect(screen.getByText("Rust · TypeScript")).toBeInTheDocument();
  });

  it("links to github in a new tab", () => {
    render(<ProjectRow project={mockProject} />);
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
