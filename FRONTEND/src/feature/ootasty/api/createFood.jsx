import { axiosInsatnce } from "../../../config/axiosInstance";

export const addFood = async (data, accessToken) => {
  console.log(accessToken);
  const response = await axiosInsatnce.post("/api/v3/foods/add-food", data, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const deleteFood = async (id, accessToken) => {
  await axiosInsatnce.delete(`/api/v3/foods/delete-food/${id}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};
