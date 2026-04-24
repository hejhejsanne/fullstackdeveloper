"use client";
import React from "react";
import { Project, ProjectTag, ProcessStep } from "@/types";
import "@/styles/components/projectcard.css";
import Image from "next/image";

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
          className={`process-step process-step-${step.status}`}
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
      <div className="reflection-label">{label}</div>
      <p className="reflection-text">{text}</p>
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
      <div className="project-card-header">
        <div>
          <div className="project-card-meta">
            {tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </div>
          <h2 className="project-card-title" id={`${id}-title`}>
            {title}
          </h2>
          <p className="project-card-impact">{impact}</p>
        </div>
        {/* {thumbSrc ? (
          <Image
            src={thumbSrc}
            alt={thumbAlt ?? title}
            className="project-card-thumb"
          />
        ) : (
          <div className="project-card-thumb" aria-hidden="true">
            Preview
          </div>
        )} */}
      </div>
      {processSteps && <ProcessStrip steps={processSteps} />}
      <ReflectionBox label={reflectionLabel} text={reflectionText} />
      <div className="project-card-footer">
        <div className="project-card-tech">
          {tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {liveUrl &&
            (liveUrl === "#chatbot" ? (
              <button
                type="button"
                className="project-card-link"
                onClick={() => window.dispatchEvent(new Event("open-aisan"))}
              >
                Öppna AiSan ↗
              </button>
            ) : (
              <a
                href={liveUrl}
                className="project-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {liveLabel ?? "Live demo"} ↗
              </a>
            ))}
          {githubUrl && (
            <a
              href={githubUrl}
              className="project-card-link project-card-link-muted"
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
