import { useDispatch } from "react-redux";
import {
  getAllStoresAPI,
  getAllUsersAPI,
} from "../api/getAllStores";
import { allStores, getAllUsers } from "../state/adminSlice";

export const useAdminStores = () => {
  const dispatch = useDispatch();

  const allStoresData = async (accessToken) => {
    const response = await getAllStoresAPI(accessToken);

    dispatch(allStores(response.data.data.store.allStores));
  };

  const getAllUsersData = async (accessToken) => {
    const response = await getAllUsersAPI(accessToken);
    dispatch(getAllUsers(response.data.data.users.allUsers));
  };

  return {
    allStoresData,
    getAllUsersData,
  };
};
