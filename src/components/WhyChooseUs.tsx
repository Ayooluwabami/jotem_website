import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Leaf, TrendingUp, Users2, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium products that meet international standards with rigorous quality control.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable supply chain ensuring your orders arrive when you need them.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible solutions for long-term agricultural success.",
    },
    {
      icon: TrendingUp,
      title: "Expert Guidance",
      description: "Professional consulting to maximize yields and optimize farm operations.",
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "Empowering farmers with training, resources, and ongoing support.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Years of excellence serving Nigeria's agricultural community.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in agricultural excellence with proven expertise and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
