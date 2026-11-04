import React from "react";
import { Skill } from "@/types";
import "@/styles/components/skills.css";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section
      suppressHydrationWarning
      id="skills"
      className="section fade-in"
      aria-labelledby="skills-heading"
    >
      <h2 className="section-title" id="skills-heading">
        Skills
      </h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skills__item">
            <h3 className="skills__category">{skill.category}</h3>
            <div className="skills__list">
              {skill.link ? (
                <a
                  href={skill.link.href}
                  className="skills__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {skill.link.label}
                </a>
              ) : (
                skill.items
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
