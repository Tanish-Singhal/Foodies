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
    <div className="p-4 bg-white shadow-md rounded-lg max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b border-gray-300">
        <div className="mb-4 sm:mb-0 sm:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{name}</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            {cuisines.join(", ")}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {areaName}, {lastMileTravelString}
          </p>
        </div>
        <div className="flex flex-col items-center border rounded-lg border-gray-300 p-4">
          <p className="flex items-center gap-1 mb-1 text-green-500 text-lg sm:text-xl">
            <StarIcon className="w-4 h-4 fill-current" /> 
            <div className="font-semibold">
              {avgRatingString}
            </div>
          </p>
          <p className="text-xs sm:text-sm border-t font-semibold text-gray-500 border-gray-300 pt-1">{totalRatingsString}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="flex items-center gap-2 text-gray-700">
          <Clock8 className="w-4 h-4 text-gray-500" /> {slaString}
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <Wallet className="w-4 h-4 text-gray-500" /> {costForTwoMessage}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
