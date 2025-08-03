import { Bot, MessageCircle, Clock, Zap } from "lucide-react";

const ChatBotSection = () => {
  return (
    <section id="chatbot" className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Asistente de Viaje 24/7
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pregúntale cualquier cosa sobre Tucumán. Nuestro bot conoce cada rincón
            y te ayudará a planificar el viaje perfecto.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Conversación Natural</h3>
            <p className="text-sm text-muted-foreground">Chatea como con un amigo local</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Disponible 24/7</h3>
            <p className="text-sm text-muted-foreground">Siempre listo para ayudarte</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Respuestas Instant</h3>
            <p className="text-sm text-muted-foreground">Información al momento</p>
          </div>
        </div>

        {/* ChatBot Container */}
        <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <Bot className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">TucumánBot</h3>
              <p className="text-sm opacity-90">Tu guía personal de Tucumán</p>
            </div>
          </div>
          
          {/* ChatBot Embed Container */}
          <div 
            id="chatbase-embed" 
            className="w-full bg-card"
          >
            <iframe 
              src="https://www.chatbase.co/chatbot-iframe/e0v61zj4YxVNM4nCpl2q9" 
              width="100%" 
              style={{ height: '100%', minHeight: '700px' }} 
              frameBorder="0" 
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBotSection;