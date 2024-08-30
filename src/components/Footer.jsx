import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Github, X, Linkedin } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { icon: Mail, text: "tanishsinghal510@gmail.com", href: "mailto:tanishsinghal510@gmail.com" },
    { icon: Phone, text: "+91 8851605054", href: "tel:+918851605054" },
    { icon: Github, text: "Tanish-Singhal", href: "https://www.github.com/Tanish-Singhal" },
    { icon: X, text: "TanishSing44334", href: "https://x.com/TanishSing44334" },
    { icon: Linkedin, text: "tanishsinghal1", href: "https://www.linkedin.com/in/tanishsinghal1" },
  ];

  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Foodies🍔</h3>
            <p className="text-gray-400 mb-4">
              Discover delicious food from top restaurants, delivered fresh to your door.
            </p>
            <p className="text-gray-400">&copy; 2024 Foodies. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-500 transition duration-300">
                  Landing
                </Link>
              </li>
              <li>
                <Link to="/home" className="hover:text-orange-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <item.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-600 mt-8 pt-4 text-center text-gray-400 text-sm">
          Built with 💖 by Tanish Singhal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
