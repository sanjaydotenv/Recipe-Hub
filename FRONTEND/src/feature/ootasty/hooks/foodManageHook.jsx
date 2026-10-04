import { addFood } from "../api/createFood";
import { useSelector } from "react-redux";

export const useFoodManageHook = () => {
  const authData = useSelector((state) => state.authUser);

  console.log("AUTH DATA:", authData);

  const addFoodCall = async (foodData) => {
    const formData = new FormData();

    formData.append("foodTitle", foodData.foodTitle);
    formData.append("foodDescription", foodData.foodDescription);
    formData.append("foodPrice", foodData.foodPrice);
    formData.append("foodImage", foodData.foodImage);

    const response = await addFood(formData, authData.accessToken);

    console.log(response);
  };

  return {
    addFoodCall,
  };
};
