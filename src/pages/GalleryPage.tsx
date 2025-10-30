import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Our Gallery" 
        subtitle="See Our Work"
        description="A visual journey through our agricultural operations and achievements"
      />
      <Gallery />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;
