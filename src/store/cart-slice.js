import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.changed = true;
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartitemIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartitemIndex];

      if (existingCartItem) {
        existingCartItem.amount =
          existingCartItem.amount + action.payload.amount;
      } else {
        state.items = state.items.concat(action.payload);
      }
    },
    removeItem(state, action) {
      state.changed = true;
      const existingCartItemIndex = state.items.findIndex(
        (el) => el.id === action.payload
      );

      const existingCartItem = state.items[existingCartItemIndex];
      state.totalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.amount === 1) {
        state.items = state.items.filter((el) => el.id !== action.payload);
      } else {
        existingCartItem.amount = existingCartItem.amount - 1;
      }
    },
    removeAllItems(state) {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
    },
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
