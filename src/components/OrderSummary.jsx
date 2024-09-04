import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingBag, Truck, Receipt, CheckCircle } from "lucide-react";
import {toast} from "react-hot-toast"

const OrderSummary = () => {
  const items = useSelector((state) => state.cart.items);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subTotal = items.reduce((acc, item) => {
    const { finalPrice, defaultPrice, price } = item.item.card.info;
    const itemPrice = finalPrice ?? defaultPrice ?? price;
    return acc + (itemPrice / 100) * item.quantity;
  }, 0);

  const baseDeliveryCost = 50;
  const deliveryCost = subTotal > 500 ? 0 : baseDeliveryCost;
  const gstTax = subTotal * 0.1;
  const totalCost = subTotal + deliveryCost + gstTax;

  const handleOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 h-min sticky top-0 md:top-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
          <ShoppingBag className="mr-2 text-orange-400" />
          Order Summary
        </h3>
        <p className="text-gray-500 text-base md:text-lg text-center">
          Your cart is empty. Add some delicious items to see the order summary!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 h-min sticky top-0 md:top-8 transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8 flex items-center">
        <ShoppingBag className="mr-2 text-orange-400" />
        Order Summary
      </h3>

      <div className="space-y-4 md:space-y-6">
        <div className="flex justify-between items-center text-base md:text-lg text-gray-700">
          <span className="flex items-center">
            <Receipt className="mr-2 text-gray-500" size={20} />
            Subtotal
          </span>
          <span className="font-medium">₹{subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-base md:text-lg text-gray-700">
          <span className="flex items-center">
            <Truck className="mr-2 text-gray-500" size={20} />
            Delivery
          </span>
          <span className={`font-medium ${deliveryCost === 0 ? "text-green-500" : ""}`}>
            {deliveryCost === 0 ? "FREE" : `₹${deliveryCost.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between items-center text-base md:text-lg text-gray-700">
          <span>GST (10%)</span>
          <span className="font-medium">₹{gstTax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-4 md:pt-6 mt-4 md:mt-6">
          <div className="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900">
            <span>Total</span>
            <span className="text-orange-500">₹{totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleOrder}
        disabled={isOrdering}
        className={`w-full ${
          isOrdering ? "bg-gray-400" : "bg-orange-500"
        } text-white py-3 md:py-4 mt-8 md:mt-10 rounded-lg text-lg md:text-xl font-bold shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
      >
        {isOrdering ? "Processing..." : "Proceed to Checkout"}
      </button>

      {subTotal < 500 && (
        <p className="mt-4 text-sm md:text-base text-gray-500 text-center">
          Add ₹{(500 - subTotal).toFixed(2)} more to your order for free delivery!
        </p>
      )}

      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg transition-all transform scale-105">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={40} />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">
              Your order is on the way! You will receive a notification soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
