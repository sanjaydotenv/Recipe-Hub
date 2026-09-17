import React from "react";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../src/feature/ootasty/ui/pages/HomePage";
import OrderPage from "./feature/ootasty/ui/pages/OrderPage";
import ExplorePage from "./feature/ootasty/ui/pages/ExplorePage";
import AuthLayout from "./layout/AuthLayout";
import RegisterPage from "./feature/ootasty/ui/pages/RegisterPage";
import LoginPage from "./feature/ootasty/ui/pages/LoginPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
