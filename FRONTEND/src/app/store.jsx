import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../feature/ootasty/state/foodsSlice";
import authReducer from "../feature/ootasty/state/authSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    authUser: authReducer,
  },
});
