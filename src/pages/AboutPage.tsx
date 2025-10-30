import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;