import React from "react";
import { StarIcon, Clock8, Wallet } from "lucide-react";

const RestaurantInfo = ({ info }) => {
  const { 
    name, 
    sla = {},
    areaName, 
    costForTwoMessage, 
    totalRatingsString, 
    avgRatingString, 
    cuisines = []
  } = info;

  const { lastMileTravelString = 'N/A', slaString = 'N/A' } = sla;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-screen-lg mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start pb-6 border-b border-gray-300">
        <div className="mb-6 lg:mb-0 lg:w-2/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-sm lg:text-base text-gray-600 mb-1">
            {cuisines.join(", ")}
          </p>
          <p className="text-sm lg:text-base text-gray-600">
            {areaName}, {lastMileTravelString}
          </p>
        </div>
        <div className="flex flex-col items-center border rounded-lg border-gray-300 p-4">
          <p className="flex items-center gap-1 mb-1 text-green-500 text-lg lg:text-xl">
            <StarIcon className="w-5 h-5 fill-current" /> 
            <div className="font-semibold">
            {avgRatingString}
            </div>
          </p>
          <p className="text-sm border-t font-semibold text-gray-500 border-gray-300 pt-1">{totalRatingsString}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p className="flex items-center gap-2 text-gray-700">
          <Clock8 className="w-5 h-5 text-gray-500" /> {slaString}
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Wallet className="w-5 h-5 text-gray-500" /> {costForTwoMessage}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
