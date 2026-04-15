import React from 'react';
import { Skill } from '@/types';
import '@/styles/skills.css';

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="section fade-in" aria-labelledby="skills-heading">
      <div className="section-label" id="skills-heading">Skills</div>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skills__item">
            <div className="skills__category">{skill.category}</div>
            <div className="skills__list">
              {skill.link ? (
                <a href={skill.link.href} className="skills__link" target="_blank" rel="noopener noreferrer">
                  {skill.link.label}
                </a>
              ) : skill.items}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
