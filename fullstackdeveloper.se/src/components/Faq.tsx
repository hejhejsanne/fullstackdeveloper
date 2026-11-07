import "@/styles/components/faq.css";
import type { FaqItem } from "@/content/types";

/**
 * Questions as <details>: answers are in the server-rendered HTML (crawlers and AI search read them),
 * and visitors can scan the questions first. No JavaScript.
 */
export default function Faq({ items, newTab }: { items: FaqItem[]; newTab: string }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary>
            <h3 className="faq-q">{item.q}</h3>
            <svg className="faq-chevron" aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 8 11 13 6" />
            </svg>
          </summary>
          <div className="faq-answer">
            {item.a.map((p) => <p key={p}>{p}</p>)}
            {item.source && (
              <p className="faq-source">
                Källa:{" "}
                <a className="text-link" href={item.source.href} target="_blank" rel="noopener noreferrer">
                  {item.source.label}<span className="visually-hidden"> {newTab}</span>
                </a>
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
