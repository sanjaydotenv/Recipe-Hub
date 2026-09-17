import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useCheckUserAuthorizeOrNot = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authUser);
  const check = () => {
    if (!user) {
      navigate("/register");
      toast.warn("Register Or Login First");
      return
    }

    navigate("/order")
  };

  return check;
};
