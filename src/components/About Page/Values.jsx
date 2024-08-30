import React from "react";
import { Utensils, Users, Truck, Heart } from "lucide-react";

const Values = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Utensils,
              title: "Quality First",
              description:
                "We partner only with the best restaurants to ensure top-notch food quality.",
            },
            {
              icon: Users,
              title: "Customer Satisfaction",
              description:
                "Your happiness is our priority. We go the extra mile to ensure a great experience.",
            },
            {
              icon: Truck,
              title: "Timely Delivery",
              description:
                "We understand the value of your time and strive to deliver your food promptly.",
            },
            {
              icon: Heart,
              title: "Community Support",
              description:
                "We're committed to supporting local businesses and giving back to our community.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <value.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
