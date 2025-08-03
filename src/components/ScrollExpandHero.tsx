import { Bot, ArrowRight } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import heroImage from "@/assets/hero-tucuman.jpg";
import casaHistorica from "@/assets/casa-historica.webp";

const ScrollExpandHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={casaHistorica}
      bgImageSrc={heroImage}
      title="Descubrí Tucumán"
      date="Jardín de la República"
      scrollToExpand="Hacé scroll para expandir"
      textBlend={true}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Historia, aventura y naturaleza te esperan
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Desde la histórica Casa donde se declaró la Independencia hasta los paisajes 
          más espectaculares del noroeste argentino, Tucumán combina patrimonio cultural 
          con aventuras únicas en cada rincón de la provincia.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              🏛️ Patrimonio Histórico
            </h3>
            <p className="text-muted-foreground">
              Recorré los sitios donde se forjó la patria y descubrí la arquitectura colonial 
              que cuenta nuestra historia.
            </p>
          </div>
          
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              🏔️ Aventuras Naturales
            </h3>
            <p className="text-muted-foreground">
              Desde parapente en Loma Bola hasta trekking en San Javier, 
              viví experiencias que elevan la adrenalina.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("experiencias")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
          >
            Ver experiencias
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("chatbot")}
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
          >
            <Bot size={20} />
            Consultar al bot
          </button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
};

export default ScrollExpandHero;