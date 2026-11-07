export interface Source {
  href: string;
  label: string;
}

export interface FaqItem {
  q: string;
  /** Plain text paragraphs, rendered as visible HTML inside <details>. */
  a: string[];
  /** Sources for the claims in this answer, shown under it. */
  sources?: Source[];
}
