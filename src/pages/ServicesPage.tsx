import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Our Services" 
        subtitle="Comprehensive Solutions"
        description="Premium agricultural supplies, expert consulting, and modern farming solutions"
      />
      <Services />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
