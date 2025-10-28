import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    </div>
  );
};

export default ServicesPage;
