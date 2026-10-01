import { LayoutDashboard, Package, Plus, ShoppingBag, Users } from "lucide-react";
import React from "react";

const DashboardAside = () => {

    
  const SidebarItem = ({ icon: Icon, label, active = false }) => {
    return (
      <button
        className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-xs font-semibold transition ${
          active
            ? "bg-[#eaf9ef] text-[#118c47]"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
        }`}
      >
        <Icon
          size={17}
          strokeWidth={active ? 2.3 : 1.8}
          className={
            active
              ? "text-[#13a854]"
              : "text-gray-400 group-hover:text-gray-600"
          }
        />

        <span>{label}</span>

        {active && (
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#13a854]" />
        )}
      </button>
    );
  };
  return (
    <div>
      <nav className="space-y-1.5">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />

        <SidebarItem icon={ShoppingBag} label="Orders" />

        <SidebarItem icon={Package} label="Products" />

        <SidebarItem icon={Plus} label="Add Product" />

        <SidebarItem icon={Users} label="Customers" />
      </nav>
    </div>
  );
};

export default DashboardAside;
