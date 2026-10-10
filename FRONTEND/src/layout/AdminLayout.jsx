import React from "react";
import { Outlet } from "react-router";
import AdminAsideNav from "../feature/ootasty/ui/components/AdminAsideNav";

const AdminLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#f9f7f7] p-3 sm:p-4 lg:p-5">
      <div className="flex h-full min-h-0 gap-4">
        {/* Sidebar */}
        <div className="hidden md:block w-56 lg:w-64 shrink-0 h-full">
          <AdminAsideNav />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto overflow-x-hidden rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
