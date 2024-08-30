import React from "react";

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Patel",
              role: "Founder & CEO",
              image:
                "https://img.freepik.com/premium-photo/smiling-indian-male-entrepreneur-office-space-ai-generated_843560-1554.jpg",
            },
            {
              name: "Megan Fox",
              role: "Head of Operations",
              image:
                "https://img.freepik.com/premium-photo/generative-ai-illustration-attractive-female-ceo-large-company-dressed-luxury-business-fashion_58460-15160.jpg",
            },
            {
              name: "John Parker",
              role: "Chief Technology Officer",
              image:
                "https://img.freepik.com/premium-photo/businessman-suit-man-person-ceo-generate-ai_98402-32373.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
