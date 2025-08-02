import BentoCard from "./BentoCard";
import { experiences } from "@/data/experiences";

const BentoGrid = () => {
  return (
    <section id="experiencias" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Experiencias únicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde historia colonial hasta aventuras extremas, Tucumán te ofrece
            vivencias que quedarán en tu memoria para siempre
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {experiences.map((experience) => (
            <BentoCard
              key={experience.id}
              title={experience.title}
              category={experience.category}
              description={experience.description}
              imageUrl={experience.imageUrl}
              iconName={experience.iconName}
              size={experience.size as "small" | "medium" | "large" | "tall"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;