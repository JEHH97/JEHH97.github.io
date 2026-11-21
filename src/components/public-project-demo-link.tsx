import type { PublicProject } from "@/content/projects";
import type { Dictionary, Locale } from "@/i18n";

export function PublicProjectDemoLink({ project, locale, dictionary, variant }: {
  project: PublicProject;
  locale: Locale;
  dictionary: Dictionary;
  variant: "card" | "detail";
}) {
  if (!project.demoUrl) return null;

  const note = project.demoNote?.[locale];
  const noteId = `demo-note-${project.slug}-${locale}`;
  const label = project.demoKind ? dictionary.publicProject.demoKinds[project.demoKind] : dictionary.publicProject.demo;

  return (
    <div className={`demo-link-group demo-link-group-${variant}`}>
      <a
        className={variant === "detail" ? "button button-secondary" : undefined}
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-describedby={note ? noteId : undefined}
      >
        {label} ↗
      </a>
      {note ? <p className="demo-note" id={noteId}>{note}</p> : null}
    </div>
  );
}
