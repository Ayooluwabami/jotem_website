import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            PARTNER WITH US
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's work together to bring quality agricultural products to your business. 
            Get in touch with our team today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="group font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Us Now
              </Button>
            </Link>
            
            <a href="tel:+2347041181822">
              <Button 
                size="lg" 
                variant="outline"
                className="group font-semibold px-8 py-6 text-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                +234 704 118 1822
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
