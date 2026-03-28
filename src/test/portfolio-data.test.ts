import { describe, it, expect } from "vitest";
import {
  profile,
  experiences,
  projects,
  skillCategories,
  navLinks,
} from "@/data/portfolio";

describe("portfolio data", () => {
  it("has complete profile information", () => {
    expect(profile.name).toBe("Kuzey Gök");
    expect(profile.title).toBeTruthy();
    expect(profile.company).toBeTruthy();
    expect(profile.tagline).toBeTruthy();
    expect(profile.about).toBeTruthy();
  });

  it("has all social links", () => {
    expect(profile.social.github).toContain("github.com");
    expect(profile.social.linkedin).toContain("linkedin.com");
    expect(profile.social.twitter).toContain("x.com");
    expect(profile.social.nexusmods).toContain("nexusmods.com");
  });

  it("has at least one experience entry", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("each experience has required fields", () => {
    for (const exp of experiences) {
      expect(exp.title).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.description).toBeTruthy();
      expect(["work", "internship", "education"]).toContain(exp.type);
    }
  });

  it("has at least one featured project", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
  });

  it("each project has a valid github link", () => {
    for (const project of projects) {
      expect(project.github).toContain("github.com");
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });

  it("has skill categories with skills", () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    for (const category of skillCategories) {
      expect(category.name).toBeTruthy();
      expect(category.skills.length).toBeGreaterThan(0);
    }
  });

  it("nav links point to valid section anchors", () => {
    for (const link of navLinks) {
      expect(link.href).toMatch(/^#/);
      expect(link.label).toBeTruthy();
    }
  });
});
