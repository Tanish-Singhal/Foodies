import React from "react";

const Working = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {[
            { step: 1, title: "Choose Your Restaurant", description: "Browse our list" },
            { step: 2, title: "Choose Your Meal", description: "Browse our extensive menu" },
            {
              step: 3,
              title: "Place Your Order",
              description: "Select items and customize as needed",
            },
            { step: 4, title: "Enjoy Your Food", description: "We'll deliver it fresh and hot" },
          ].map((item, index) => (
            <div key={index} className="mb-8 md:mb-0 text-center">
              <div className="bg-orange-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
