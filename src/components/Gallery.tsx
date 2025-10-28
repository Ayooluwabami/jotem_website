import { Card } from "@/components/ui/card";
import warehouseImage from "@/assets/warehouse.jpg";
import livestockImage from "@/assets/livestock.jpg";
import consultingImage from "@/assets/consulting.jpg";
import heroImage from "@/assets/hero-farm.jpg";
import cassavaPlantImage from "@/assets/gallery-cassava-plant.jpg";
import truckImage from "@/assets/gallery-truck.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Modern agricultural farm", title: "Our Farm Operations" },
    { src: warehouseImage, alt: "Agricultural warehouse", title: "Quality Supplies" },
    { src: livestockImage, alt: "Livestock farming", title: "Livestock & Poultry" },
    { src: consultingImage, alt: "Farm consulting", title: "Expert Consultation" },
    { src: cassavaPlantImage, alt: "Cassava plant cultivation", title: "Cassava Farming" },
    { src: truckImage, alt: "Product delivery truck", title: "Logistics & Distribution" },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our agricultural operations and facilities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            More images and updates coming soon. Follow us on social media for the latest from our operations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
