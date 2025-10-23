import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between traditional farming and modern agricultural technology for sustainable development.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We provide premium agricultural products and services that meet international standards.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Empowering farmers and contributing to food security across Nigerian communities.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">About Jotem Agro Allied Limited</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in agricultural excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Transforming Agriculture Through Innovation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Jotem Agro Allied Limited</strong> is a forward-thinking agricultural enterprise dedicated to transforming the agricultural landscape through innovation, sustainability, and community empowerment.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in modern farming techniques, agricultural supply chain solutions, and agro-allied services that empower farmers and nourish communities. Our mission is to bridge the gap between traditional farming practices and modern agricultural technology, ensuring food security and sustainable development.
            </p>
            <div className="space-y-3">
              {[
                "Premium quality agricultural supplies",
                "Modern farming techniques and training",
                "Sustainable agricultural practices",
                "Community-focused initiatives",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 animate-slide-in-right">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">From Farm to Table, Excellence at Every Step</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We are committed to excellence, quality, and the prosperity of the agricultural sector. Join us on our journey to cultivate a better tomorrow for Nigerian agriculture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
