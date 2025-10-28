import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Package, Sprout, GraduationCap } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import livestockImage from "@/assets/livestock.jpg";
import consultingImage from "@/assets/consulting.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Agricultural Supplies",
      description: "Premium quality feed, fertilizers, seeds, and farming equipment from trusted manufacturers.",
      image: warehouseImage,
    },
    {
      icon: Sprout,
      title: "Livestock & Poultry",
      description: "Complete solutions for livestock and poultry farming including quality feed and veterinary supplies.",
      image: livestockImage,
    },
    {
      icon: GraduationCap,
      title: "Farm Consulting",
      description: "Expert guidance on modern farming techniques, crop management, and sustainable practices.",
      image: consultingImage,
    },
    {
      icon: Wheat,
      title: "Commodity Trading",
      description: "End-to-end agricultural commodity trading connecting Nigerian farmers to local and global markets.",
      image: null,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive agricultural solutions tailored to meet your farming needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Farmers Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
