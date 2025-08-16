import React from "react";
import {
  ArrowRight,
  DollarSign,
  FileText,
  Home,
  Globe,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  TrendingUp,
  Calculator,
  Building,
  CreditCard,
} from "lucide-react";

const ServicesPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // Navigate back to home page and scroll to contact
    window.location.href = "/#contact";
  };

  const serviceCards = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Personal Finance Services",
      subtitle: "Mutual Funds",
      description:
        "Expert mutual fund investment solutions tailored for NRIs with personalized recommendations and secure transactions",
      anchor: "personal-finance",
      color: "blue",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Income Tax Services",
      description:
        "Comprehensive tax planning, filing, and compliance services ensuring smooth financial transactions in India",
      anchor: "income-tax",
      color: "green",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Services",
      description:
        "Complete support for property transactions including negotiation, documentation, and legal compliance",
      anchor: "real-estate",
      color: "orange",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Border Transactions",
      description:
        "Expert solutions for international remittances, certifications, and regulatory compliance",
      anchor: "cross-border",
      color: "purple",
    },
  ];

  const whyChoosePoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expertise in FEMA, RBI & Tax Laws",
      description:
        "In-depth expertise in FEMA, RBI regulations, and tax laws, delivering precise and reliable advisory services",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expertise in NRI Laws",
      description:
        "Deep understanding of Income Tax Act 1961, RBI regulations, and NRI taxation rules with latest amendments",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "End-to-End Assistance",
      description:
        "Complete transaction management from initial consultation to final execution within agreed timelines",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Round the Clock Services",
      description:
        "Teams/Google meetings scheduled as per client preferences in international time zones",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Trusted by NRIs & Businesses",
      description:
        "Proven track record in global transactions with emphasis on accuracy, confidentiality, and efficiency",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Personalized Assistance",
      description:
        "Tailored solutions for unique needs with dedicated support throughout your financial journey",
    },
  ];

  const colorMap = {
    blue: "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300",
    green: "from-green-50 to-green-100 border-green-200 hover:border-green-300",
    orange: "from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300",
    purple: "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
                NRI Financial Services
              </span>{" "}
              in India
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive solutions for Non-Resident Indians to navigate investments, taxation,
              and real estate transactions with complete confidence and regulatory compliance.
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
              Click on any service below to explore detailed information and solutions tailored for
              your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(card.anchor)}
                className={`cursor-pointer group bg-gradient-to-br ${
                  colorMap[card.color as keyof typeof colorMap]
                } p-8 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                {card.subtitle && (
                  <p className="text-sm font-semibold text-blue-600 mb-4">{card.subtitle}</p>
                )}
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

      {/* Personal Finance Services - Mutual Funds */}
      <section id="personal-finance" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Finance Services</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mutual Funds</h3>
              <p className="text-lg text-gray-600 mb-8">
                When it comes to investing, every decision revolves around three key factors: Safety
                of principal, Return on capital, and Income tax implications. Our mutual fund
                investment platform offers expert advice, secure transactions, and comprehensive
                portfolio management.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Personalized Recommendations</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    We assess your risk appetite and investment objectives to recommend suitable
                    mutual fund schemes from reputed fund houses.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• In-depth research from trusted financial analysts</li>
                    <li>• Risk-based portfolio allocation</li>
                    <li>• Goal-oriented investment planning</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Secured Transactions</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Online platform powered by National Stock Exchange (NSE) - highly secure and
                    fully reliable system.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• No access to your funds</li>
                    <li>• No convenience or transaction fees</li>
                    <li>• Digital processing with complete transparency</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Portfolio Reviews & Follow-up</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Regular portfolio reviews ensuring investments remain aligned with goals and
                    market conditions.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Periodic performance analysis</li>
                    <li>• Redemption and switching advice</li>
                    <li>• Smooth fund transfer coordination</li>
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
                <div className="text-2xl font-bold text-blue-600">NSE</div>
                <div className="text-sm text-gray-600">Powered Platform</div>
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
                <div className="text-sm text-gray-600">Legal Compliance</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Income Tax Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                With increasing digitization and strict monitoring by the Income Tax Department,
                accurate return filing and timely tax deposits have become crucial. We provide
                comprehensive income tax consultancy services for smooth, hassle-free financial
                transactions.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Online Income Tax Return Filing</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Accurate and timely e-filing for individuals and businesses with complete
                    documentation support.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">
                      Advance Tax & TDS Reconciliation
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Computation, payment, and reconciliation to avoid penalties with systematic
                    tracking.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">
                      Capital Gains Tax Calculation & TDS Certification
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    For property sales, share disinvestments, and other capital asset transactions.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">FEMA Compliance & RBI Approvals</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Guidance on repatriation, asset management, investments, and business advisory
                    support.
                  </p>
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
                We understand the complexities involved in buying, selling, and renting properties
                in India, especially for NRIs who have limited time during visits. We provide
                complete support and representation to save your valuable time.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Negotiation Services</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Fair value assessment and intrinsic value derivation considering qualitative
                    features.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Market research and demand-supply analysis</li>
                    <li>• Professional negotiation on your behalf</li>
                    <li>• Better price discovery through expert guidance</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">
                      Real Estate and Allied Commercial Matters
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Complete legal support for documentation and compliance requirements.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Agreements, contracts, and property rights</li>
                    <li>• Registration and legal documentation</li>
                    <li>• Family settlements and asset distribution</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Service Coverage</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Currently serving Delhi/NCR, Navi Mumbai, Bangalore, Chandigarh, and Jaipur.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Expanding to other geographies based on demand</li>
                    <li>• Local expertise in each market</li>
                    <li>• End-to-end transaction support</li>
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
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
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
                <div className="text-sm text-gray-600">Global Support</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cross-Border Transactions</h2>
              <p className="text-lg text-gray-600 mb-8">
                In today's interconnected world, moving funds across borders requires precision,
                compliance, and trusted expertise. We specialize in cross-border banking
                transactions, RBI-compliant certifications, and tax compliances.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">
                      Cross-Border Banking Transactions
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Guidance and execution for international fund transfers in compliance with RBI &
                    FEMA regulations.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Inward and outward remittances</li>
                    <li>• Foreign currency account management</li>
                    <li>• Optimal fund transfer routes for cost-effectiveness</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Remittance Certifications</h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Statutory certifications required for international fund transfers.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Form 15CA & 15CB issuance</li>
                    <li>• Certification for repatriation of sale proceeds</li>
                    <li>• Bank liaison for smooth processing</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">
                      Real Estate Transaction Compliance
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    End-to-end assistance in tax compliance for property transactions across
                    borders.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Capital gains tax computation</li>
                    <li>• TDS compliance for NRI/foreign sellers</li>
                    <li>• Tax clearance certificates</li>
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
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
                NRI Consultants
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise, dedication, and comprehensive approach make us the preferred choice for
              NRIs worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{point.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your NRI Financial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation with our experts and discover how we can help you achieve
              your financial goals in India. No obligations, just expert guidance tailored to your
              needs.
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

export default ServicesPage;
