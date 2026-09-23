import React from "react";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../src/feature/ootasty/ui/pages/HomePage";
import OrderPage from "./feature/ootasty/ui/pages/OrderPage";
import ExplorePage from "./feature/ootasty/ui/pages/ExplorePage";
import AuthLayout from "./layout/AuthLayout";
import RegisterPage from "./feature/ootasty/ui/pages/RegisterPage";
import LoginPage from "./feature/ootasty/ui/pages/LoginPage";
import { axiosInsatnce } from "./config/axiosInstance";
import CreateStoreForm from "../src/feature/ootasty/ui/pages/CreateStoreForm"
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  userRegister,
} from "./feature/ootasty/state/authSlice";
import OrderConfirmed from "./feature/ootasty/ui/components/OrderConfirmed ";
import ProfilePage from "./feature/ootasty/ui/pages/ProfilePage";

const App = () => {
  const dispatch = useDispatch();

  const hydrateUser = async () => {
    const res = await axiosInsatnce.post(
      "/auth/api/v1/user/refresh-token",
      {},
      {
        withCredentials: true,
      },
    );

    const accessToken = res.data.data.accessToken;

    dispatch(setAccessToken(accessToken));

    const user = await axiosInsatnce.get("/auth/api/v1/user/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(userRegister(user.data.data.user));
  };

  hydrateUser();

  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "explore",
          element: <ExplorePage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "order/confirm-order",
          element: <OrderConfirmed />,
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/create-store",
          element: <CreateStoreForm />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
