import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

import { useDispatch } from "react-redux";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";

import HomePage from "./feature/ootasty/ui/pages/HomePage";
import OrderPage from "./feature/ootasty/ui/pages/OrderPage";
import ExplorePage from "./feature/ootasty/ui/pages/ExplorePage";

import RegisterPage from "./feature/ootasty/ui/pages/RegisterPage";
import LoginPage from "./feature/ootasty/ui/pages/LoginPage";

import CreateStoreForm from "./feature/ootasty/ui/pages/CreateStoreForm";
import ProfilePage from "./feature/ootasty/ui/pages/ProfilePage";

import Dashboard from "./feature/ootasty/ui/pages/Dashboard";
import AddFood from "./feature/ootasty/ui/pages/AddFood";
import Products from "./feature/ootasty/ui/pages/Products";

import AdminPage from "./feature/ootasty/ui/pages/AdminPage";
import AllUserPage from "./feature/ootasty/ui/pages/AllUserPage";
import AllStores from "./feature/ootasty/ui/pages/AllStores";

import OrderConfirmed from "./feature/ootasty/ui/components/OrderConfirmed ";

import { axiosInsatnce } from "./config/axiosInstance";

import {
  setAccessToken,
  userRegister,
} from "./feature/ootasty/state/authSlice";

const App = () => {
  const dispatch = useDispatch();

  const [checkRole, setCheckRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const hydrateUser = async () => {
      try {
        const res = await axiosInsatnce.post(
          "/auth/api/v1/user/refresh-token",
          {},
          {
            withCredentials: true,
          },
        );

        const accessToken = res.data.data.accessToken;

        dispatch(setAccessToken(accessToken));

        const userRes = await axiosInsatnce.get("/auth/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const user = userRes.data.data.user;

        if (isMounted) {
          dispatch(userRegister(user));
          setCheckRole(user.role);
        }
      } catch (error) {
        console.error(
          "Authentication failed:",
          error.response?.data?.message || error.message,
        );

        if (isMounted) {
          setCheckRole("user");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    hydrateUser();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090f] text-white">
        <p className="text-lg animate-pulse">Loading your account...</p>
      </div>
    );
  }

  const authRoutes = [
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];

  const userRoutes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
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
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "create-store",
          element: <CreateStoreForm />,
        },
      ],
    },
  ];

  const sellerRoutes = [
    {
      path: "/store",
      element: <MainLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "addFood",
          element: <AddFood />,
        },
      ],
    },
  ];

  const adminRoutes = [
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminPage />,
        },
        {
          path: "users",
          element: <AllUserPage />,
        },
        {
          path: "stores",
          element: <AllStores />,
        },
      ],
    },
  ];

  const routes = [
    {
      element: <AuthLayout />,
      children: authRoutes,
    },

    ...(checkRole === "admin" ? adminRoutes : []),

    ...(checkRole === "seller" ? sellerRoutes : []),

    ...(checkRole === "user" || checkRole === "seller" ? userRoutes : []),

    {
      path: "*",
      element: (
        <Navigate
          to={
            checkRole === "admin"
              ? "/admin"
              : checkRole === "seller"
                ? "/store/dashboard"
                : checkRole === "user"
                  ? "/"
                  : "/login"
          }
          replace
        />
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
