import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="About Us" 
        subtitle="Our Story & Mission"
        description="Transforming agriculture through innovation, sustainability, and community empowerment"
      />
      <About />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
