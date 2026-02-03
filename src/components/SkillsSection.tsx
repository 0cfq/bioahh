import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "TypeScript", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
  { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "Next.js", color: "bg-foreground/10 text-foreground border-foreground/20" },
  { name: "Tailwind CSS", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { name: "PostgreSQL", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  { name: "Git", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "Figma", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Tools</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`text-sm px-4 py-2 ${skill.color} cursor-default hover:scale-105 transition-transform`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground mt-6 text-sm">
          Drag them anywhere ✨
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
