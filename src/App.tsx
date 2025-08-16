import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    // ---- SEO Meta Setup ----
    document.title =
      "NRIConsultants - Expert NRI Financial Services in India | Investment Advisory & Tax Consulting";

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

    // meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "NRI Financial Services India, NRI Real Estate Transactions, Cross Border NRI Consultancy, NRI Mutual Fund Investment Advice, NRI taxation India, FEMA compliance, RBI regulations, NRI tax planning, NRI property purchase";
    document.head.appendChild(metaKeywords);

    // Open Graph tags
    const ogTags = [
      { property: "og:title", content: "NRIConsultants - Expert NRI Financial Services in India" },
      { property: "og:description", content: "Comprehensive NRI financial services including mutual funds, tax planning, real estate transactions, and cross-border compliance. Expert guidance with FEMA & RBI regulations." },
      { property: "og:type", content: "website" },
    ];
    ogTags.forEach(tag => {
      const el = document.createElement("meta");
      el.setAttribute("property", tag.property);
      el.content = tag.content;
      document.head.appendChild(el);
    });

    // structured data
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
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // ---- Router setup with createBrowserRouter ----
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Team />
            <Blog />
            <Contact />
          </main>
        </Layout>
      ),
    },
    {
      path: "/services",
      element: (
        <Layout>
          <ServicesPage />
        </Layout>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <Layout>
          <AboutPage />
        </Layout>
      ),
    },
    {
      path: "/contactus",
      element: (
        <Layout>
          <ContactPage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
