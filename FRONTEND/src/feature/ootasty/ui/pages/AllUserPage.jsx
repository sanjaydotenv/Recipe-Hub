import React, { useEffect } from "react";
import {
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiUserPlus,
} from "react-icons/fi";
import { useAdminStores } from "../../hooks/AdminStoreshook";
import { useSelector } from "react-redux";

const AllUserPage = () => {
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      store: "Rahul Foods",
      joined: "06 Oct 2026",
      status: "Active",
      role: "Seller",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      store: "Priya Kitchen",
      joined: "05 Oct 2026",
      status: "Active",
      role: "Seller",
    },
    {
      id: 3,
      name: "Aman Singh",
      email: "aman@gmail.com",
      store: "Aman Store",
      joined: "04 Oct 2026",
      status: "Pending",
      role: "Seller",
    },
    {
      id: 4,
      name: "Neha Patel",
      email: "neha@gmail.com",
      store: "Neha Boutique",
      joined: "03 Oct 2026",
      status: "Active",
      role: "Seller",
    },
    {
      id: 5,
      name: "Rohit Jain",
      email: "rohit@gmail.com",
      store: "Rohit Cafe",
      joined: "02 Oct 2026",
      status: "Inactive",
      role: "Seller",
    },
    {
      id: 6,
      name: "Anjali Mehta",
      email: "anjali@gmail.com",
      store: "Anjali Foods",
      joined: "01 Oct 2026",
      status: "Active",
      role: "Seller",
    },
  ];
  const { getAllUsersData } = useAdminStores();
  useEffect(() => {
    getAllUsersData();
  }, []);

  const { allUsers } = useSelector((state) => state.admin);

  console.log(allUsers);

  return (
    <div className="w-full min-h-screen bg-[#f9f7f7] p-6 lg:p-8">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Management / Users</p>

          <h1 className="text-3xl font-bold text-[#0f172a]">All Users</h1>

          <p className="text-sm text-gray-500 mt-2">
            Manage and monitor all registered users on your platform.
          </p>
        </div>

        <button
          className="
            flex items-center justify-center gap-2
            px-4 py-2.5
            rounded-xl
            bg-[#064e3b]
            text-white
            text-sm font-medium
            shadow-lg shadow-emerald-900/10
            hover:bg-[#053f30]
            transition
          "
        >
          <FiUserPlus size={17} />
          Add User
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">
        {/* Total */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Users</p>

          <div className="flex items-end justify-between mt-2">
            <h2 className="text-3xl font-bold">{allUsers?.length}</h2>

            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              +12.5%
            </span>
          </div>
        </div>

        {/* Active */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Active Users</p>

          <div className="flex items-end justify-between mt-2">
            <h2 className="text-3xl font-bold">{allUsers?.length}</h2>

            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              86.8%
            </span>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending Users</p>

          <div className="flex items-end justify-between mt-2">
            <h2 className="text-3xl font-bold">0</h2>

            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
              Needs review
            </span>
          </div>
        </div>

        {/* New */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">New This Month</p>

          <div className="flex items-end justify-between mt-2">
            <h2 className="text-3xl font-bold">{allUsers?.length}</h2>

            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              +8.2%
            </span>
          </div>
        </div>
      </div>

      {/* ================= USERS TABLE ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Users</h2>

              <p className="text-xs text-gray-500 mt-1">
                Showing all registered users
              </p>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <FiSearch
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search users..."
                  className="
                    w-full sm:w-64
                    pl-10 pr-4 py-2.5
                    rounded-xl
                    border border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:bg-white
                    focus:border-[#064e3b]
                    transition
                  "
                />
              </div>

              {/* Filter */}
              <button
                className="
                  flex items-center justify-center gap-2
                  px-4 py-2.5
                  rounded-xl
                  border border-gray-200
                  bg-white
                  text-sm text-gray-600
                  hover:bg-gray-50
                  transition
                "
              >
                <FiFilter size={16} />
                Filter
                <FiChevronDown size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  User
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Store
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Role
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Joined
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {allUsers?.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50/70 transition">
                  {/* User */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center font-semibold">
                        {user.fullName.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {user.fullName}
                        </p>

                        <p className="text-xs text-gray-500 mt-0.5">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Store */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-700">
                      {user.role === "seller"
                        ? user?.storeID?.storeName || "-"
                        : "-"}
                    </span>
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      {user.role}
                    </span>
                  </td>

                  {/* Joined */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-500">{new Date(user?.createdAt).toLocaleDateString("en-in")}</span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`
                        inline-flex items-center gap-1.5
                        text-xs font-medium
                        px-2.5 py-1.5
                        rounded-full

                        ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : user.status === "Pending"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-gray-100 text-gray-500"
                        }
                      `}
                    >
                      <span
                        className={`
                          w-1.5 h-1.5 rounded-full

                          ${
                            user.status === "Active"
                              ? "bg-emerald-500"
                              : user.status === "Pending"
                                ? "bg-orange-500"
                                : "bg-gray-400"
                          }
                        `}
                      />

                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1">
                      <button
                        className="
                          w-9 h-9
                          rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-[#064e3b]
                          hover:bg-emerald-50
                          transition
                        "
                        title="View"
                      >
                        <FiEye size={17} />
                      </button>

                      <button
                        className="
                          w-9 h-9
                          rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                        "
                        title="Edit"
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        className="
                          w-9 h-9
                          rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-red-600
                          hover:bg-red-50
                          transition
                        "
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="px-5 py-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-700">1–6</span> of{" "}
            <span className="font-semibold text-gray-700">12,480</span> users
          </p>

          <div className="flex items-center gap-2">
            <button
              className="
                px-3 py-2
                rounded-lg
                border border-gray-200
                text-xs text-gray-400
                cursor-not-allowed
              "
            >
              Previous
            </button>

            <button
              className="
                w-8 h-8
                rounded-lg
                bg-[#064e3b]
                text-white
                text-xs font-medium
              "
            >
              1
            </button>

            <button
              className="
                w-8 h-8
                rounded-lg
                border border-gray-200
                text-xs text-gray-600
                hover:bg-gray-50
              "
            >
              2
            </button>

            <button
              className="
                w-8 h-8
                rounded-lg
                border border-gray-200
                text-xs text-gray-600
                hover:bg-gray-50
              "
            >
              3
            </button>

            <button
              className="
                px-3 py-2
                rounded-lg
                border border-gray-200
                text-xs text-gray-600
                hover:bg-gray-50
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserPage;
