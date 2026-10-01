import React from "react";
import { Outlet, useLocation } from "react-router";

import Navbar from "../feature/ootasty/ui/components/Navbar";
import DashboardAside from "../feature/ootasty/ui/components/DashboardAside";

const MainLayout = () => {
  const { pathname } = useLocation();

  const isPublicPage =
    pathname === "/" ||
    pathname === "/order" ||
    pathname === "/explore" ||
    pathname == "/profile"

  return (
    <div className="min-h-screen bg-[var(--secondary-color)]">

      {/* Navbar */}
      <div className="px-8 py-5">
        <Navbar />
      </div>

      {/* Dashboard Area */}
      <div className="flex p-5">

        {/* Sidebar */}
        {!isPublicPage && <DashboardAside />}

        {/* Main Content */}
        <main className="min-w-0 flex-1 bg-[#f6f8f7]">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MainLayout;