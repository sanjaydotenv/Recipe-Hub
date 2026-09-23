import { useDispatch, useSelector } from "react-redux";
import { createSeller } from "../api/seller";
import { Navigate } from "react-router";
import { handleAccessToken } from "../api/users";

export const useSeller = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, accessToken } = useSelector(
    (state) => state.authUser,
  );

  console.log(accessToken)

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const createSellerAccount = async () => {
    const token = await handleAccessToken(dispatch);


    const res = await createSeller(token)
    console.log(res)
  };

  return { createSellerAccount };
};
