import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFoodsData: null,
};

export const foodsSlice = createSlice({
  name: "allFoods",
  initialState,
  reducers: {
    allFoods: (state, action) => {
      state.allFoodsData = action.payload.data.allFoods;
    },
  },
});

export const { allFoods } = foodsSlice.actions;

export default foodsSlice.reducer;
