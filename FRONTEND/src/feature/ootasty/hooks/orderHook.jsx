import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { axiosInsatnce } from "../../../config/axiosInstance";
import { oneFoodEmpty } from "../state/foodsSlice";
import { useState } from "react";

export const useCheckUserAuthorizeOrNot = () => {

  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authUser);
  const check = async (id) => {
    if (!user) {
      navigate("/register");
      toast.warn("Register Or Login First");
      return;
    }

    navigate("/order");
  };

  const handleBackExplorePage = () => {
    dispatch(oneFoodEmpty());
  };

  return {
    check,
    handleBackExplorePage,
    isOrderPlaced,
    setIsOrderPlaced
  };
};
