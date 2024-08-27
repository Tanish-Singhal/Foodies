import React from "react";
import { StarIcon } from "lucide-react";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    isOpen,
    locality,
  } = resData?.info || {};
  
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const discountInfo = header && subHeader ? `${header} ${subHeader}` : "";
  
  const isTopRated = avgRating >= 4.5;

  return (
    <div className="w-64 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 lg:w-72">
      <div className="relative">
        <img
          src={import.meta.env.VITE_RESTAURANT_IMG_API + cloudinaryImageId}
          alt={name || "Restaurant Image"}
          className="w-full h-44 object-cover"  
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div
          className={`absolute top-3 right-3 py-1 px-2 rounded-full text-white border-2 text-sm ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </div>
        
        {isTopRated && (
          <div className="absolute top-3 left-3 py-1 px-3 rounded-full text-white bg-gradient-to-r from-violet-500 to-indigo-500 border-2 border-white shadow-lg text-sm font-semibold flex items-center">
            <StarIcon className="w-4 h-4 mr-1 text-yellow-300 fill-current" />
            Top Rated
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold text-white truncate">
            {discountInfo || "No discounts available"}
          </h3>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate">
          {name || "Unknown Restaurant"}
        </h3>
        
        <div className="flex items-center mt-1 text-sm text-gray-600">
          <StarIcon className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
          
          <span className="font-semibold">{avgRating || "N/A"}</span>
          
          <span className="ml-4 font-semibold">
            {sla?.slaString || "Unknown SLA"}
          </span>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 truncate">
          {cuisines?.join(", ") || "No cuisines listed"}
        </p>
        
        <p className="mt-1 text-sm text-gray-600 truncate">
          ({locality || "Unknown locality"})
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
