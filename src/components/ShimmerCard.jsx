import React from "react";

// ShimmerCard Component
const ShimmerCard = () => {
  return (
    <div className="w-72 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

        <div className="absolute inset-0"></div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="bg-gray-200 animate-pulse h-6 w-3/4"></h3>
        </div>
      </div>

      <div className="p-5">
        <h3 className="bg-gray-200 animate-pulse h-6 w-3/4"></h3>

        <div className="flex items-center mt-1">
          <span className="bg-gray-200 animate-pulse h-4 w-12 inline-block"></span>
          <span className="ml-4 bg-gray-200 animate-pulse h-4 w-24 inline-block"></span>
        </div>

        <p className="mt-2 bg-gray-200 animate-pulse h-4 w-3/4"></p>

        <p className="mt-1 bg-gray-200 animate-pulse h-4 w-1/2"></p>
      </div>
    </div>
  );
};

export default ShimmerCard;
