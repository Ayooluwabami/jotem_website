import { Shield, Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet international quality standards",
    },
    {
      icon: Award,
      title: "10+ Years",
      description: "Proven excellence in agro-commodity trading",
    },
    {
      icon: CheckCircle2,
      title: "500+ Farmers",
      description: "Supporting agricultural communities",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-background animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <badge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;