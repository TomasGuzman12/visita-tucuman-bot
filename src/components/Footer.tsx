import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Conoce Tucumán</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Descubrí la magia del jardín de la República. Historia, aventura 
              y paisajes únicos te esperan en cada rincón de nuestra provincia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("experiencias")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Experiencias
              </button>
              <button
                onClick={() => scrollToSection("plan")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Planificá tu viaje
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("chatbot")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Asistente IA
              </button>
            </nav>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categorías</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Historia
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Aventura
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Naturaleza
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cultura
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Gastronomía
              </a>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  San Miguel de Tucumán, Argentina
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +54 381 XXX-XXXX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  info@conocetucuman.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm text-center md:text-left">
            © 2024 Conoce Tucumán. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/80 text-sm text-center md:text-right">
            Desarrollado por{" "}
            <span className="font-semibold text-primary-foreground">Koi Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;