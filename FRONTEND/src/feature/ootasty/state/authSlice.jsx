import { createSlice } from "@reduxjs/toolkit";

const authSice = createSlice({
  name: "authUser",
  initialState: {
    user: null,
  },
  reducers: {
    userRegister: () => {},
    userLogin: () => {},
  },
});

export const { userRegister, userLogin } = authSice.actions;

export default authSice.reducer;
