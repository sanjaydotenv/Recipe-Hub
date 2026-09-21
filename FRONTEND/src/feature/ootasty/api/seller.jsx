import { axiosInsatnce } from "../../../config/axiosInstance";

export const createSeller = (accessToken) => {
  const seller = axiosInsatnce.post(`/api/v2/store/create`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(data)
};
