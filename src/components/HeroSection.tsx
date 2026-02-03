import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, MessageCircle, Youtube, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: MessageCircle, label: "Discord", href: "https://discord.com" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ];

  const tags = ["Developer", "Designer", "Creator", "Open Source"];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-muted-foreground">I'm</span>
              <br />
              <span className="text-foreground">Your_Name</span>
            </h1>
            
            <Badge variant="secondary" className="text-sm px-3 py-1">
              they/them
            </Badge>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            Full-stack developer. I build beautiful web experiences.
            <br />
            Specializing in{" "}
            <span className="text-foreground underline underline-offset-4 decoration-primary">
              React
            </span>{" "}
            and{" "}
            <span className="text-foreground underline underline-offset-4 decoration-primary">
              TypeScript
            </span>
            .
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="secondary"
                className="gap-2 rounded-full border border-border hover:border-primary/50 transition-colors"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-3 py-1 text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Content - Stacked Photos */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="relative w-64 md:w-80">
            {/* Background Image */}
            <div className="absolute -rotate-6 -translate-x-4 translate-y-4 w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Profile background"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Foreground Image */}
            <div className="relative rotate-3 translate-x-4 -translate-y-4 w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
