import { ArrowRight, Bot } from "lucide-react";
import heroImage from "@/assets/hero-tucuman.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista aérea del centro histórico de Tucumán"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Descubrí lo mejor de
            <br />
            <span className="text-primary-foreground">Tucumán</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Historia, aventura, naturaleza y cultura en el jardín de la
            República
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button
              onClick={() => scrollToSection("experiencias")}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              Planificá tu viaje
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection("chatbot")}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Bot size={20} />
              Consúltale al bot
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;