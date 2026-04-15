import React from "react";
import { Skill } from "../app/types";
import "../styles/skills.css";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="kompetenser"
      className="section fade-in"
      aria-labelledby="kompetenser-heading"
    >
      <div className="section-label" id="kompetenser-heading">
        Kompetenser
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skills__item">
            <div className="skills__category">{skill.category}</div>
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
