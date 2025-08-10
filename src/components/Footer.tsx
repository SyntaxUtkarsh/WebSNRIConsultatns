import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                NRI
              </div>
              <span className="ml-2 text-xl font-bold">Consultants</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for NRI financial services, investment advisory, and property
              transactions in India. Expert guidance for 21+ years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 9899499399</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@nriconsultants.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>616, Sector 16, Faridabad-121001, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                Expert Insights
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Cross Border Transactions
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Taxation
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Investments
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Property / Real Estate Matters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© NRIConsultants. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
