import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./components/Contact";

function App() {
  useEffect(() => {
    // Update page title
    document.title =
      "NRIConsultants - Expert NRI Financial Services in India | Investment Advisory & Tax Consulting";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leading NRI financial consultancy offering investment advisory, tax planning, mutual funds, real estate transactions, and cross-border services. Expert guidance for NRIs worldwide with FEMA & RBI compliance."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Leading NRI financial consultancy offering investment advisory, tax planning, mutual funds, real estate transactions, and cross-border services. Expert guidance for NRIs worldwide with FEMA & RBI compliance.";
      document.head.appendChild(meta);
    }

    // Add meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "NRI Financial Services India, NRI Real Estate Transactions, Cross Border NRI Consultancy, NRI Mutual Fund Investment Advice, NRI taxation India, FEMA compliance, RBI regulations, NRI tax planning, NRI property purchase";
    document.head.appendChild(metaKeywords);

    // Add Open Graph tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "NRIConsultants - Expert NRI Financial Services in India";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content =
      "Comprehensive NRI financial services including mutual funds, tax planning, real estate transactions, and cross-border compliance. Expert guidance with FEMA & RBI regulations.";
    document.head.appendChild(ogDescription);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.content = "website";
    document.head.appendChild(ogType);

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "NRIConsultants",
      description:
        "Professional consultancy firm specializing in NRI financial services, mutual fund investments, tax planning, real estate transactions, and cross-border compliance in India.",
      url: "https://nriconsultants.com",
      telephone: "+91-98765-43210",
      email: "info@nriconsultants.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Business District",
        addressLocality: "Gurgaon",
        postalCode: "122002",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/nriconsultants",
        "https://www.youtube.com/nriconsultants",
      ],
      serviceType: [
        "Financial Consulting",
        "Mutual Fund Investment",
        "Income Tax Services",
        "Real Estate Transactions",
        "Cross-Border Transactions",
      ],
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NRI Financial Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Finance Services - Mutual Funds",
              description:
                "Expert mutual fund investment solutions with personalized recommendations and secure NSE platform",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Income Tax Services",
              description:
                "Comprehensive tax planning, filing, and compliance services for NRIs with FEMA guidance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Real Estate Services",
              description:
                "Complete property transaction support including negotiation, documentation, and legal compliance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Border Transactions",
              description:
                "Expert solutions for international remittances, certifications, and regulatory compliance",
            },
          },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Team />
                <Blog />
                <Contact />
              </main>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
