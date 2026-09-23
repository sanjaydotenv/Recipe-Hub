import { axiosInsatnce } from "../../../config/axiosInstance";

export const createSeller = async (accessToken, data) => {
  const seller = await axiosInsatnce.post(
    `/api/v2/store/create`,
    data ,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return seller
};
