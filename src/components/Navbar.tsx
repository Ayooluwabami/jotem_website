import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src={logo} 
              alt="Jotem Agro Allied Limited" 
              className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
            />
            <span className={`text-sm md:text-lg font-bold transition-all duration-300 ${isScrolled ? "text-primary" : "text-white"} group-hover:text-secondary`}>
              Jotem Agro Allied Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative transition-all duration-300 font-semibold ${
                isActive("/") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`relative transition-all duration-300 font-semibold ${
                isActive("/about") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`relative transition-all duration-300 font-semibold ${
                isActive("/services") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`relative transition-all duration-300 font-semibold ${
                isActive("/gallery") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Gallery
            </Link>
            <Link 
              to="/impact" 
              className={`relative transition-all duration-300 font-semibold ${
                isActive("/impact") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Our Impact
            </Link>
            <Link to="/contact">
              <Button 
                className={`font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isScrolled 
                    ? "bg-secondary hover:bg-secondary/90 text-foreground" 
                    : "bg-secondary hover:bg-secondary/90 text-foreground"
                }`}
              >
                Contact Us
              </Button>
            </Link>
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
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2 ${
                  isActive("/") ? "text-primary" : ""
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2 ${
                  isActive("/about") ? "text-primary" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2 ${
                  isActive("/services") ? "text-primary" : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={closeMobileMenu}
                className={`text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2 ${
                  isActive("/gallery") ? "text-primary" : ""
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/impact"
                onClick={closeMobileMenu}
                className={`text-foreground hover:text-primary transition-colors font-semibold text-left px-4 py-2 ${
                  isActive("/impact") ? "text-primary" : ""
                }`}
              >
                Our Impact
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="px-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-foreground w-full font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
