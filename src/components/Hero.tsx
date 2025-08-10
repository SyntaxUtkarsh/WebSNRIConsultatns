import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-20 flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Trusted by 297 NRIs Worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Consultation for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
                  {" "}
                  NRIs / OCIs
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Life becomes much easier and harmonious when a correct and timely advice is received
                from trustworthy friends or professionals. We are one-stop solution for all your
                India-based investments and transactions. Financial consulting, due diligence,
                investment advisory, and real estate services.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">270+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">9.27 Million USD</div>
                <div className="text-sm text-gray-600">Transactions Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">21+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-orange-400 to-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="NRI Professional Consultation"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">₹</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Cross Border Transactions</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">₹</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Taxation Matters</div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real Estate</div>
                    <div className="text-sm text-gray-600">Transactions</div>
                  </div>
                </div>
              </div> */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Invesments</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real Estate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-20 -right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
