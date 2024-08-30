import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="container mx-auto px-6 flex flex-col gap-8 md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Delicious Food,
            <br />
            Delivered to You
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Experience the joy of gourmet meals from your favorite local restaurants, right at your
            doorstep.
          </p>
          <Link
            to="/home"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg inline-block"
          >
            Order Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.nijolcreative.com/wp-content/uploads/2023/07/Best-Food-Photographer-In-Bangladesh-Nijol-Creatives-high-quality-Food-Photography.png"
            alt="Delicious food spread"
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
