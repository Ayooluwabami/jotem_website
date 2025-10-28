import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Award, Users } from "lucide-react";
import teamMeetingImage from "@/assets/team-meeting.jpg";
import ceoImage from "@/assets/ceo-john.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver premium agricultural produce through responsible sourcing, empowered farmer networks, robust supply chains, and transparent business practices.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We provide premium agricultural products that meet international standards.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Empowering farmers and contributing to food security across communities.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Jotem Agro Allied Limited
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in agricultural excellence and innovation
          </p>
        </div>

        {/* Intro + Values */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
              Transforming Agriculture Through Innovation
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              <strong className="text-foreground">Jotem Agro Allied Limited</strong> is a
              forward-thinking agricultural enterprise dedicated to transforming the
              agricultural landscape through innovation, sustainability, and community
              empowerment.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in agricultural commodity trading, supply chain solutions,
              and agro-allied services that empower farmers and nourish communities.
            </p>
            <div className="space-y-3">
              {[
                "Premium quality agricultural commodities",
                "Direct farmer partnerships",
                "Sustainable agricultural practices",
                "Community-focused initiatives",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-slide-in-right">
            {values.map((v, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5 text-center">
                  <v.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">
                    {v.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="mb-12 md:mb-16 bg-background rounded-2xl p-6 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
            To nourish the world from Africa's fields, becoming a trusted force in
            agro-commodity trading that connects our continent's abundant harvests to
            global markets through excellence, integrity, and sustainability.
          </p>
        </div>

        {/* CEO Section */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-12">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 animate-fade-in">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={ceoImage}
                  alt="John Folorunsho – CEO"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg -ml-8 md:-ml-12 lg:ml-0 lg:mt-8">
              <h4 className="text-lg md:text-xl font-bold text-primary mb-1">Leadership</h4>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                John Folorunsho
              </h3>
              <p className="text-sm md:text-base font-medium text-primary mb-4">
                Chief Executive Officer
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Leading Jotem Agro Allied Limited with a vision for sustainable
                agriculture and community empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section – Added AFTER CEO */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="h-64 md:h-full">
                <img
                  src={teamMeetingImage}
                  alt="Jotem Agro team meeting with partners"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Side */}
              <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Our Team</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Collaborating with partners and stakeholders to achieve shared
                  sustainability outcomes and drive agricultural excellence across Nigeria
                  and Africa.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-12 text-white text-center animate-scale-in">
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            From Farm to Market, Excellence at Every Step
          </h3>
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
            We are committed to excellence, quality, and the prosperity of the
            agricultural sector. Join us on our journey to cultivate a better tomorrow
            for African agriculture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;