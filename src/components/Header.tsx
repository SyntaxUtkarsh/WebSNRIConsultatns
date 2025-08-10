import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigateToServices = () => {
    window.location.href = '/services';
    setIsMenuOpen(false);
  };

  const handleConsultNow = () => {
    // If we're on the services page, navigate back to home first
    if (window.location.pathname === '/services') {
      window.location.href = '/#contact';
    } else {
      scrollToSection('contact');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              NRI
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Consultants</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={navigateToServices}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleConsultNow}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={navigateToServices}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleConsultNow}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                >
                  Consult Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
