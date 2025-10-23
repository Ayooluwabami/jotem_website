import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-primary/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Jotem Agro Allied Limited" className="h-12 w-12 rounded-full object-cover" />
            <span className={`text-sm md:text-lg font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Jotem Agro Allied Limited
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")} 
              className={`transition-colors font-semibold ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`transition-colors font-semibold ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className={`transition-colors font-semibold ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("gallery")} 
              className={`transition-colors font-semibold ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Gallery
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className={`font-semibold ${
                isScrolled 
                  ? "bg-primary hover:bg-primary/90" 
                  : "bg-secondary hover:bg-secondary/90 text-foreground"
              }`}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2"
              >
                Gallery
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 mx-4">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
