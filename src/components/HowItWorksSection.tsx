
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your CRM",
    description: "Select your CRM provider from our integration menu and authorize the connection with your credentials.",
    color: "from-brand-purple to-brand-blue"
  },
  {
    number: "02",
    title: "Map Your Data",
    description: "Define which CRM fields should be sent to Meta's Conversions API using our visual mapping tool.",
    color: "from-brand-blue to-brand-skyblue"
  },
  {
    number: "03",
    title: "Connect Meta Account",
    description: "Link your Facebook Business Manager account and select the pixel ID for your integration.",
    color: "from-brand-skyblue to-teal-400"
  },
  {
    number: "04",
    title: "Activate & Monitor",
    description: "Activate the integration and monitor the connection health in your Leadflowr dashboard.",
    color: "from-teal-400 to-green-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="bg-gradient-to-r from-brand-blue to-brand-skyblue bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            A simple process to integrate your CRM data with Meta's Conversions API
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-brand-purple via-brand-blue to-green-500 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`order-1 md:order-${index % 2 === 0 ? 1 : 2} w-full md:w-1/2 text-center md:text-${index % 2 === 0 ? 'right' : 'left'} md:pr-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent inline-flex`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto md:mx-0 md:max-w-sm">
                    {step.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 order-0 md:order-${index % 2 === 0 ? 2 : 1}">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {index < 3 ? <ArrowRight className="h-4 w-4" /> : "✓"}
                  </div>
                </div>
                
                <div className={`order-2 md:order-${index % 2 === 0 ? 2 : 1} w-full md:w-1/2 md:pl-12 md:pr-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="text-4xl font-bold opacity-10 md:block hidden">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
