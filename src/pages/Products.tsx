import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage1 from "@/assets/products-hero-1.jpg";
import heroImage2 from "@/assets/products-hero-2.jpg";
import cassavaImage from "@/assets/product-cassava.jpg";
import maizeImage from "@/assets/product-maize.jpg";
import soybeanImage from "@/assets/product-soybean.jpg";
import cashewImage from "@/assets/product-cashew.jpg";
import shearNutsImage from "@/assets/product-shear-nuts.jpg";
import sorghumImage from "@/assets/product-sorghum.jpg";

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      name: "Cassava",
      description: "High-quality cassava tubers sourced directly from local farmers. Rich in carbohydrates and perfect for various culinary applications. Available in bulk quantities.",
      image: cassavaImage,
      category: "Root Crops",
    },
    {
      name: "Yellow Maize",
      description: "Yellow maize/corn with excellent nutritional value. Ideal for livestock feed and human consumption. Carefully selected and processed for quality.",
      image: maizeImage,
      category: "Grains",
    },
    {
      name: "Soybeans",
      description: "Protein-rich soybeans perfect for animal feed and food processing. Sustainably sourced from Nigerian farms with guaranteed quality and freshness.",
      image: soybeanImage,
      category: "Legumes",
    },
    {
      name: "Cashew Nuts",
      description: "Premium quality cashew nuts sourced from local farmers. Rich in healthy fats and perfect for snacking or processing. Available in bulk quantities.",
      image: cashewImage,
      category: "Nuts",
    },
    {
      name: "Shear Nuts",
      description: "High-quality shear nuts sustainably harvested from Nigerian farms. Excellent source of natural oils and perfect for various applications.",
      image: shearNutsImage,
      category: "Nuts",
    },
    {
      name: "Sorghum",
      description: "Premium sorghum grains ideal for livestock feed and food processing. Drought-resistant crop with excellent nutritional value.",
      image: sorghumImage,
      category: "Grains",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
     
      {/* Hero Section with Animated Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center py-12 relative">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <ShoppingBag className="mr-2 h-5 w-5 text-secondary" />
              <span className="text-white font-semibold">Premium Agricultural Products</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Quality Products from
              <br />
              <span className="text-secondary">Farm to Market</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              We supply premium agricultural commodities including cassava, maize, soybeans, and more. Connecting Nigerian farmers to local and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg group"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/impact">
                <Button
                  size="lg"
                  variant="outline"
                  className={`
                    w-full sm:w-auto
                    border-2 border-white text-white
                    bg-transparent hover:bg-white hover:text-primary
                    font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg
                  `}
                >
                  Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-secondary w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium agricultural commodities sourced from trusted Nigerian farmers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">{product.description}</CardDescription>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      ORDER
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Custom Orders & Bulk Supply
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer flexible ordering options for businesses of all sizes. Whether you need regular supply contracts or one-time bulk orders, we've got you covered.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium agricultural produce through responsible sourcing, empowered farmer networks, robust supply chains, and transparent business practices—building trust, consistency, and long-term value for all stakeholders.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To nourish the world from Africa's fields, becoming a trusted force in agro-commodity trading that connects our continent's abundant harvests to global markets through excellence, integrity, and sustainability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustBadges />
      <CTASection />
      <FAQ />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Products;