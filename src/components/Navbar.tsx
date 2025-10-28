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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-primary/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Jotem Agro Allied Limited" className="h-12 w-12 rounded-full object-cover" />
            <span className={`text-sm md:text-lg font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Jotem Agro Allied Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-semibold ${
                isActive("/") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-semibold ${
                isActive("/about") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors font-semibold ${
                isActive("/services") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-colors font-semibold ${
                isActive("/gallery") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/impact" 
              className={`transition-colors font-semibold ${
                isActive("/impact") ? "text-secondary" : ""
              } ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              Our Impact
            </Link>
            <Link to="/contact">
              <Button 
                className={`font-semibold ${
                  isScrolled 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
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
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
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
