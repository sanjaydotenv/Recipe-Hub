import { useDispatch } from "react-redux";
import { getAllStoresAPI, getAllUsersAPI } from "../api/getAllStores";
import { allStores, getAllUsers } from "../state/adminSlice";

export const useAdminStores = () => {
  const dispatch = useDispatch();

  const allStoresData = async () => {
    const response = await getAllStoresAPI();

    dispatch(allStores(response.data.data.store.allStores));
  };

  const getAllUsersData = async () => {
    const response = await getAllUsersAPI()
    dispatch(getAllUsers(response.data.data.users.allUsers))
  }

  return {
    allStoresData,
    getAllUsersData
  };
};
