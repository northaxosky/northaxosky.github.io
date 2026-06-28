import { describe, it, expect } from "vitest";
import {
  profile,
  experiences,
  projects,
  skillCategories,
  navLinks,
  lanes,
} from "@/data/portfolio";

describe("portfolio data", () => {
  it("has complete profile information", () => {
    expect(profile.name).toBe("Kuzey Gök");
    expect(profile.title).toBeTruthy();
    expect(profile.company).toBeTruthy();
    expect(profile.tagline).toBeTruthy();
    expect(profile.about.length).toBeGreaterThan(0);
    for (const paragraph of profile.about) {
      expect(paragraph).toBeTruthy();
    }
  });

  it("has all social links", () => {
    expect(profile.social.github).toContain("github.com");
    expect(profile.social.linkedin).toContain("linkedin.com");
    expect(profile.social.twitter).toContain("x.com");
    expect(profile.social.nexusmods).toContain("nexusmods.com");
  });

  it("each experience has required fields", () => {
    expect(experiences.length).toBeGreaterThan(0);
    for (const exp of experiences) {
      expect(exp.title).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.description).toBeTruthy();
      expect(["work", "internship", "education"]).toContain(exp.type);
    }
  });

  it("has at least one featured project", () => {
    expect(projects.filter((p) => p.featured).length).toBeGreaterThan(0);
  });

  it("each project is well-formed and lives in a known lane", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.github).toContain("github.com");
      expect(project.tags.length).toBeGreaterThan(0);
      expect(lanes).toContain(project.lane);
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
