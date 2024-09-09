import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItemsList = ({ item }) => {
  console.log(item);
  const { name, finalPrice, defaultPrice, price, imageId, id } = item.item.card.info;
  const { quantity } = item;

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from the cart", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  const displayPrice = finalPrice ?? defaultPrice ?? price;

  return (
    <div className="flex flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6 gap-4 md:gap-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <img
        src={import.meta.env.VITE_MENU_ITEM_IMG + imageId}
        alt={name}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex-grow text-left">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium mt-1">₹{(displayPrice / 100).toFixed(2)}</p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => handleDecreaseQuantity(id)}
          className="p-2 md:p-3 rounded-lg bg-gray-300 hover:bg-indigo-300 transition-colors duration-200"
        >
          <Minus size={14} />
        </button>
        <span className="mx-2 md:mx-4 font-semibold text-gray-700">{quantity}</span>
        <button
          onClick={() => handleIncreaseQuantity(id)}
          className="p-2 md:p-3 rounded-lg bg-gray-300 hover:bg-indigo-300 transition-colors duration-200"
        >
          <Plus size={14} />
        </button>
      </div>

      <button
        onClick={() => handleRemoveItem(id)}
        className="text-red-500 rounded-full p-1 md:p-2 hover:bg-red-200 transition-colors duration-200"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItemsList;
