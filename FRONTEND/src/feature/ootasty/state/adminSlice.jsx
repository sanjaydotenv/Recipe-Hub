import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    loading: false,
    adminData: null,
    accessToken: null,
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
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setAdminData: (state, action) => {
      state.adminData = action.payload;
    },
  },
});

export const { allStores, getAllUsers, setAccessToken , setAdminData } = adminSlice.actions;

export default adminSlice.reducer;
