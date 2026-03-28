import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Other Work"
          title="More Projects"
          subtitle="Other things I've built"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
