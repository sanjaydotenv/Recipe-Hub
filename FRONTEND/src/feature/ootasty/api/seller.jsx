import { axiosInsatnce } from "../../../config/axiosInstance";

export const createSeller = async (accessToken) => {
  console.log(accessToken);
  const seller = await axiosInsatnce.post(
    `/api/v2/store/create`,
    {},
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  console.log(seller);
};
