import React from "react";
import { StarIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleToCart = (item) => {
    dispatch(addToCart(item));
    toast.success('Item added to cart', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="space-y-4 mt-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-lg shadow-md overflow -hidden flex flex-col sm:flex-row"
        >
          <div className="flex-1 p-4 flex flex-col justify-between order-2 sm:order-1">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="mb-2 sm:mb-0">
                  <h2 className="text-md sm:text-lg font-semibold text-gray-900">
                    {item?.card?.info?.name}
                  </h2>
                  <p className="text-md font-medium text-gray-700">
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
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={() => {
                  handleToCart(item)
                }}
                className="bg-white text-orange-500 hover:bg-orange-400 hover:text-white font-bold p-2 rounded-md shadow-md transition-all w-full"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="w-full sm:w-32 h-32 sm:h-auto order-1 sm:order-2">
            <img
              className="w-full h-full object-cover"
              src={`https://foodies-server-xi.vercel.app/api/restaurant-images/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
