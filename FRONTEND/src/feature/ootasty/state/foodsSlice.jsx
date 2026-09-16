import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFoodsData: null,
  oneFood: null,
};

export const foodsSlice = createSlice({
  name: "allFoods",
  initialState,
  reducers: {
    allFoods: (state, action) => {
      state.allFoodsData = action.payload.data.allFoods;
    },
    oneFood: (state, action) => {
      state.oneFood = action.payload;
    },
  },
});

export const { allFoods, oneFood } = foodsSlice.actions;

export default foodsSlice.reducer;
