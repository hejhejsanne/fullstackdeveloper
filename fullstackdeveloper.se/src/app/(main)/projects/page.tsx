import { projects } from "@/data";
import Link from "next/link";
import type { Metadata } from "next";
import "@/styles/components/projectcard.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Sanne Delin — full stack web apps, AI integrations, and tech lead work.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Sanne Delin",
    description:
      "Selected projects by Sanne Delin — full stack web apps, AI integrations, and tech lead work.",
    url: "/projects",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <main className="section projects-page">
      <div className="section-label">Selected projects</div>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="projects-list-item">
            <Link href={`/projects/${project.id}`} className="project-card">
              <div className="project-card-header">
                <div>
                  <div className="project-card-meta">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`tag tag--${tag.variant}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-title">{project.title}</div>
                  <p className="project-card-impact">
                    {project.impact.slice(0, 160)}…
                  </p>
                </div>
                <div className="project-card-thumb" aria-hidden="true" />
              </div>
              <div className="project-card-footer">
                <div className="project-card-tech">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="tag tag--gray">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-card-links">
                  <span className="project-card-link">Read more →</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
