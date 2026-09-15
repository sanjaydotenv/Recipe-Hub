import { axiosInsatnce } from "../../../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { allFoods } from "../state/foodsSlice";

export const handleFoodsData = async (dispatch) => {
  const data = await axiosInsatnce.get("/public/foods/get-all-foods");

  dispatch(allFoods(data));
};

export const getAllData = () => {
  const { allFoodsData } = useSelector((state) => state.foods);

  return allFoodsData;
};
