
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-darkpurple to-brand-purple/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Supercharge Your Meta Ads Performance?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Connect your CRM data with Meta's Conversions API in minutes. No code, no hassle, just better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-purple hover:bg-white/90 h-12 px-8 text-lg transition-colors">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute right-0 top-0 h-64 w-64 bg-brand-blue opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute left-0 bottom-0 h-72 w-72 bg-brand-purple opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default CTASection;
