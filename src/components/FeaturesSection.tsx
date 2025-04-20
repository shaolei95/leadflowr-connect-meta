
import { Cloud, Database, Link, Settings, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Link className="h-6 w-6 text-brand-purple" />,
    title: "Easy Integration",
    description: "Connect your CRM and Meta account in minutes with our user-friendly interface."
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-purple" />,
    title: "Real-time Syncing",
    description: "Automatically sync your lead and conversion data in real-time to maximize campaign performance."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-purple" />,
    title: "Secure & Compliant",
    description: "All connections are encrypted and compliant with privacy regulations like GDPR and CCPA."
  },
  {
    icon: <Settings className="h-6 w-6 text-brand-purple" />,
    title: "Custom Mapping",
    description: "Map your CRM fields to Meta parameters with our intuitive mapping tool."
  },
  {
    icon: <Database className="h-6 w-6 text-brand-purple" />,
    title: "Multiple CRMs",
    description: "Support for leading CRM platforms including Salesforce, HubSpot, Zoho, and more."
  },
  {
    icon: <Cloud className="h-6 w-6 text-brand-purple" />,
    title: "No Code Required",
    description: "Implement Meta's Conversions API without any development resources."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to seamlessly connect your CRM data with Meta's Conversions API
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
