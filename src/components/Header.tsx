import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xl font-bold text-foreground">Your_Name</span>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-border">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-4 hover:bg-accent"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-4 hover:bg-accent"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-4 hover:bg-accent"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-4 right-4 mt-2 bg-secondary/95 backdrop-blur-md rounded-2xl border border-border p-4 flex flex-col gap-2">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-xl"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-xl"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-xl"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
