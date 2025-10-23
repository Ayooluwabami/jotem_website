import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adekunle Ogunleye",
      role: "Poultry Farm Owner",
      location: "Ibadan, Oyo State",
      rating: 5,
      text: "Jotem Agro has transformed my poultry business. Their quality feed and expert advice helped me increase production by 40%. Highly recommended!",
    },
    {
      name: "Mrs. Chioma Nwosu",
      role: "Crop Farmer",
      location: "Ife, Osun State",
      rating: 5,
      text: "The best agricultural supply company I've worked with. Their products are top-quality and their team is always ready to help with technical guidance.",
    },
    {
      name: "Ibrahim Mohammed",
      role: "Livestock Farmer",
      location: "Ogbomoso, Oyo State",
      rating: 5,
      text: "Professional service and reliable delivery. Jotem Agro understands the needs of Nigerian farmers. They've been instrumental in growing my farm.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">What Farmers Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied farmers across Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-secondary mb-4 opacity-50" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
