import React from "react";
import { ArrowRight, Shield, Star, Users, CheckCircle } from "lucide-react";
import Team from "../components/Team";

const AboutPage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const valueCards = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "To be ethical, honest, and transparent in all we do.",
      color: "blue",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Excellence",
      description:
        "We strive for excellence and are committed to the high level of quality services.",
      color: "yellow",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Customer Delight",
      description:
        "We are commited to operational excellence, prioritizing customer delight and long-term relationships.",
      color: "green",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Professionalism",
      description:
        "Practicing the highest degree of professionalism with accountability, reliability, and customer focus.",
      color: "purple",
    },
  ];

  return (
    // <ErrorBoundary>
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
                NRI Consultants
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We provide support and professional services to Non-Resident Indians,
              <br />
              for simplifing cross-border transactions and legal complexities.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-400 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                NRI Consultants is a medium-sized consulting enterprise established to provide
                requisite support and professional services to Indians living abroad.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are a team of seasoned professionals with expertise in international investment
                transactions, FEMA compliances, and taxation. Our mission is to simplify the
                complexities of cross-border transactions for individuals, NRIs, and business
                entities.{" "}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With an emphasis on accuracy, confidentiality, and efficiency, we have successfully
                assisted clients in transferring funds, securing necessary certifications, and
                fulfilling legal obligations across jurisdictions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="NRI Consultants Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">Global</div>
                <div className="text-sm text-gray-600">Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values drive everything we do, ensuring we deliver exceptional service with
              integrity and professionalism.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br p-8 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="bg-gray-50">
        <Team />
      </div>
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Simplify Your Financial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation with our experts and discover how NRI Consultants can support
              your financial and legal needs in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => (window.location.href = "tel:+919899499399")}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call Now: +91 9899499399
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
