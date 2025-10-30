import { Card } from "@/components/ui/card";
import grainProcessingImage from "@/assets/gallery-grain-processing.jpg";
import scorpionTruckImage from "@/assets/gallery-scorpion-truck.jpg";
import facilityTrucksImage from "@/assets/gallery-facility-trucks.jpg";
import loadedTruckImage from "@/assets/gallery-loaded-truck.jpg";
import deliveryStaffImage from "@/assets/gallery-delivery-staff.jpg";
import teamGroupImage from "@/assets/gallery-team-group.jpg";
import blueTruckImage from "@/assets/gallery-blue-truck.jpg";
import grainUnloadingImage from "@/assets/gallery-grain-unloading.jpg";

const Gallery = () => {
  const images = [
    { src: grainProcessingImage, alt: "Grain processing at our facility", title: "Grain Processing" },
    { src: scorpionTruckImage, alt: "Scorpion delivery truck with loaded grain", title: "Logistics Fleet" },
    { src: loadedTruckImage, alt: "Truck loaded with agricultural products", title: "Product Distribution" },
    { src: deliveryStaffImage, alt: "Staff member with delivery truck", title: "Dedicated Team" },
    { src: teamGroupImage, alt: "Jotem Agro team at youth initiative event", title: "Community Engagement" },
    { src: blueTruckImage, alt: "Blue delivery truck at facility", title: "Transport Operations" },
    { src: grainUnloadingImage, alt: "Grain unloading process", title: "Warehouse Operations" },
    { src: facilityTrucksImage, alt: "Fleet of trucks at warehouse facility", title: "Our Facility" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer animate-scale-in hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="h-1 w-0 bg-secondary group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
