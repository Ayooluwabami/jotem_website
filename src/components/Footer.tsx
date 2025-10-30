import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Jotem Agro" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-xl font-bold">Jotem Agro Allied Limited</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Empowering agriculture and nourishing communities through innovation, quality, and sustainable farming solutions.
            </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/JotemAgroAlliedLimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://x.com/jotemagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://instagram.com/jotemagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@jotemagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jotemagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="tel:+2347041181822" className="hover:text-secondary transition-colors flex items-center space-x-2">
                  <span>📞</span>
                  <span>+234 704 118 1822</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348163011685" className="hover:text-secondary transition-colors flex items-center space-x-2">
                  <span>📞</span>
                  <span>+234 816 301 1685</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@jotemagro.com" className="hover:text-secondary transition-colors flex items-center space-x-2">
                  <span>✉️</span>
                  <span>info@jotemagro.com</span>
                </a>
              </li>
              <li className="pt-2">
                <strong className="block mb-1">Head Office:</strong>
                <span className="text-sm">Km 17, Ibadan-Ife Expressway,<br />Olope-Meji, Ibadan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Jotem Agro Allied Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
