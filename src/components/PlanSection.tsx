import { Bot, Calendar, MapPin, Clock } from "lucide-react";

const PlanSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="plan" className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Tu plan ideal te espera
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro asistente inteligente conoce cada rincón de Tucumán. 
              Cuéntale tus preferencias y él diseñará el itinerario perfecto 
              para tu viaje, optimizando tiempo y experiencias según tus gustos.
            </p>
            
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 my-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Itinerarios</h3>
                <p className="text-sm text-muted-foreground">Planes personalizados</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Rutas</h3>
                <p className="text-sm text-muted-foreground">Caminos optimizados</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">24/7</h3>
                <p className="text-sm text-muted-foreground">Siempre disponible</p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("chatbot")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Bot size={24} />
              Pregúntale al bot
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-card-border p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={16} className="text-primary-foreground" />
                  </div>
                  <div className="bg-accent p-3 rounded-lg flex-1">
                    <p className="text-sm text-foreground">
                      ¡Hola! Cuéntame qué te gusta hacer y te armo el itinerario perfecto para Tucumán.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm text-primary-foreground">
                      Me gustan las aventuras en la naturaleza y la historia colonial.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-medium">TU</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={16} className="text-primary-foreground" />
                  </div>
                  <div className="bg-accent p-3 rounded-lg flex-1">
                    <p className="text-sm text-foreground">
                      ¡Perfecto! Te sugiero: Día 1 - Casa Histórica y centro. Día 2 - Tafí del Valle y parapente...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;