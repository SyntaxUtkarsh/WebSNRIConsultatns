import React from "react";
// import { LinkedinIcon, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "RR Pathak",
      position: "Principal Consultant",
      experience: "Professional Practice: 21 Years",
      specialization: "Litigation Arbitration & Supreme Court Practices",
      image: "/assets/rrPathak.jpg", // Replace with actual image path or URL
      credentials: "M.A. (JNU), LLB (DU)",
      description:
        "R. R. Pathak is a Supreme Court attorney with 35+ years of experience in education management and legal practice. An alumnus of JNU, DU, BHU, and other prestigious institutions, he also leads VSERV FOR RIGHTS and the SUN CAD Foundation, offering legal aid and social support. He is a passionate advocate for justice and regularly engages in national and international legal forums.",
    },
    {
      name: "Charu Paliwal",
      position: "Senior Consultant",
      experience: "Professional Practice: 19 Years",
      specialization: "Direct and Indirect Taxes & Transaction Due Diligence",
      image: "/assets/charu.jpg",
      credentials: "Taxation, GST, Due Diligence",
      description:
        "Charu Paliwal is a founding partner of the firm with 18 years of experience in Income Tax, GST, and Company Law matters. A Fellow Chartered Accountant, she specializes in business setup, regulatory compliance, and startup advisory. She also handles FDI matters, due diligence, and commercial litigation.",
    },
    {
      name: "Nishchint Paliwal",
      position: "Senior Consultant",
      experience: "Professional Practice: 11 Years",
      specialization: "Investements, Valuation & Financial Markets Analysis",
      image: "/assets/nischintPaliwal.jpg",
      credentials: "LLB, MBA",
      description:
        "Nishchint Paliwal is an investment banking professional with 25+ years of experience in corporate finance, asset management for NRIs, and startup advisory. He has led high-value transactions, fund-raising, and FDI structuring, and has held senior roles at top Indian banks. He brings a blend of global best practices and deep market insight.",
    },
    {
      name: "Amresh Saxena",
      position: "Senior Associate",
      experience: "Professional Practice: 15 Years",
      specialization: "Real Estate & Liaisoning",
      image: "/assets/amresh.jpeg", // Replace with actual image path or URL
      credentials: "M.A, MBA",
      description:
        "Expert in cross-industry expertise from startups, government, manufacturing, and global IT, excelling in operations, cost optimization, and quality management. Skilled in HR, finance, and strategic partnerships, I streamline processes, mitigate risks, and guide emerging enterprises in building robust, future-ready foundations.",
    },
    {
      name: "Vedant Adlakha",
      position: "Legal Consultant",
      experience: "Professional Practice: 3 Years",
      specialization: "Documentation, Title Search & Certifications",
      image: "/assets/vedant.jpg",
      credentials: "LLB, MBA",
      description:
        "Legal consultant with LL.B and 3 years’ experience in legal compliances, specializing in property title searches. MBA Finance graduate skilled in analyzing financial and legal aspects to ensure clear property titles and regulatory adherence. Committed to delivering accurate due diligence and risk mitigation for seamless real estate and business transactions.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of seasoned professionals brings decades of combined experience in NRI
            services, ensuring you receive expert guidance at every step of your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Links - appear on hover */}
                {/* <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </div>
                </div> */}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.position}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{member.credentials}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1"> Specialization</h4>
                  </div>

                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {/* Professional Overview */}
                    <p className="text-xs text-gray-600 leading-relaxed">{member.specialization}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {" "}
                      Professional Overview
                    </h4>
                    {/* <p className="text-xs text-gray-600">{member.specialization}</p> */}
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Professional Overview */}
                    <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>

                {/* Contact button */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-3 h-3" />
                    Contact
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">75+</div>
              <div className="text-gray-600 text-sm">Combined Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600 text-sm">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Industry Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
