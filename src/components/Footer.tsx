import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
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
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/jotemagro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/jotemagro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@jotemagro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jotemagro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
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
                <a href="#hero" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+2347041181822" className="hover:text-secondary transition-colors">
                  +234 704 118 1822
                </a>
              </li>
              <li>
                <a href="tel:+2348163011685" className="hover:text-secondary transition-colors">
                  +234 816 301 1685
                </a>
              </li>
              <li className="pt-2">
                <strong>Head Office:</strong>
                <br />
                Km 17, Ibadan-Ife Expressway, Olope-Meji, Ibadan
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
