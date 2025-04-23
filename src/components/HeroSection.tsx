import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Link, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Connect Your <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">CRM</span> with <span className="bg-gradient-to-r from-brand-blue to-brand-skyblue bg-clip-text text-transparent">Meta CAPI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Leadflowr seamlessly integrates your CRM data with Meta's Conversions API in just two simple steps. No code, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 transition-opacity h-12 px-8 text-lg"
                onClick={() => navigate('/auth')}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg">
                How It Works
              </Button>
            </div>
            <div className="flex items-center mt-8 text-gray-500">
              <div className="flex items-center mr-6">
                <Shield className="h-5 w-5 mr-2 text-brand-purple" />
                <span>Secure Connection</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-brand-purple" />
                <span>No Data Storage</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-sm animate-float">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Connect in Two Simple Steps</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                      <span className="text-brand-purple font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Connect Your CRM</h4>
                      <p className="text-gray-500 mt-1 text-sm">
                        Select your CRM provider and authorize the connection
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4">
                      <span className="text-brand-blue font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Connect Meta Account</h4>
                      <p className="text-gray-500 mt-1 text-sm">
                        Link your Meta Business account to enable CAPI integration
                      </p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 transition-opacity">
                    Start Integration
                    <Link className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gradient-to-br from-brand-skyblue to-brand-blue rounded-full opacity-50 blur-2xl animate-pulse-slow"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full opacity-40 blur-2xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
