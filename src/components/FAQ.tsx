import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What products does Jotem Agro supply?",
      answer: "We supply premium agricultural commodities including cassava (chips and starch), maize, soybeans, and other quality farm produce sourced directly from trusted Nigerian farmers.",
    },
    {
      question: "What is your minimum order quantity?",
      answer: "Our minimum order quantity varies by product. Please contact us directly to discuss your specific needs and we'll provide customized solutions for your business.",
    },
    {
      question: "Do you deliver outside Ibadan?",
      answer: "Yes! We have a robust logistics network that enables us to deliver across Nigeria and export to international markets. Contact us to discuss delivery options for your location.",
    },
    {
      question: "How do you ensure product quality?",
      answer: "We work directly with trusted farmers and implement rigorous quality control measures at every stage. All products meet international quality standards and undergo thorough inspection before delivery.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, cheques, and other secure payment options. Our team will work with you to arrange convenient payment terms.",
    },
    {
      question: "Can I visit your facility?",
      answer: "Absolutely! We welcome visits to our facilities. Please contact us in advance to schedule a visit to either our head office at Olope-Meji or our branch office at Mokola, Ibadan.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our products and services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* <div className="mt-10 p-6 bg-muted rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="tel:+2347041181822"
              className="text-primary font-semibold hover:underline text-lg"
            >
              Call us: +234 704 118 1822
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
