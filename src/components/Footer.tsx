import React from "react";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                NRI
              </div>
              <span className="ml-2 text-xl font-bold">Consultants</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for NRI financial services, investment advisory, and property
              transactions in India. Expert guidance for 15+ years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@nriconsultants.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Business District, Gurgaon, India</span>
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
                Financial Consulting
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Due Diligence
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Investment Advisory
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Real Estate Transactions
              </div>
              <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Tax Planning
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest NRI financial insights and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Media */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      {/* <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">5000+</div>
              <div className="text-sm text-gray-400">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">₹500Cr+</div>
              <div className="text-sm text-gray-400">Transactions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
              <div className="text-sm text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2025 NRIConsultants. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
