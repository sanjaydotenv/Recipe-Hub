import React from "react";
import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiBell,
  FiSettings,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";

const AdminAsideNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="w-64 shrink-0 h-[calc(100vh-10px)] mb-50">
      <div className="h-full bg-[#06251c] rounded-2xl overflow-hidden border border-[#0d3a2d] flex flex-col">
        {/* Admin Header */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#087f5b] flex items-center justify-center text-white font-bold text-lg shadow-lg">
              M
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white">
                Hello, Mayur 👋
              </h2>

              <p className="text-xs text-emerald-300/70 mt-0.5">
                Administrator
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-3 py-5">
          {/* Management */}
          <p className="px-3 mb-3 text-[10px] uppercase tracking-[0.18em] font-semibold text-emerald-300/40">
            Management
          </p>

          <div className="space-y-1.5">
            {/* Dashboard */}
            <button
              onClick={() => navigate("/admin")}
              className={`
                w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                ${
                  pathname === "/admin" &&
                  `bg-[#0a4938]
                text-white`
                }
                transition-all
              `}
            >
              <div className="w-8 h-8 rounded-lg text-white bg-white/10 flex items-center justify-center">
                <FiGrid size={17} />
              </div>

              <span className="text-sm font-medium text-white">Dashboard</span>

              <FiChevronRight size={15} className="ml-auto text-emerald-300" />
            </button>

            {/* Users */}
            <button
              className={`
                w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                text-emerald-50/70
                ${
                  pathname === "/admin/users" &&
                  `bg-[#0a4938]
                text-white`
                }
                hover:bg-white/5
                hover:text-white
                transition-all
              `}
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <FiUsers size={17} />
              </div>

              <div
                onClick={() => navigate("/admin/users")}
                className="flex-1 text-left "
              >
                <p className="text-sm font-medium">Users</p>

                <p className="text-[10px] text-white/35">Manage users</p>
              </div>

              <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50">
                128
              </span>
            </button>

            {/* Stores */}
            <button
              onClick={() => navigate("/admin/stores")}
              className={`
                w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                ${
                  pathname === "/admin/stores" &&
                  `bg-[#0a4938]
                text-white`
                }
                text-emerald-50/70
                hover:bg-white/5
                hover:text-white
                transition-all
              `}
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <FiShoppingBag size={17} />
              </div>

              <div className="flex-1 text-left">
                <p className="text-sm font-medium">Stores</p>

                <p className="text-[10px] text-white/35">Manage stores</p>
              </div>

              <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50">
                42
              </span>
            </button>
          </div>

          {/* Other */}
          <p className="px-3 mt-8 mb-3 text-[10px] uppercase tracking-[0.18em] font-semibold text-emerald-300/40">
            Other
          </p>

          <div className="space-y-1.5">
            {/* Notifications */}
            <button
              className="
                w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                text-emerald-50/70
                hover:bg-white/5
                hover:text-white
                transition-all
              "
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <FiBell size={17} />
              </div>

              <span className="text-sm font-medium">Notifications</span>

              <span className="ml-auto w-2 h-2 rounded-full bg-[#F8A90A]" />
            </button>

            {/* Settings */}
            <button
              className="
                w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                text-emerald-50/70
                hover:bg-white/5
                hover:text-white
                transition-all
              "
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <FiSettings size={17} />
              </div>

              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>

        {/* Bottom Profile */}
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/10">
            <div className="w-9 h-9 rounded-lg bg-[#F8A90A] text-black flex items-center justify-center font-bold text-sm">
              M
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Mayur Bairagi
              </p>

              <p className="text-[10px] text-white/40">Super Admin</p>
            </div>

            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-400/10 transition">
              <FiLogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminAsideNav;
