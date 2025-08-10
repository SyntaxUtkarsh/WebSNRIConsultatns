import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'NRIConsultants - Trusted NRI Financial Services | Investment Advisory & Tax Consulting';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading NRI financial consultancy offering investment advisory, tax planning, due diligence, and real estate services. Expert guidance for 5000+ NRIs worldwide.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading NRI financial consultancy offering investment advisory, tax planning, due diligence, and real estate services. Expert guidance for 5000+ NRIs worldwide.';
      document.head.appendChild(meta);
    }

    // Add meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'NRI investment India, NRI property purchase, NRI financial consultation, NRI due diligence services, NRI taxation India, FEMA compliance, NRI tax planning';
    document.head.appendChild(metaKeywords);

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'NRIConsultants - Expert NRI Financial Services';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Trusted consultation for NRIs - Financial consulting, investment advisory, due diligence, and real estate services in India.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "NRIConsultants",
      "description": "Professional consultancy firm specializing in NRI financial services, investment advisory, and real estate transactions in India.",
      "url": "https://nriconsultants.com",
      "telephone": "+91-98765-43210",
      "email": "info@nriconsultants.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business District",
        "addressLocality": "Gurgaon",
        "postalCode": "122002",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nriconsultants",
        "https://www.youtube.com/nriconsultants"
      ],
      "serviceType": [
        "Financial Consulting",
        "Investment Advisory", 
        "Due Diligence",
        "Real Estate Transactions"
      ],
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "NRI Financial Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "NRI Financial Consulting",
              "description": "Comprehensive taxation, wealth management, and remittance services for NRIs"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Due Diligence Services",
              "description": "Thorough verification for business partnerships and investments in India"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Investment Advisory",
              "description": "Strategic guidance for high-return investment opportunities in Indian markets"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Real Estate Transactions", 
              "description": "End-to-end support for property buying, selling, and management in India"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;