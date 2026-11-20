export function ArchitectureDiagram({ labels }: { labels: readonly [string, string, string, string] }) {
  return (
    <figure className="architecture-figure">
      <svg viewBox="0 0 760 170" role="img" aria-label={`${labels[0]} → ${labels[1]} → ${labels[2]} → ${labels[3]}`}>
        <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor" /></marker></defs>
        {[20, 210, 400, 590].map((x, index) => <g key={labels[index]}><rect x={x} y="46" width="150" height="72" rx="12" className="diagram-box" /><text x={x + 75} y="87" textAnchor="middle" className="diagram-label">{labels[index]}</text></g>)}
        <path d="M172 82 H198 M362 82 H388 M552 82 H578" className="diagram-arrow" markerEnd="url(#arrow)" />
      </svg>
      <figcaption className="sr-only">{labels.join(" → ")}</figcaption>
    </figure>
  );
}
