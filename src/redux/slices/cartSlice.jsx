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
        item: action.payload.item,
        quantity: 1,
      });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => {
        item.id !== action.payload.id;
      });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
