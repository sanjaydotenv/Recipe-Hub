import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../feature/ootasty/state/foodsSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
  },
});
