import { axiosInsatnce } from "../../../config/axiosInstance";
import { useDispatch } from "react-redux";
import { allFoods } from "../state/foodsSlice";

export const handleFoodsData = async () => {
  const dispatch = useDispatch();

  const data = await axiosInsatnce.get("/public/foods/get-all-foods");

  dispatch(allFoods(data));
};
