import { configureStore } from "@reduxjs/toolkit";
import { foodsSlice } from "../feature/ootasty/state/foodsSlice";

export const store = configureStore({
  reducer: {
    foods: foodsSlice.reducer,
  },
});
