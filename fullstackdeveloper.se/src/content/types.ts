export interface Source {
  href: string;
  label: string;
}

export interface FaqItem {
  q: string;
  /** Plain text paragraphs, rendered as visible HTML inside <details>. */
  a: string[];
  source?: Source;
}
