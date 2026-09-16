import { axiosInsatnce } from "../../../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { allFoods, oneFood } from "../state/foodsSlice";

export const handleFoodsData = async (dispatch) => {
  const data = await axiosInsatnce.get("/public/foods/get-all-foods");

  dispatch(allFoods(data));
};

export const getAllData = () => {
  const { allFoodsData } = useSelector((state) => state.foods);

  return allFoodsData;
};

export const useFoodCard = async (id, dispatch) => {
  const data = await axiosInsatnce.post(`/public/foods/foodOne/${id}`);

  dispatch(oneFood(data.data.data.food));
};
