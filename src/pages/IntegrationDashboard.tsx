
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Link as LinkIcon } from "lucide-react";

const IntegrationDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Integration Dashboard</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Your Integrations</h2>
            <Button 
              onClick={() => navigate('/new-integration')}
              className="bg-gradient-to-r from-brand-purple to-brand-blue text-white"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Integration
            </Button>
          </div>
          
          <div className="space-y-4">
            {/* Empty state */}
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <LinkIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No integrations yet</h3>
              <p className="mt-2 text-gray-500">Get started by creating your first integration.</p>
              <Button 
                onClick={() => navigate('/new-integration')}
                className="mt-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Integration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDashboard;
