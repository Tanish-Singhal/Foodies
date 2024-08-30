import React from "react";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience Foodies?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers and discover the best local cuisines in your area.
        </p>
        <Link
          to="/home"
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg inline-block"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default Action;
