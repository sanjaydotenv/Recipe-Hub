import { useDispatch } from "react-redux";
import { getAllStoresAPI } from "../api/getAllStores";
import { allStores } from "../state/adminSlice";

export const useAdminStores = () => {
  const dispatch = useDispatch();

  const allStoresData = async () => {
    const response = await getAllStoresAPI();

    dispatch(allStores(response.data.data.store.allStores));
  };

  return {
    allStoresData,
  };
};
