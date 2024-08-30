import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-orange-200 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">About Foodies</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connecting food lovers with their favorite local restaurants, one delicious meal at a
          time.
        </p>
      </div>
    </section>
  );
};

export default Hero;
