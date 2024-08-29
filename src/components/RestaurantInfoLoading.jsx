import React from "react";

const RestaurantInfoLoading = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b border-gray-300">
        <div className="mb-4 sm:mb-0 sm:w-2/3">
          <div className="h-8 w-1/2 bg-gray-300 animate-pulse mb-2 rounded"></div>
          <div className="h-6 w-3/4 bg-gray-300 animate-pulse mb-2 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col items-center border rounded-lg border-gray-300 p-4">
          <div className="h-6 w-16 bg-gray-300 animate-pulse mb-1 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoLoading;
