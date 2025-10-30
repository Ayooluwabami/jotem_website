import heroImage from "@/assets/hero-farm.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Jotem Agro Farm" 
          className="w-full h-full object-cover animate-[subtle-zoom_20s_ease-in-out_infinite]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 animate-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-12">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
            <br />
            <span className="text-secondary">{subtitle}</span>
          </h1>
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
