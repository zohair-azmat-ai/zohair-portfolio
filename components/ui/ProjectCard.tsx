import { type Project } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = project.links.live ?? project.links.liveFrontend;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-950/50">

      {/* Hover accent bar */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500/60 to-violet-500/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Category label */}
      {project.label && (
        <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-zinc-600">
          {project.label}
        </p>
      )}

      {/* Title */}
      <h3 className="mb-2.5 text-lg font-bold tracking-tight text-zinc-100">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-5 text-[14px] leading-relaxed text-zinc-400">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2 pb-5">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-zinc-800" />

      {/* Link */}
      {href && (
        <a
          href={href}
          className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-500 transition-colors hover:text-zinc-200"
        >
          View Project
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      )}
    </div>
  );
}
