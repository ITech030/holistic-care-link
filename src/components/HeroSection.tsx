
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children?: ReactNode;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundClass = "bg-gradient-to-r from-nexus-500 to-care-500",
  children 
}: HeroSectionProps) => {
  return (
    <section className={`${backgroundClass} text-white py-16 md:py-24`}>
      <div className="nexus-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 mb-6 animate-fade-in">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
