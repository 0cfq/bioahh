import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Project {
  category: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

const projects: Project[] = [
  {
    category: "Web App",
    title: "Project One",
    description: "A modern web application built with React and TypeScript.",
    href: "#",
    color: "text-primary",
  },
  {
    category: "Open Source",
    title: "Project Two",
    description: "Contributing to the developer community.",
    href: "#",
    color: "text-green-400",
  },
  {
    category: "Design",
    title: "Project Three",
    description: "UI/UX design work and creative projects.",
    href: "#",
    color: "text-purple-400",
  },
  {
    category: "API",
    title: "Project Four",
    description: "Backend services and API development.",
    href: "#",
    color: "text-orange-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Main Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-sm font-medium uppercase tracking-wide ${project.color}`}>
                      {project.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
