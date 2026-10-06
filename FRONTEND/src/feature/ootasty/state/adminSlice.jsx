import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    allStores: null,
  },
  reducers: {
    allStores: (state, action) => {
      state.allStores = action.payload;
    },
  },
});

export const { allStores } = adminSlice.actions;

export default adminSlice.reducer;
