import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, testimonials } from "@/data/experiences";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-card-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Testimonials Bento */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Lo que dicen los viajeros
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-card-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground text-sm mb-2 leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{testimonial.name}</span>
                        <span className="mx-1">•</span>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;