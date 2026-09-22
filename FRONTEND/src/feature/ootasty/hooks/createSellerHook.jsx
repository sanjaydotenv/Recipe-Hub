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
    await handleAccessToken(dispatch);

    await createSeller(accessToken)
  };

  return { createSellerAccount };
};
