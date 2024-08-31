import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <img src={`/api/placeholder/${item.imageWidth}/${item.imageHeight}`} alt={item.name} className="w-full sm:w-24 h-24 object-cover rounded-md mb-4 sm:mb-0" />
    <div className="flex-grow ml-0 sm:ml-6 text-center sm:text-left">
      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
      <p className="text-indigo-600 font-medium mt-1">${item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center mt-4 sm:mt-0">
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 rounded-full bg-gray-200 hover:bg-indigo-200 transition-colors duration-200">
        <Minus size={16} />
      </button>
      <span className="mx-4 font-semibold text-gray-700">{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 rounded-full bg-gray-200 hover:bg-indigo-200 transition-colors duration-200">
        <Plus size={16} />
      </button>
    </div>
    <button onClick={() => removeItem(item.id)} className="mt-4 sm:mt-0 sm:ml-6 text-red-500 rounded-full p-2 hover:bg-red-200 hover:rounded-full hover:p-2 transition-colors duration-200">
      <Trash2 size={24} />
    </button>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Gourmet Pasta", price: 19.99, quantity: 2, imageWidth: 200, imageHeight: 200 },
    { id: 2, name: "Artisan Pizza", price: 29.99, quantity: 1, imageWidth: 200, imageHeight: 200 },
    { id: 3, name: "Deluxe Sushi Set", price: 39.99, quantity: 3, imageWidth: 200, imageHeight: 200 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 4.99;
  const tax = subtotal * 0.18; 
  const total = subtotal + delivery + tax;

  return (
    <div className="min-h-screen bg-[#fcfcfcda] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
          <ShoppingCart className="mr-4" size={36} /> Your Delightful Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {items.map(item => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
            ))}
            {items.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-xl text-gray-600">Your cart is empty. Add some delicious items to get started!</p>
              </div>
            )}
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-8 h-min sticky top-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Taxes</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-xl font-semibold text-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-orange-400 text-white py-3 mt-8 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-500">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;