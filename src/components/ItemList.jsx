import React from "react";
import { StarIcon } from "lucide-react";

const ItemList = ({ items }) => {
  return (
    <div className="space-y-4 mt-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="mb-2 sm:mb-0">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item?.card?.info?.name}
                  </h2>
                  <p className="text-sm font-medium text-gray-700">
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </p>
                </div>
                {item.card.info.ratings?.aggregatedRating?.rating && (
                  <div className="flex items-center bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full text-xs">
                    <StarIcon className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">
                      {item.card.info.ratings.aggregatedRating.rating}
                    </span>
                    <span className="ml-1 text-yellow-500">
                      ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                    </span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative w-full sm:w-32 h-32 sm:h-auto">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${import.meta.env.VITE_MENU_ITEM_IMG}${
                  item.card.info.imageId
                }`}
                alt={item.card.info.name}
              />
              <button className="absolute bottom-1 left-8 bg-white text-orange-500 hover:bg-orange-400 hover:text-white font-bold p-2 px-4 rounded-md shadow-md transition-all">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
