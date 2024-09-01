import React from "react";
import { ShoppingCart } from "lucide-react";
import CartItemsList from "./CartItemsList";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-[#fcfcfcda] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
          <ShoppingCart className="mr-2 md:mr-4" size={28} md:size={36} /> Your Delightful Cart
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {items.map((item) => (
              <CartItemsList item={item} key={item.item.card.info.id} />
            ))}
            {items.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-lg md:text-xl text-gray-600">
                  Your cart is empty. Add some delicious items to get started!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
