import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useCheckUserAuthorizeOrNot = () => {
  const { user } = useSelector((state) => state.authUser);
  const check = () => {
    if (!null) {
      toast.warn("Register Or Login First");
    }
  };

  return check;
};
