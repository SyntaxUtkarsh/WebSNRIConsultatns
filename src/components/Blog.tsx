import React from "react";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top Investment Opportunities in India for NRIs in 2025",
      excerpt:
        "Discover the most promising investment avenues for NRIs in 2025, from mutual funds to real estate and emerging sectors like renewable energy and technology.",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
      author: "Priya Patel",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Investment",
      tags: ["NRI Investment", "Portfolio Planning", "Market Analysis"],
      content: `
        <h3>Introduction</h3>
        <p>As we step into 2025, Non-Resident Indians (NRIs) have access to unprecedented investment opportunities in India. The Indian economy's robust growth, combined with favorable government policies, makes it an attractive destination for NRI investments.</p>
        
        <h3>1. Equity Mutual Funds</h3>
        <p>Equity mutual funds remain one of the most popular investment choices for NRIs. With the Indian stock market showing strong fundamentals:</p>
        <ul>
          <li>Large-cap funds for stability</li>
          <li>Mid and small-cap funds for growth potential</li>
          <li>Sectoral funds in technology and healthcare</li>
          <li>SIP options for systematic investment</li>
        </ul>
        
        <h3>2. Real Estate Investment</h3>
        <p>The Indian real estate market presents excellent opportunities:</p>
        <ul>
          <li>Residential properties in tier-1 cities</li>
          <li>Commercial real estate investments</li>
          <li>REITs for indirect real estate exposure</li>
          <li>Plot purchases in emerging locations</li>
        </ul>
        
        <h3>3. Fixed Deposits and Bonds</h3>
        <p>For conservative investors seeking steady returns:</p>
        <ul>
          <li>NRE and NRO fixed deposits</li>
          <li>Government bonds and securities</li>
          <li>Corporate bonds with high ratings</li>
          <li>Tax-free bonds for tax efficiency</li>
        </ul>
        
        <h3>Key Considerations for NRIs</h3>
        <ul>
          <li>Tax implications in both countries</li>
          <li>FEMA compliance requirements</li>
          <li>Currency fluctuation risks</li>
          <li>Professional investment advisory</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>2025 presents exciting investment opportunities for NRIs in India. However, it's crucial to understand the regulatory framework and seek professional guidance to make informed investment decisions.</p>
      `,
    },
    {
      title: "Complete Guide to Buying Property in India as an NRI",
      excerpt:
        "Navigate the complexities of property purchase in India with our comprehensive guide covering legal requirements, financing options, and tax implications for NRIs.",
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
      // author: "Amit Kumar",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Real Estate",
      tags: ["NRI Property", "Legal Requirements", "Investment"],
      content: `
        <h3>Introduction</h3>
        <p>Buying property in India as an NRI involves navigating complex regulations and procedures. This comprehensive guide will help you understand every aspect of the property purchase process.</p>
        
        <h3>Legal Framework for NRI Property Purchase</h3>
        <p>NRIs can purchase property in India under the Foreign Exchange Management Act (FEMA):</p>
        <ul>
          <li>Residential and commercial properties are allowed</li>
          <li>Agricultural land purchase is prohibited</li>
          <li>Plantation property requires RBI approval</li>
          <li>Proper documentation is mandatory</li>
        </ul>
        
        <h3>Types of Properties NRIs Can Buy</h3>
        <h4>Permitted Properties:</h4>
        <ul>
          <li>Residential properties (apartments, villas, plots)</li>
          <li>Commercial properties (offices, shops, warehouses)</li>
          <li>Industrial properties</li>
        </ul>
        
        <h4>Restricted Properties:</h4>
        <ul>
          <li>Agricultural land</li>
          <li>Plantation property (without RBI permission)</li>
          <li>Farmhouses</li>
        </ul>
        
        <h3>Financing Options</h3>
        <p>Several financing options are available for NRIs:</p>
        <ul>
          <li>Home loans from Indian banks</li>
          <li>NRE/NRO account funding</li>
          <li>Foreign currency loans</li>
          <li>Joint ownership with resident Indians</li>
        </ul>
        
        <h3>Documentation Required</h3>
        <ul>
          <li>Passport and visa copies</li>
          <li>PAN card</li>
          <li>Address proof abroad</li>
          <li>Income proof</li>
          <li>Bank statements</li>
          <li>Property documents</li>
        </ul>
        
        <h3>Tax Implications</h3>
        <p>Understanding tax implications is crucial:</p>
        <ul>
          <li>Capital gains tax on sale</li>
          <li>Rental income taxation</li>
          <li>TDS on property transactions</li>
          <li>Double taxation avoidance benefits</li>
        </ul>
        
        <h3>Step-by-Step Purchase Process</h3>
        <ol>
          <li>Property search and selection</li>
          <li>Legal due diligence</li>
          <li>Loan approval (if applicable)</li>
          <li>Agreement execution</li>
          <li>Registration process</li>
          <li>Post-purchase compliance</li>
        </ol>
        
        <h3>Common Pitfalls to Avoid</h3>
        <ul>
          <li>Inadequate due diligence</li>
          <li>Ignoring FEMA compliance</li>
          <li>Poor location selection</li>
          <li>Overestimating rental yields</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Buying property in India as an NRI can be a rewarding investment with proper planning and professional guidance. Always consult with experts to ensure compliance and maximize returns.</p>
      `,
    },
    {
      title: "NRI Taxation Rules in India – Everything You Must Know",
      excerpt:
        "Comprehensive overview of NRI taxation in India, covering residential status, tax obligations, exemptions, and strategies for tax optimization in 2025.",
      image:
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
      // author: "Rajesh Sharma",
      date: "January 8, 2025",
      readTime: "15 min read",
      category: "Taxation",
      tags: ["NRI Taxation", "Tax Planning", "FEMA Compliance"],
      content: `
        <h3>Introduction</h3>
        <p>Understanding NRI taxation in India is crucial for financial planning and compliance. This guide covers all aspects of NRI taxation rules, recent updates, and optimization strategies.</p>
        
        <h3>Determining Your Residential Status</h3>
        <p>Your tax liability depends on your residential status:</p>
        <ul>
          <li><strong>Resident:</strong> Stay in India for 182+ days</li>
          <li><strong>Non-Resident:</strong> Stay less than 182 days</li>
          <li><strong>Resident Not Ordinarily Resident (RNOR):</strong> Special category</li>
        </ul>
        
        <h3>Income Taxation for NRIs</h3>
        <h4>Taxable Income in India:</h4>
        <ul>
          <li>Income earned or accrued in India</li>
          <li>Salary from Indian employer</li>
          <li>Rental income from Indian properties</li>
          <li>Capital gains from Indian assets</li>
          <li>Interest from Indian investments</li>
        </ul>
        
        <h4>Non-Taxable Income:</h4>
        <ul>
          <li>Income earned outside India</li>
          <li>Foreign salary (for most cases)</li>
          <li>Interest from NRE accounts</li>
        </ul>
        
        <h3>TDS (Tax Deducted at Source)</h3>
        <p>TDS rates for NRIs are generally higher:</p>
        <ul>
          <li>Interest income: 30%</li>
          <li>Dividend income: 20%</li>
          <li>Property rent: 30%</li>
          <li>Capital gains: 20% (LTCG), 30% (STCG)</li>
        </ul>
        
        <h3>Double Taxation Avoidance Agreement (DTAA)</h3>
        <p>India has DTAA with 85+ countries to avoid double taxation:</p>
        <ul>
          <li>Lower tax rates on certain income</li>
          <li>Tax exemptions in specific cases</li>
          <li>Credit for taxes paid abroad</li>
          <li>Tie-breaker rules for residence</li>
        </ul>
        
        <h3>Capital Gains Taxation</h3>
        <h4>Short-term Capital Gains (STCG):</h4>
        <ul>
          <li>Assets held for less than 36 months</li>
          <li>Taxed at 30% for NRIs</li>
          <li>No indexation benefit</li>
        </ul>
        
        <h4>Long-term Capital Gains (LTCG):</h4>
        <ul>
          <li>Assets held for 36+ months</li>
          <li>Taxed at 20% with indexation</li>
          <li>Exemptions available under certain conditions</li>
        </ul>
        
        <h3>NRI Investment Accounts</h3>
        <h4>NRE (Non-Resident External) Account:</h4>
        <ul>
          <li>Interest is tax-free</li>
          <li>Fully repatriable</li>
          <li>Can receive foreign income</li>
        </ul>
        
        <h4>NRO (Non-Resident Ordinary) Account:</h4>
        <ul>
          <li>Interest is taxable</li>
          <li>Limited repatriation ($1 million per year)</li>
          <li>Can receive Indian income</li>
        </ul>
        
        <h3>Tax Optimization Strategies</h3>
        <ul>
          <li>Utilize DTAA benefits</li>
          <li>Plan asset holding period</li>
          <li>Optimize account types</li>
          <li>Consider tax-efficient investments</li>
          <li>Plan repatriation timing</li>
        </ul>
        
        <h3>Compliance Requirements</h3>
        <ul>
          <li>File ITR if income exceeds basic exemption</li>
          <li>Obtain TAN for TDS compliance</li>
          <li>Maintain proper documentation</li>
          <li>Report foreign assets if applicable</li>
        </ul>
        
        <h3>Recent Updates and Changes</h3>
        <ul>
          <li>Revised residential status rules</li>
          <li>Digital asset taxation</li>
          <li>Updated TDS rates</li>
          <li>Enhanced compliance requirements</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>NRI taxation in India requires careful planning and compliance. Stay updated with changes and consult tax professionals for optimized tax planning strategies.</p>
      `,
    },
    {
      title: "Updates for NRIs Investing in Indian Businesses",
      excerpt:
        "Essential due diligence steps for NRIs looking to invest in Indian businesses, including legal, financial, and operational aspects to ensure secure investments.",
      image:
        "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
      // author: "Deepika Singh",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Latest Updates",
      tags: ["Business Investment", "Risk Assessment", "Legal Compliance"],
      content: `
        <h3>Introduction</h3>
        <p>Investing in Indian businesses as an NRI requires thorough due diligence to protect your investment and ensure compliance. This comprehensive checklist will guide you through the essential steps.</p>
        
        <h3>Legal Due Diligence</h3>
        <h4>Company Registration and Compliance:</h4>
        <ul>
          <li>Certificate of Incorporation</li>
          <li>Memorandum and Articles of Association</li>
          <li>Current shareholding pattern</li>
          <li>Board resolutions and minutes</li>
          <li>Statutory compliance certificates</li>
          <li>Annual filings with ROC</li>
        </ul>
        
        <h4>Licenses and Approvals:</h4>
        <ul>
          <li>Business-specific licenses</li>
          <li>Environmental clearances</li>
          <li>GST registration</li>
          <li>Import-export licenses</li>
          <li>FSSAI (for food businesses)</li>
        </ul>
        
        <h3>Financial Due Diligence</h3>
        <h4>Financial Statements Analysis:</h4>
        <ul>
          <li>Audited financial statements (3-5 years)</li>
          <li>Cash flow statements</li>
          <li>Management accounts</li>
          <li>Tax returns and assessments</li>
          <li>Bank statements and facilities</li>
          <li>Outstanding liabilities</li>
        </ul>
        
        <h4>Financial Health Indicators:</h4>
        <ul>
          <li>Revenue growth trends</li>
          <li>Profitability ratios</li>
          <li>Debt-to-equity ratio</li>
          <li>Working capital management</li>
          <li>Asset utilization</li>
        </ul>
        
        <h3>Commercial Due Diligence</h3>
        <h4>Market Analysis:</h4>
        <ul>
          <li>Industry size and growth</li>
          <li>Competitive landscape</li>
          <li>Market positioning</li>
          <li>Customer base analysis</li>
          <li>Supplier relationships</li>
        </ul>
        
        <h4>Business Model Evaluation:</h4>
        <ul>
          <li>Revenue streams</li>
          <li>Cost structure</li>
          <li>Scalability potential</li>
          <li>Technology adoption</li>
          <li>Innovation capabilities</li>
        </ul>
        
        <h3>Operational Due Diligence</h3>
        <h4>Management Team:</h4>
        <ul>
          <li>Leadership experience</li>
          <li>Track record</li>
          <li>Key man risk</li>
          <li>Succession planning</li>
          <li>Corporate governance</li>
        </ul>
        
        <h4>Operational Efficiency:</h4>
        <ul>
          <li>Production processes</li>
          <li>Quality control systems</li>
          <li>Supply chain management</li>
          <li>Technology infrastructure</li>
          <li>Employee skills and retention</li>
        </ul>
        
        <h3>Regulatory and Compliance Check</h3>
        <h4>NRI Investment Regulations:</h4>
        <ul>
          <li>FEMA compliance requirements</li>
          <li>Sectoral caps and restrictions</li>
          <li>RBI approvals if required</li>
          <li>FCRA compliance</li>
          <li>Transfer pricing regulations</li>
        </ul>
        
        <h4>Ongoing Compliance:</h4>
        <ul>
          <li>Annual return filings</li>
          <li>RBI reporting requirements</li>
          <li>Tax compliance</li>
          <li>Labor law compliance</li>
          <li>Environmental compliance</li>
        </ul>
        
        <h3>Risk Assessment</h3>
        <h4>Business Risks:</h4>
        <ul>
          <li>Market risks</li>
          <li>Operational risks</li>
          <li>Financial risks</li>
          <li>Technology risks</li>
          <li>Regulatory risks</li>
        </ul>
        
        <h4>Mitigation Strategies:</h4>
        <ul>
          <li>Insurance coverage</li>
          <li>Diversification plans</li>
          <li>Exit strategies</li>
          <li>Risk monitoring systems</li>
          <li>Contingency planning</li>
        </ul>
        
        <h3>Red Flags to Watch Out For</h3>
        <ul>
          <li>Frequent changes in auditors</li>
          <li>Related party transactions</li>
          <li>Pending litigations</li>
          <li>Regulatory violations</li>
          <li>Unusual financial transactions</li>
          <li>High employee turnover</li>
        </ul>
        
        <h3>Documentation and Record Keeping</h3>
        <ul>
          <li>Maintain detailed due diligence reports</li>
          <li>Document all findings and recommendations</li>
          <li>Keep copies of all verified documents</li>
          <li>Regular monitoring and review processes</li>
        </ul>
        
        <h3>Professional Support</h3>
        <p>Consider engaging professionals for:</p>
        <ul>
          <li>Legal advisors for compliance</li>
          <li>Chartered accountants for financial review</li>
          <li>Industry experts for market analysis</li>
          <li>Technical experts for operational assessment</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Thorough due diligence is essential for successful business investments in India. Take time to verify all aspects and seek professional guidance to make informed investment decisions.</p>
      `,
    },
  ];

  const [selectedPost, setSelectedPost] = React.useState<any>(null);

  const openPost = (post: any) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our comprehensive guides and latest updates on NRI investments,
              taxation, and regulations. Expert insights to help you make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => openPost(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 p-2 rounded-full">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {/* <span>{post.author}</span> */}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          {/* <div className="mt-16 bg-gradient-to-r from-orange-400 to-green-600 p-8 rounded-2xl text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with NRI Insights</h3>
              <p className="text-blue-100 mb-6">
                Get the latest updates on NRI taxation, investment opportunities, and regulatory
                changes delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedPost.readTime}</span>
                </div>
                <button
                  onClick={closePost}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-xl text-gray-600">×</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{selectedPost.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Need Professional Guidance?
                </h4>
                <p className="text-gray-600 mb-4">
                  Our experts are here to help you navigate complex NRI financial decisions. Get
                  personalized consultation tailored to your specific needs.
                </p>
                <button
                  onClick={() => {
                    closePost();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-orange-400 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center gap-2"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
