import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
console.log(initialState);

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((cartItem) => {
        return cartItem.item.card.info.id !== action.payload;
      });
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload;

      const itemToIncrease = state.items.find((cartItem) => {
        return cartItem.item.card.info.id === id;
      });

      if (itemToIncrease) {
        itemToIncrease.quantity = itemToIncrease.quantity + 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const id = action.payload;

      const itemToDecrease = state.items.find((cartItem) => {
        return cartItem.item.card.info.id === id;
      });

      if (itemToDecrease) {
        itemToDecrease.quantity = itemToDecrease.quantity - 1;
        
        if (itemToDecrease.quantity === 0) {
          state.items = state.items.filter((cartItem) => {
            return cartItem.item.card.info.id !== id;
          })
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
