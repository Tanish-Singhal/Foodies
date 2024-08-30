import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-orange-200 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our service, need help with
          an order, or just want to say hello, we're here to listen.
        </p>
      </div>
    </section>
  );
};

export default Hero;
