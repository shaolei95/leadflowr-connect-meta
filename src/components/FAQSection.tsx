
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What CRM platforms does Leadflowr support?",
    answer: "Leadflowr supports major CRM platforms including Salesforce, HubSpot, Zoho, Pipedrive, and many others. Our platform is constantly expanding to include more integrations based on customer needs."
  },
  {
    question: "Is any coding required to set up the integration?",
    answer: "None at all! Leadflowr is designed to be completely code-free. Our intuitive interface guides you through the entire process with simple point-and-click steps."
  },
  {
    question: "How secure is my CRM data with Leadflowr?",
    answer: "Security is our top priority. Leadflowr uses encryption for all data transfers and doesn't store your actual CRM data. We only facilitate the connection between your CRM and Meta, following all privacy regulations including GDPR and CCPA."
  },
  {
    question: "Can I control which data is sent to Meta?",
    answer: "Absolutely. Our mapping tool gives you complete control over which CRM fields are shared with Meta's Conversions API. You can select specific fields and customize the data flow based on your needs."
  },
  {
    question: "How long does it take to set up Leadflowr?",
    answer: "Most users complete the entire setup process in under 10 minutes. Once you have your CRM credentials and Meta Business account details ready, the integration can be set up and running very quickly."
  },
  {
    question: "Does Leadflowr offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Leadflowr and the integration process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-brand-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
