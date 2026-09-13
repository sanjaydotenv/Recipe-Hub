import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFoodsData: [],
};

export const foodsSlice = createSlice({
  name: "allFoods",
  initialState,
  reducers: {
    allFoods: (state, action) => {
      console.log(state)
      console.log("runnint hehe")
      console.log(action)
    },
  },
});

export const { allFoods } = foodsSlice.actions;

export default foodsSlice.reducer;
