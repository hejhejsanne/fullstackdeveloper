export interface ProcessStep {
  label: string;
  status: "done" | "active" | "pending";
}

export interface ProjectTag {
  label: string;
  variant: "blue" | "green" | "gray";
}

export interface Project {
  id: string;
  title: string;
  impact: string;
  tags: ProjectTag[];
  processSteps?: ProcessStep[];
  reflectionLabel: string;
  reflectionText: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveLabel?: string;
  thumbSrc?: string;
  thumbAlt?: string;
}

export interface Skill {
  category: string;
  items?: string;
  link?: { href: string; label: string };
}
