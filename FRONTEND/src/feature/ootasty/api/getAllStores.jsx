import { axiosInsatnce } from "../../../config/axiosInstance";

export const getAllStoresAPI = async (accessToken) => {
  const response = await axiosInsatnce.get("/v2/store/getAllStores", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return response;
};

export const getAllUsersAPI = async (accessToken) => {
  const response = await axiosInsatnce.get("/v2/store/getAllUsers", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const getAdminProfileAPI = async (accessToken) => {
  const response = await axiosInsatnce.get("/auth/api/v1/user/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const tokenRotationAPI = async () => {
  const response = await axiosInsatnce.post("/auth/api/v1/user/refresh-token");

  return response;
};
