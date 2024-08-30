import React from "react";

const Story = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Foodies was born out of a simple idea: to bring the diverse flavors of local
              restaurants right to your doorstep. Founded in 2020, we started as a small team of
              food enthusiasts in Delhi, driven by our passion for great food and exceptional
              service.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a local delivery service has now grown into a platform connecting
              thousands of restaurants with hungry customers across multiple cities. Our journey has
              been flavored with challenges, seasoned with determination, and garnished with the joy
              of satisfied customers.
            </p>
            <p className="text-gray-600">
              Today, Foodies stands as a testament to our commitment to supporting local businesses
              while satisfying the cravings of food lovers everywhere.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://lvivity.com/wp-content/uploads/2018/08/dev_team.jpg"
              alt="Foodies team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
