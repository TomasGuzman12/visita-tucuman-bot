import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";
// Importamos la imagen del logo
import logoTapir from "../assets/logo-tapir.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoTapir} 
              alt="Logo Tapir" 
              className="h-10 w-auto" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("experiencias")}
                className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                Experiencias
              </button>
              <button
                onClick={() => scrollToSection("plan")}
                className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                Planificá
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                FAQ
              </button>
              <a
                href="#chatbot"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("chatbot");
                }}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
              >
                <Bot size={16} />
                Habla con el bot
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-muted-foreground focus:outline-none focus:text-muted-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              <button
                onClick={() => scrollToSection("experiencias")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                Experiencias
              </button>
              <button
                onClick={() => scrollToSection("plan")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                Planificá
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-muted-foreground transition-colors duration-200 text-sm font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("chatbot")}
                className="block w-full text-left px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
              >
                <Bot size={16} />
                Habla con el bot
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;