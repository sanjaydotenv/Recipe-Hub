import { axiosInsatnce } from "../../../config/axiosInstance";

export const handleFoodsData = async () => {
  console.log("running");
  const data = await axiosInsatnce.get("/public/foods/get-all-foods");
  console.log(data);

  return {};
};
