import {
  LayoutDashboard,
  Package,
  Plus,
  ShoppingBag,
  Users,
  Settings,
  Store,
  ChevronRight,
} from "lucide-react";

import React from "react";
import { NavLink } from "react-router";

const DashboardAside = () => {
  const SidebarItem = ({ icon: Icon, label, to }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-[#eaf9ef] text-[#118c47]"
              : "text-[#68756e] hover:bg-[#f5f8f6] hover:text-[#18221e]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              size={18}
              strokeWidth={isActive ? 2.2 : 1.8}
              className={
                isActive
                  ? "text-[#13a854]"
                  : "text-[#9aa69f] group-hover:text-[#68756e]"
              }
            />

            <span>{label}</span>

            {isActive && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#13a854]" />
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <aside className="flex h-[calc(100vh-90px)] w-[280px] shrink-0 flex-col border-r border-[#e5eae7] bg-white">
      {/* =========================================
          SELLER BRAND
      ========================================== */}
      <div className="flex items-center gap-3 border-b border-[#edf0ee] px-7 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#13a854] text-white shadow-sm">
          <Store size={21} strokeWidth={2} />
        </div>

        <div>
          <h2 className="text-[15px] font-bold text-[#17221d]">Tasty</h2>

          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[2px] text-[#8a9791]">
            Seller Studio
          </p>
        </div>
      </div>

      {/* =========================================
          NAVIGATION
      ========================================== */}
      <div className="flex-1 overflow-y-auto px-5 py-7">
        {/* MAIN MENU */}
        <div>
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-[#9aa69f]">
            Main Menu
          </p>

          <nav className="space-y-1.5">
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              to="/store/dashboard"
            />

            <SidebarItem
              icon={ShoppingBag}
              label="Orders"
              to="/store/orders"
            />

            <SidebarItem
              icon={Package}
              label="Foods"
              to="/store/products"
            />

            <SidebarItem
              icon={Plus}
              label="AddFood"
              to="/store/AddFood"
            />

            <SidebarItem
              icon={Users}
              label="Customers"
              to="/store/customers"
            />
          </nav>
        </div>

        {/* SETTINGS */}
        <div className="mt-10">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-[#9aa69f]">
            Settings
          </p>

          <nav>
            <SidebarItem
              icon={Settings}
              label="Settings"
              to="/store/settings"
            />
          </nav>
        </div>
      </div>

      {/* =========================================
          STORE CARD
      ========================================== */}
      <div className="border-t border-[#edf0ee] p-5">
        <div className="rounded-xl bg-[#f5faf7] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dff6e8] text-[#13a854]">
              <Store size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-[#26332c]">
                Your Store
              </p>

              <p className="mt-0.5 text-[10px] text-[#8a9791]">
                Store is active
              </p>
            </div>

            <ChevronRight size={15} className="text-[#a0aaa5]" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
