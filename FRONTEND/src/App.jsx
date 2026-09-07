import React from "react";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../src/feature/ootasty/ui/pages/HomePage";
import OrderPage from "./feature/ootasty/ui/pages/OrderPage";
import ExplorePage from "./feature/ootasty/ui/pages/ExplorePage";

const App = () => {
  const router = createBrowserRouter([
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
