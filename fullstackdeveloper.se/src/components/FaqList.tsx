import type { FaqItem } from "@/data/home";
import "@/styles/components/faq.css";

/**
 * FAQ items as plain headings and paragraphs: every answer is visible in the
 * server-rendered HTML, with no accordion, so readers and crawlers get the same text.
 */
export default function FaqList({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`faq-list ${className}`.trim()}>
      {items.map(({ q, a, source }) => (
        <div key={q} className="faq-item">
          <h3 className="faq-q">{q}</h3>
          <p className="faq-a">{a}</p>
          {source && (
            <p className="faq-source">
              <a className="text-link text-link--external" href={source.href} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
