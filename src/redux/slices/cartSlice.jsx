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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
