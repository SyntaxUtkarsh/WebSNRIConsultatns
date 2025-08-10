import React from 'react';
import { ArrowRight, DollarSign, FileText, Home, Globe, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';

const ServicesPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    // Navigate back to home page and scroll to contact
    window.location.href = '/#contact';
  };

  const serviceCards = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Personal Finance Services",
      description: "Comprehensive mutual fund investment solutions tailored for NRIs",
      anchor: "personal-finance",
      color: "blue"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Income Tax Services", 
      description: "Expert tax planning and compliance for NRI taxation requirements",
      anchor: "income-tax",
      color: "green"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Services",
      description: "End-to-end property transaction support in India",
      anchor: "real-estate", 
      color: "orange"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Border Transactions",
      description: "Seamless international money transfers and compliance",
      anchor: "cross-border",
      color: "purple"
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "FEMA & RBI Expertise",
      description: "Deep knowledge of regulatory compliance and legal requirements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Dedicated relationship managers for each client"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "270+ satisfied clients with successful transactions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Global Support",
      description: "Round-the-clock assistance across international time zones"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "End-to-End Solutions",
      description: "Complete transaction management from start to finish"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Country Experience",
      description: "Serving NRIs across 20+ countries worldwide"
    }
  ];

  const colorMap = {
    blue: "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300",
    green: "from-green-50 to-green-100 border-green-200 hover:border-green-300", 
    orange: "from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300",
    purple: "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">NRI Financial Services</span> in India
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive solutions for Non-Resident Indians to navigate investments, taxation, and real estate transactions with complete confidence and regulatory compliance.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Quick Service Overview Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any service below to explore detailed information and solutions tailored for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => (
              <div 
                key={index}
                onClick={() => scrollToSection(card.anchor)}
                className={`cursor-pointer group bg-gradient-to-br ${colorMap[card.color as keyof typeof colorMap]} p-8 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      
      {/* Personal Finance Services */}
      <section id="personal-finance" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Finance Services (Mutual Funds)</h2>
              <p className="text-lg text-gray-600 mb-8">
                Strategic investment solutions designed specifically for NRIs to build wealth through Indian mutual funds with expert guidance and regulatory compliance.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Investment Planning & Advisory</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Personalized investment strategy based on risk appetite</li>
                    <li>• Portfolio diversification across equity and debt funds</li>
                    <li>• Goal-based investment planning (retirement, education, etc.)</li>
                    <li>• Regular portfolio review and rebalancing</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Mutual Fund Selection</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Research-backed fund recommendations</li>
                    <li>• Performance analysis and comparison</li>
                    <li>• Tax-efficient fund selection</li>
                    <li>• ELSS funds for tax saving under Section 80C</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">NRI Compliance & Documentation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• KYC completion and maintenance</li>
                    <li>• NRE/NRO account setup guidance</li>
                    <li>• FATCA and CRS compliance</li>
                    <li>• Investment limit monitoring as per RBI guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="NRI Mutual Fund Investment Planning"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">15%+</div>
                <div className="text-sm text-gray-600">Average Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Tax Services */}
      <section id="income-tax" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="NRI Tax Planning and Compliance"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Compliance Rate</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Income Tax Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive tax planning and compliance services to optimize your tax liability while ensuring full adherence to Indian tax regulations.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Tax Planning & Optimization</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Residential status determination</li>
                    <li>• Tax liability calculation and planning</li>
                    <li>• Double Taxation Avoidance Agreement (DTAA) benefits</li>
                    <li>• Investment planning for tax efficiency</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Tax Return Filing & Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ITR preparation and e-filing</li>
                    <li>• TDS return filing and reconciliation</li>
                    <li>• Advance tax calculation and payment</li>
                    <li>• Tax refund processing and follow-up</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Capital Gains Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Capital gains calculation on property and investments</li>
                    <li>• Indexation benefits and exemptions</li>
                    <li>• Section 54/54F exemption planning</li>
                    <li>• Tax certificates for property transactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section id="real-estate" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Estate Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete property transaction support from search to registration, ensuring legal compliance and optimal value for your real estate investments in India.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Property Search & Evaluation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Market research and property identification</li>
                    <li>• Property valuation and price negotiation</li>
                    <li>• Location analysis and investment potential</li>
                    <li>• Legal title verification and due diligence</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Transaction Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Agreement drafting and review</li>
                    <li>• Registration process management</li>
                    <li>• Loan facilitation and documentation</li>
                    <li>• Possession and handover coordination</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Post-Purchase Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Property management and maintenance</li>
                    <li>• Rental management and tenant screening</li>
                    <li>• Tax compliance and documentation</li>
                    <li>• Sale assistance and capital gains planning</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="NRI Real Estate Investment in India"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-600">₹50Cr+</div>
                <div className="text-sm text-gray-600">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Transactions */}
      <section id="cross-border" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Cross-Border NRI Transactions"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cross-Border Transactions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Seamless international money transfers and regulatory compliance for all your cross-border financial needs with complete transparency and security.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Money Transfer Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• NRE/NRO account transfers</li>
                    <li>• Property purchase remittances</li>
                    <li>• Investment fund transfers</li>
                    <li>• Repatriation of sale proceeds</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Regulatory Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• FEMA compliance and documentation</li>
                    <li>• RBI reporting and approvals</li>
                    <li>• Foreign exchange regulations</li>
                    <li>• LRS (Liberalized Remittance Scheme) guidance</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Documentation & Certification</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Remittance certificates</li>
                    <li>• CA certificates for property transactions</li>
                    <li>• Tax clearance certificates</li>
                    <li>• FIRC (Foreign Inward Remittance Certificate)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">NRIConsultants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise, dedication, and comprehensive approach make us the preferred choice for NRIs worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your NRI Financial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation with our experts and discover how we can help you achieve your financial goals in India. No obligations, just expert guidance tailored to your needs.
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
                onClick={() => window.location.href = 'tel:+919899499399'}
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

export default ServicesPage;