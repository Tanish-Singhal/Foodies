import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Foodies</h3>
            <p className="mt-2">Delicious food, delivered.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-orange-500 transition duration-300">
              Landing
            </Link>
            <Link to="/home" className="hover:text-orange-500 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500 transition duration-300">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-orange-500 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Foodies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
