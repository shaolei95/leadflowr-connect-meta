
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewIntegration = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Create New Integration</h1>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg hover:border-brand-purple cursor-pointer transition-colors">
                <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
                <p className="text-gray-600">Connect your CRM system to start syncing leads.</p>
              </div>
              
              <div className="p-6 border rounded-lg hover:border-brand-purple cursor-pointer transition-colors">
                <h3 className="text-xl font-semibold mb-2">Meta CAPI</h3>
                <p className="text-gray-600">Set up Meta Conversions API integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIntegration;
