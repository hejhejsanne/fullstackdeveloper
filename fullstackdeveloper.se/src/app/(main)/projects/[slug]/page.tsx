import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data";
import "@/styles/components/projects.css";
import OpenAiSanButton from "@/components/OpenAiSanButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) return { title: "Project not found" };

  const description = project.impact.slice(0, 155);

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title} | Sanne Delin`,
      description,
      url: `/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  return (
    <main className="section">
      <div className="project-detail">
        <Link href="/projects" className="back-link">
          ← Back to projects
        </Link>

        <div className="project-detail-tags">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`tag tag--${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>

        <h1 className="project-detail-title">{project.title}</h1>

        <p className="project-detail-impact">{project.impact}</p>

        {project.reflectionLabel && (
          <div className="project-detail-reflection">
            <div className="project-detail-reflection__label">
              {project.reflectionLabel}
            </div>
            <p className="project-detail-reflection__text">
              {project.reflectionText}
            </p>
          </div>
        )}

        {project.reflectionLabel2 && (
          <div className="project-detail-reflection">
            <div className="project-detail-reflection__label">
              {project.reflectionLabel2}
            </div>
            <p className="project-detail-reflection__text">
              {project.reflectionText2}
            </p>
          </div>
        )}

        <div className="project-detail-tech">
          {project.tech.map((t) => (
            <span key={t} className="tag tag--gray">
              {t}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="project-detail-cta">
            {project.liveUrl === "#chatbot" ? (
              <OpenAiSanButton label={project.liveLabel ?? "Open AiSan"} />
            ) : (
              <a
                href={project.liveUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveLabel ?? "View project"}
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
