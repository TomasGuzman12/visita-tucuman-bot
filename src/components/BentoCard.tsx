import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface BentoCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  iconName: string;
  size: "small" | "medium" | "large" | "tall";
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 row-span-1 md:col-span-1",
  large: "col-span-1 row-span-1 md:col-span-2",
  tall: "col-span-1 row-span-1 md:row-span-2"
};

const BentoCard = ({ title, category, description, imageUrl, iconName, size }: BentoCardProps) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[iconName] as LucideIcon;

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        relative group cursor-pointer rounded-lg overflow-hidden
        bg-card border border-card-border
        transition-all duration-200 ease-out
        hover:scale-[1.02] hover:shadow-lg
        min-h-[250px]
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Category Badge */}
        <div className="self-start">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-foreground/90 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
            {IconComponent && <IconComponent size={14} />}
            {category}
          </span>
        </div>

        {/* Title and Description */}
        <div className="text-primary-foreground">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground transition-colors duration-200">
            {title}
          </h3>
          <p className="text-primary-foreground/90 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BentoCard;