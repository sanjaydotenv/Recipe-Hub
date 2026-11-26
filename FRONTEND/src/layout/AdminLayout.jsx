import React, { useEffect } from "react";
import { Outlet } from "react-router";
import AdminAsideNav from "../feature/ootasty/ui/components/AdminAsideNav";
import { useAdminStores } from "../feature/ootasty/hooks/AdminStoreshook";
import {
  getAdminProfileAPI,
  tokenRotationAPI,
} from "../feature/ootasty/api/getAllStores";
import {
  setAccessToken,
  setAdminData,
} from "../feature/ootasty/state/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const hydrateAdmin = async () => {
    const response = await tokenRotationAPI();

    dispatch(setAccessToken(response.data.data.accessToken));

    const data = await getAdminProfileAPI(response.data.data.accessToken);

    dispatch(setAdminData(data.data.data.user));
  };

  useEffect(() => {
    hydrateAdmin();
  }, []);

  const { accessToken } = useSelector((state) => state.admin);

  const { getAllUsersData, allStoresData } = useAdminStores();

  useEffect(() => {
    if (!accessToken) return;

    getAllUsersData(accessToken);
    allStoresData(accessToken);
  }, [accessToken]);
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
