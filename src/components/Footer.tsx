
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Leadflowr
              </span>
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              The easiest way to connect your CRM data with Meta's Conversions API for better ad performance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Leadflowr. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Made with ❤️ for modern advertisers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
