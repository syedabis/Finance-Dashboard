import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left Section - Copyright and Navigation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Copyright */}
            <div className="text-sm font-semibold text-gray-900">
              Copyright © 2025 Gasco
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Term and conditions
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
