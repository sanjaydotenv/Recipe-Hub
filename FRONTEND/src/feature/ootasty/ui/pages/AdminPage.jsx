import React from "react";
import {
  FiUsers,
  FiShoppingBag,
  FiActivity,
  FiClock,
  FiArrowUpRight,
  FiMoreHorizontal,
} from "react-icons/fi";

const AdminPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#f6f8f7] text-[#0f172a] p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Admin Dashboard</p>

          <h1 className="text-3xl font-bold tracking-tight">
            Good evening, Mayur 👋
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Here's what's happening with your platform today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
            Export Report
          </button>

          <button className="px-4 py-2.5 rounded-xl bg-[#064e3b] text-white text-sm font-medium shadow-lg shadow-emerald-900/10 hover:bg-[#053f30] transition">
            View Activity
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {/* Users */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FiUsers size={21} />
            </div>

            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              <FiArrowUpRight size={13} />
              12.5%
            </span>
          </div>

          <p className="text-sm text-gray-500">Total Users</p>

          <h2 className="text-3xl font-bold mt-1">12,480</h2>

          <p className="text-xs text-gray-400 mt-2">Compared to last month</p>
        </div>

        {/* Stores */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FiShoppingBag size={21} />
            </div>

            <span className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              <FiArrowUpRight size={13} />
              8.2%
            </span>
          </div>

          <p className="text-sm text-gray-500">Total Stores</p>

          <h2 className="text-3xl font-bold mt-1">842</h2>

          <p className="text-xs text-gray-400 mt-2">38 new stores this month</p>
        </div>

        {/* Active Stores */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <FiActivity size={21} />
            </div>

            <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
              Live
            </span>
          </div>

          <p className="text-sm text-gray-500">Active Stores</p>

          <h2 className="text-3xl font-bold mt-1">716</h2>

          <p className="text-xs text-gray-400 mt-2">85% of all stores</p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <FiClock size={21} />
            </div>

            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
              Action needed
            </span>
          </div>

          <p className="text-sm text-gray-500">Pending Requests</p>

          <h2 className="text-3xl font-bold mt-1">24</h2>

          <p className="text-xs text-gray-400 mt-2">Waiting for approval</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
              <h2 className="font-semibold text-lg">Recent Users</h2>

              <p className="text-xs text-gray-500 mt-1">
                Recently registered users
              </p>
            </div>

            <button className="text-sm font-medium text-[#064e3b] hover:underline">
              View all
            </button>
          </div>

          <div className="divide-y divide-gray-100">
            {[
              {
                name: "Rahul Sharma",
                email: "rahul@gmail.com",
                store: "Rahul Foods",
                status: "Active",
                color: "bg-blue-100 text-blue-700",
              },
              {
                name: "Priya Verma",
                email: "priya@gmail.com",
                store: "Priya Kitchen",
                status: "Active",
                color: "bg-pink-100 text-pink-700",
              },
              {
                name: "Aman Singh",
                email: "aman@gmail.com",
                store: "Aman Store",
                status: "Pending",
                color: "bg-orange-100 text-orange-700",
              },
              {
                name: "Neha Patel",
                email: "neha@gmail.com",
                store: "Neha Boutique",
                status: "Active",
                color: "bg-violet-100 text-violet-700",
              },
            ].map((user, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${user.color}`}
                >
                  {user.name.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold">{user.name}</h3>

                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>

                <div className="hidden sm:block text-sm text-gray-600">
                  {user.store}
                </div>

                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    user.status === "Active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-orange-50 text-orange-700"
                  }`}
                >
                  {user.status}
                </span>

                <button className="text-gray-400 hover:text-gray-700">
                  <FiMoreHorizontal size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Store Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
              <h2 className="font-semibold text-lg">Store Overview</h2>

              <p className="text-xs text-gray-500 mt-1">Store activity</p>
            </div>

            <button className="text-gray-400 hover:text-gray-700">
              <FiMoreHorizontal size={20} />
            </button>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Active stores</span>

              <span className="text-sm font-semibold">716</span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-[#064e3b] rounded-full" />
            </div>

            <div className="flex items-center justify-between mt-6 mb-3">
              <span className="text-sm text-gray-500">Pending stores</span>

              <span className="text-sm font-semibold">24</span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[18%] bg-orange-400 rounded-full" />
            </div>

            <div className="flex items-center justify-between mt-6 mb-3">
              <span className="text-sm text-gray-500">Inactive stores</span>

              <span className="text-sm font-semibold">102</span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[12%] bg-gray-400 rounded-full" />
            </div>

            {/* Bottom Card */}
            <div className="mt-8 p-4 rounded-2xl bg-[#f0fdf8] border border-emerald-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Total stores</p>

                  <p className="text-2xl font-bold mt-1">842</p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#064e3b] shadow-sm">
                  <FiShoppingBag size={19} />
                </div>
              </div>

              <p className="text-xs text-emerald-700 mt-3">
                ↑ 8.2% growth this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
