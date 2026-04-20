"use client";
import React from "react";
import { Project, ProjectTag, ProcessStep } from "@/types";
import "@/styles/projectcard.css";

function Tag({ label, variant }: ProjectTag) {
  return <span className={`tag tag--${variant}`}>{label}</span>;
}

function ProcessStrip({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="process-strip" role="list" aria-label="Processsteg">
      {steps.map((step) => (
        <div
          key={step.label}
          role="listitem"
          className={`process-strip__step process-strip__step--${step.status}`}
        >
          {step.label}
        </div>
      ))}
    </div>
  );
}

function ReflectionBox({ label, text }: { label: string; text: string }) {
  return (
    <div className="reflection-box">
      <div className="reflection-box__label">{label}</div>
      <p className="reflection-box__text">{text}</p>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const {
    id,
    title,
    impact,
    tags,
    processSteps,
    reflectionLabel,
    reflectionText,
    tech,
    liveUrl,
    liveLabel,
    githubUrl,
    thumbSrc,
    thumbAlt,
  } = project;

  return (
    <article className="project-card fade-in" aria-labelledby={`${id}-title`}>
      <div className="project-card__header">
        <div>
          <div className="project-card__meta">
            {tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </div>
          <h2 className="project-card__title" id={`${id}-title`}>
            {title}
          </h2>
          <p className="project-card__impact">{impact}</p>
        </div>
        {thumbSrc ? (
          <img
            src={thumbSrc}
            alt={thumbAlt ?? title}
            className="project-card__thumb"
          />
        ) : (
          <div className="project-card__thumb" aria-hidden="true">
            Preview
          </div>
        )}
      </div>
      {processSteps && <ProcessStrip steps={processSteps} />}
      <ReflectionBox label={reflectionLabel} text={reflectionText} />
      <div className="project-card__footer">
        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {liveUrl &&
            (liveUrl === "#chatbot" ? (
              <button
                type="button"
                className="project-card__link"
                onClick={() => window.dispatchEvent(new Event("open-aisan"))}
              >
                Öppna AiSan ↗
              </button>
            ) : (
              <a
                href={liveUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {liveLabel ?? "Live demo"} ↗
              </a>
            ))}
          {githubUrl && (
            <a
              href={githubUrl}
              className="project-card__link project-card__link--muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
