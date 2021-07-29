import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onOpen(state) {
        state.isModalOpen = true;
    },
    onClose(state) {
        state.isModalOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
