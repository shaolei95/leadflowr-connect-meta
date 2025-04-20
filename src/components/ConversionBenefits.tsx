
import { TrendingUp, CircleCheck, CircleDollarSign, CirclePercent } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-purple" />,
    title: "Higher Conversion Rates",
    description: "Up to 30% increase in conversion rates through accurate audience targeting and real-time data sync.",
    metric: "+30%"
  },
  {
    icon: <CircleCheck className="h-8 w-8 text-brand-purple" />,
    title: "Improved Match Rates",
    description: "Better customer matching with Meta's database leads to more effective ad targeting.",
    metric: "95%"
  },
  {
    icon: <CircleDollarSign className="h-8 w-8 text-brand-purple" />,
    title: "Lower Cost Per Acquisition",
    description: "Reduce your CPA by targeting users more likely to convert based on CRM data.",
    metric: "-25%"
  },
  {
    icon: <CirclePercent className="h-8 w-8 text-brand-purple" />,
    title: "Better ROAS",
    description: "Achieve higher return on ad spend through enhanced conversion tracking.",
    metric: "2.5x"
  }
];

const ConversionBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Drive Better <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-600">
            See dramatic improvements in your ad performance after integrating your CRM data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-brand-purple">{benefit.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionBenefits;
