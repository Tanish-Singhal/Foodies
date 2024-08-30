import React from "react";
import { Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

const Information = () => {
  const contactInfo = [
    { icon: Mail, text: "tanishsinghal510@gmail.com", href: "mailto:tanishsinghal510@gmail.com" },
    { icon: Phone, text: "+91 8851605054", href: "tel:+918851605054" },
    { icon: Github, text: "Tanish-Singhal", href: "https://www.github.com/Tanish-Singhal" },
    { icon: Twitter, text: "TanishSing44334", href: "https://x.com/TanishSing44334" },
    { icon: Linkedin, text: "tanishsinghal1", href: "https://www.linkedin.com/in/tanishsinghal1" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-8 text-center">
            If you prefer, you can also reach us through the following channels:
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-4">
                    <item.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;