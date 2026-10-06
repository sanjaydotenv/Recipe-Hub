import React from "react";
import { Outlet } from "react-router";
import AdminAsideNav from "../feature/ootasty/ui/components/AdminAsideNav";
import Navbar from "../feature/ootasty/ui/components/Navbar";

const AdminLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#f9f7f7] p-5">
      {/* ================= NAVBAR ================= */}
      <div className="shrink-0">
        <Navbar />
      </div>

      {/* ================= ADMIN AREA ================= */}
      <div className="flex gap-4 pt-4 h-[calc(100vh-140px)]">
        {/* ================= SIDEBAR ================= */}
        <div className="shrink-0 h-full">
          <AdminAsideNav />
        </div>

        {/* ================= PAGE AREA ================= */}
        <main className="flex-1 min-w-0 h-full overflow-auto rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
