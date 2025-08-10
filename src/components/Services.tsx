import React from "react";
import { DollarSign, Shield, TrendingUp, Home, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cross Border Transactions",
      description:
        "Expert solutions for international remittances, certifications, and real estate tax compliances.",
      features: [
        "Cross-Border Banking Transactions",
        "Remmittance Certifications",
        "Real Estate Transaction Compliance",
        "FEMA & RBI Advisory",
      ],
      color: "blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Taxation",
      description:
        "Taxation consultancy services  to ensure smooth hassle free financial transactions in India.",
      features: [
        "Capital Gains Tax Calculation & Tax Certifications",
        "Advance Tax & TDS Reconciliation ",
        "FEMA / RBI Compliances ",
        "Tax Refund Follow-up & Taxation Matters ",
      ],
      color: "green",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investments",
      description: "Strategic guidance for investment in various asset classes.",
      features: [
        "Recommendations based on Risk Appetite",
        "Secured Transactions",
        "Portfolio Review",
        "Mutual Funds",
      ],
      color: "orange",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property / Real Estate Matters",
      description:
        "End-to-end support for buying, selling, leasing, and property management in India.",
      features: [
        "Transaction at Intrinsic value",
        "Negotiation services for Buying / Selling",
        "Transaction Documents (Title Search, Agreement to sell, Sale Deed, etc.)",
        "Tax Compliances and Remittance of Funds",
      ],
      color: "purple",
    },
  ];

  const colorMap = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      icon: "text-blue-600 bg-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "text-green-600 bg-green-100",
      button: "bg-green-600 hover:bg-green-700",
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      icon: "text-orange-600 bg-orange-100",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-600 bg-purple-100",
      button: "bg-purple-600 hover:bg-purple-700",
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions specifically for Non-Resident Indians to navigate Investments,
            Taxation, and Real Estate transactions in India with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${
                colorMap[service.color as keyof typeof colorMap].bg
              } p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
            >
              <div
                className={`w-16 h-16 ${
                  colorMap[service.color as keyof typeof colorMap].icon
                } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => (window.location.href = "/services")}
                className={`w-full ${
                  colorMap[service.color as keyof typeof colorMap].button
                } text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
