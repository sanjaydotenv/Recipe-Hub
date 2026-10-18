import { useDispatch, useSelector } from "react-redux";
import { handleFoodsData } from "../api/foods";
import { deleteFood } from "../api/createFood";

export const useProductHook = () => {
  const dispatch = useDispatch();

  const getAllFoodsData = async () => {
    await handleFoodsData(dispatch);
  };

  const deleteProduct = async (PRDID) => {
    await deleteFood(PRDID);
  };

  return { getAllFoodsData, deleteProduct };
};
