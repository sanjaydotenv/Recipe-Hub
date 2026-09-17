import { createSlice } from "@reduxjs/toolkit";

const authSice = createSlice({
  name: "authUser",
  initialState: {
    user: null,
    accessToken: null,
    isAuthenticated: false,
  },
  reducers: {
    userRegister: (state, action) => {
      state.user = action.payload;
      ((state.accessToken = action.payload.accessToken),
        (state.isAuthenticated = true));
    },
    userLogin: () => {},
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { userRegister, userLogin , setAccessToken } = authSice.actions;

export default authSice.reducer;
