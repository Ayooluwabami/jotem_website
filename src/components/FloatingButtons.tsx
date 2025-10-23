import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348163011685"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          <Button
            size="lg"
            className="relative bg-[#25D366] hover:bg-[#22C55E] text-white rounded-full w-14 h-14 shadow-2xl"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed bottom-24 right-6 z-40 bg-primary hover:bg-primary/90 text-white rounded-full w-12 h-12 shadow-2xl animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
