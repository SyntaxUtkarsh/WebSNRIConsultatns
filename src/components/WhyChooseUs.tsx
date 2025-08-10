import React from "react";
import { Shield, Award, Globe, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Expertise in FEMA, RBI & Tax Laws",
      description:
        "We possess in-depth expertise in FEMA, RBI regulations, and tax laws, delivering precise and reliable advisory services to ensure compliances and effective management of regulatory obligations.",
      highlight: "Regulatory Obligations",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise in NRI Laws",
      description:
        "Deep understanding of Income Tax Act 1961, RBI regulations, and NRI taxation rules. Our team stays updated with latest amendments and filing procedures.",
      highlight: "20+ Years Experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "End-to-End Assistance",
      description:
        "From initial consultation to final execution, we handle every aspect of transaction within agreed time-lines.",
      highlight: "Complete Services Coverage",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Round the Clock Services",
      description:
        "For convenience, we schedule Teams/ Google meetings as per the time slots preferred by the clients in international time zones.",
      highlight: "24/7 Accesibility",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              NRIConsultants
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges NRIs face when managing finances and investments in
            India. Our expertise ensures you make informed decisions with complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              <div className="mb-4">
                <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {reason.highlight}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">{reason.description}</p>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">₹500Cr+</div>
              <div className="text-gray-600 text-sm">Transactions Handled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600 text-sm">Client Retention</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
