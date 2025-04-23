
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Leadflowr
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <Link to="/#features" className="text-gray-700 hover:text-brand-purple transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-brand-purple transition-colors">
              How It Works
            </Link>
            <Link to="/#faq" className="text-gray-700 hover:text-brand-purple transition-colors">
              FAQ
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex" onClick={() => navigate('/auth')}>
              Log In
            </Button>
            <Button 
              className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 transition-opacity"
              onClick={() => navigate('/auth')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
