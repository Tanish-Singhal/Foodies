import React from "react";
import { Star, Clock, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Foodies?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Top-rated Restaurants",
              description: "Curated selection of the best local eateries",
            },
            {
              icon: Clock,
              title: "Fast Delivery",
              description: "Hot meals delivered right to your doorstep",
            },
            {
              icon: Truck,
              title: "Live Tracking",
              description: "Real-time updates on your order status",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <feature.icon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
