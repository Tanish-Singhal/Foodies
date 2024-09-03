import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from "../redux/slices/cartSlice";

const CartItemsList = ({ item }) => {
  console.log(item);
  const { name, finalPrice, defaultPrice, price, imageId, id } = item.item.card.info;
  const { quantity } = item;

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  const displayPrice = finalPrice ?? defaultPrice ?? price;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6 md:gap-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <img
        src={import.meta.env.VITE_MENU_ITEM_IMG + imageId}
        alt={name}
        className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
      />

      <div className="flex-grow text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium mt-1">
          ₹{(displayPrice / 100).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        <button
          onClick={() => handleDecreaseQuantity(id)}
          className="p-1 md:p-2 rounded-full bg-gray-200 hover:bg-indigo-200 transition-colors duration-200"
        >
          <Minus size={14} />
        </button>
        <span className="mx-2 md:mx-4 font-semibold text-gray-700">{quantity}</span>
        <button
          onClick={() => handleIncreaseQuantity(id)}
          className="p-1 md:p-2 rounded-full bg-gray-200 hover:bg-indigo-200 transition-colors duration-200"
        >
          <Plus size={14} />
        </button>
      </div>

      <button
        onClick={() => handleRemoveItem(id)}
        className="mt-4 md:mt-0 text-red-500 rounded-full p-1 md:p-2 hover:bg-red-200 transition-colors duration-200"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItemsList;
