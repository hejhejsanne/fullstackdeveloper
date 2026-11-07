/** Table of contents for long pages. Sticky beside the article on desktop, a plain list above it on mobile. */
export default function Toc({ items, label = "Innehåll" }: { items: { id: string; label: string }[]; label?: string }) {
  return (
    <nav className="toc" aria-labelledby="toc-heading">
      <h2 id="toc-heading" className="toc-heading">{label}</h2>
      <ol className="toc-list" role="list">
        {items.map((item) => (
          <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
        ))}
      </ol>
    </nav>
  );
}
