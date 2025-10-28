import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Leaf, Handshake, TrendingUp, Sprout, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import povertyImage from "@/assets/sdg-poverty.jpg";
import hungerImage from "@/assets/sdg-hunger.jpg";
import accessImage from "@/assets/sdg-access.jpg";
import communityImage from "@/assets/community-impact.jpg";

const SDGImpact = () => {
  const problems = [
    {
      title: "No Poverty (SDG 1)",
      description: "Many rural farming communities struggle with economic instability and limited market access, keeping them in cycles of poverty.",
      image: povertyImage,
      solution: "We provide steady market access and fair prices to smallholder farmers, increasing their income stability and reducing rural poverty by supporting livelihoods in local agricultural communities.",
      icon: Heart,
    },
    {
      title: "Zero Hunger (SDG 2)",
      description: "Food insecurity affects millions, with challenges in getting nutritious food from farms to communities that need it most.",
      image: hungerImage,
      solution: "By strengthening agricultural value chains, we ensure food security and sustainable food systems. We encourage local production to improve access to nutritious food and reduce post-harvest losses through efficient distribution networks.",
      icon: Sprout,
    },
    {
      title: "Access to Healthy Food",
      description: "Remote and underserved areas often lack access to fresh, nutritious agricultural products, limiting dietary diversity and health outcomes.",
      image: accessImage,
      solution: "We bridge the gap between farmers and communities, ensuring fresh produce reaches places where food cannot easily get to. Our supply chain connects farmers directly to markets, improving food accessibility for everyone in the chain.",
      icon: Users,
    },
  ];

  const sdgSupport = [
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "By promoting safe, high-quality, and traceable food commodities, we help ensure healthier consumption. Supporting clean production practices (e.g., minimizing pesticide use) promotes community health.",
      icon: Heart,
      color: "from-green-500 to-emerald-600",
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Creating jobs along the agricultural value chain—from farming to logistics—contributes to economic development. Supporting smallholder farmers helps formalize livelihoods and boost rural economies.",
      icon: TrendingUp,
      color: "from-red-500 to-pink-600",
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Encouraging sustainable sourcing and reducing food waste in supply chains. Promoting traceability and ethical trading practices for commodities.",
      icon: Leaf,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Supporting climate-smart agriculture and sustainable land management practices. Reducing carbon emissions in transport and logistics through efficiency improvements.",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
    },
    {
      number: 15,
      title: "Life on Land",
      description: "Promoting sustainable farming helps prevent soil degradation and deforestation. Supporting biodiversity-friendly practices (e.g., crop rotation, agroforestry).",
      icon: Leaf,
      color: "from-green-600 to-lime-500",
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description: "Collaborating with multinationals, NGOs, government agencies, and farmers' cooperatives to achieve shared sustainability outcomes. Contributing to global agricultural sustainability networks.",
      icon: Handshake,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Our Impact" 
        subtitle="Sustainable Development Goals"
        description="Contributing to a better world through agriculture and community empowerment"
      />

      {/* Problems We're Solving */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Problems We're Solving
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tackling the root causes of food insecurity and poverty through sustainable agricultural solutions
            </p>
          </div>

          <div className="space-y-12">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img
                      src={problem.image}
                      alt={problem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <problem.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary">{problem.title}</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-destructive mb-2">The Challenge:</h4>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Our Solution:</h4>
                        <p className="text-muted-foreground">{problem.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How We Give Back to Communities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Fair Trade Practices</h4>
                    <p className="text-muted-foreground">Ensuring farmers receive fair compensation for their produce, empowering them economically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Training & Education</h4>
                    <p className="text-muted-foreground">Providing farmers with knowledge on sustainable practices and modern farming techniques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Community Food Programs</h4>
                    <p className="text-muted-foreground">Supporting local food distribution initiatives to ensure communities have access to nutritious food.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Infrastructure Development</h4>
                    <p className="text-muted-foreground">Investing in storage facilities and transportation networks to reduce food waste and improve access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src={communityImage}
                alt="Community Impact"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SDG Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Supporting UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our work contributes to multiple global sustainability objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgSupport.map((sdg, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${sdg.color}`}></div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-r ${sdg.color} rounded-lg flex items-center justify-center`}>
                      <sdg.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${sdg.color} bg-clip-text text-transparent`}>
                      SDG {sdg.number}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{sdg.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{sdg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SDGImpact;
