import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Contact Us" 
        subtitle="Get In Touch"
        description="We're here to answer your questions and serve your agricultural needs"
      />
      
      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Head Office */}
            <Card className="animate-fade-in hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Head Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Km 17, Ibadan-Ife Expressway,<br />
                  Opposite Skretting Nigeria Limited,<br />
                  Olope-Meji, Ibadan,<br />
                  Oyo State, Nigeria
                </p>
              </CardContent>
            </Card>

            {/* Branch Office */}
            <Card className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Branch Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  68, Adelaja Street,<br />
                  Mokola, Ibadan,<br />
                  Oyo State, Nigeria
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="tel:+2347041181822" className="block text-primary hover:underline font-semibold">
                  +234 704 118 1822
                </a>
                <a href="tel:+2348163011685" className="block text-primary hover:underline font-semibold">
                  +234 816 301 1685
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@jotemagro.com" className="text-primary hover:underline font-semibold">
                  info@jotemagro.com
                </a>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="animate-fade-in hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Monday - Friday</p>
                    <p>8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Saturday</p>
                    <p>9:00 AM - 4:00 PM</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-semibold text-foreground mb-2">Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Jotem Agro */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-muted">
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl text-primary mb-6 text-center">Why Choose Jotem Agro?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Direct sourcing from trusted farmers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Quality guaranteed products</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Competitive pricing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Reliable supply chain</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Flexible ordering options</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-muted-foreground">Sustainable practices</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
