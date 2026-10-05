import { useDispatch, useSelector } from "react-redux";
import { handleFoodsData } from "../api/foods";

export const useProductHook = () => {
  const dispatch = useDispatch();
  
  const getAllFoodsData = async () => {
      await handleFoodsData(dispatch);
  };

  return { getAllFoodsData };
};
