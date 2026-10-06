import { axiosInsatnce } from "../../../config/axiosInstance";

export const getAllStoresAPI = async () => {
  const response = await axiosInsatnce.get("/api/v2/store/getAllStores");

  return response;
};

export const getAllUsersAPI = async () => {
    const response = await axiosInsatnce.get("/api/v2/store/getAllUsers")

    return response
}