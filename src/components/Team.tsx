import React from "react";
import { Plus, X } from "lucide-react";

const Team = () => {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);

  const openMemberModal = (member: any) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

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
      image: "/assets/NischintLatest.png",
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
      position: "Associate",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Plus Button */}
                <button
                  onClick={() => openMemberModal(member)}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5 text-blue-600" />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.position}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 font-medium">{member.credentials}</p>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {member.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                <button
                  onClick={closeMemberModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full md:w-48 h-64 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <p className="text-blue-600 font-semibold text-lg mb-2">
                      {selectedMember.position}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
                        <p className="text-gray-600">{selectedMember.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Credentials</h4>
                        <p className="text-gray-600">{selectedMember.credentials}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                        <p className="text-gray-600">{selectedMember.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
