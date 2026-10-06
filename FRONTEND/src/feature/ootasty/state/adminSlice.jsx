import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    allStores: null,
    allUsers: null,
  },
  reducers: {
    allStores: (state, action) => {
      state.allStores = action.payload;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { allStores , getAllUsers } = adminSlice.actions;

export default adminSlice.reducer;
