import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../feature/ootasty/state/foodsSlice";
import authReducer from "../feature/ootasty/state/authSlice";
import adminReducer from "../feature/ootasty/state/adminSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    authUser: authReducer,
    admin: adminReducer,
  },
});
