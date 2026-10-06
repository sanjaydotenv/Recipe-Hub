import React, { useEffect } from "react";
import {
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiPlus,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";
import { useAdminStores } from "../../hooks/AdminStoreshook";

const AllStores = () => {
  const stores = [
    {
      id: 1,
      name: "Rahul Foods",
      owner: "Rahul Sharma",
      email: "rahul@gmail.com",
      category: "Indian Food",
      location: "Bhopal",
      joined: "06 Oct 2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Kitchen",
      owner: "Priya Verma",
      email: "priya@gmail.com",
      category: "South Indian",
      location: "Indore",
      joined: "05 Oct 2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Store",
      owner: "Aman Singh",
      email: "aman@gmail.com",
      category: "Fast Food",
      location: "Bhopal",
      joined: "04 Oct 2026",
      status: "Pending",
    },
    {
      id: 4,
      name: "Neha Boutique",
      owner: "Neha Patel",
      email: "neha@gmail.com",
      category: "Desserts",
      location: "Ujjain",
      joined: "03 Oct 2026",
      status: "Active",
    },
    {
      id: 5,
      name: "Rohit Cafe",
      owner: "Rohit Jain",
      email: "rohit@gmail.com",
      category: "Cafe",
      location: "Bhopal",
      joined: "02 Oct 2026",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Anjali Foods",
      owner: "Anjali Mehta",
      email: "anjali@gmail.com",
      category: "Bakery",
      location: "Indore",
      joined: "01 Oct 2026",
      status: "Active",
    },
  ];

  const { allStoresData } = useAdminStores();

  const handleData = async () => {
    const data = await allStoresData()

    console.log(data)
  }
  handleData()

  return (
    <div className="w-full bg-[#f9f7f7] p-6 lg:p-8">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Management / Stores</p>

          <h1 className="text-3xl font-bold text-[#0f172a]">All Stores</h1>

          <p className="text-sm text-gray-500 mt-2">
            Manage all stores and monitor their activity.
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
          <FiPlus size={17} />
          Add Store
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">
        {/* Total Stores */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Stores</p>

              <h2 className="text-3xl font-bold mt-2">842</h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center">
              <FiShoppingBag size={21} />
            </div>
          </div>

          <p className="text-xs text-emerald-600 mt-3">↑ 8.2% this month</p>
        </div>

        {/* Active */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Stores</p>

              <h2 className="text-3xl font-bold mt-2">716</h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3">85% of total stores</p>
        </div>

        {/* Pending */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Stores</p>

              <h2 className="text-3xl font-bold mt-2">24</h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <span className="text-lg">!</span>
            </div>
          </div>

          <p className="text-xs text-orange-500 mt-3">Requires approval</p>
        </div>

        {/* New Stores */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">New This Month</p>

              <h2 className="text-3xl font-bold mt-2">38</h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <FiPlus size={20} />
            </div>
          </div>

          <p className="text-xs text-violet-600 mt-3">
            New store registrations
          </p>
        </div>
      </div>

      {/* ================= STORE TABLE ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Stores</h2>

              <p className="text-xs text-gray-500 mt-1">
                All registered stores
              </p>
            </div>

            {/* Search / Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <FiSearch
                  size={17}
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  placeholder="Search stores..."
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
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Store
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Owner
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Category
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Location
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
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50/70 transition">
                  {/* Store */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#064e3b] text-white flex items-center justify-center">
                        <FiShoppingBag size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {store.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-0.5">
                          Store ID #ST-{String(store.id).padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Owner */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm text-gray-700">{store.owner}</p>

                      <p className="text-xs text-gray-400 mt-0.5">
                        {store.email}
                      </p>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      {store.category}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <FiMapPin size={14} className="text-gray-400" />

                      {store.location}
                    </div>
                  </td>

                  {/* Joined */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-500">
                      {store.joined}
                    </span>
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
                          store.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : store.status === "Pending"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-gray-100 text-gray-500"
                        }
                      `}
                    >
                      <span
                        className={`
                          w-1.5 h-1.5 rounded-full

                          ${
                            store.status === "Active"
                              ? "bg-emerald-500"
                              : store.status === "Pending"
                                ? "bg-orange-500"
                                : "bg-gray-400"
                          }
                        `}
                      />

                      {store.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1">
                      <button
                        className="
                          w-9 h-9 rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-[#064e3b]
                          hover:bg-emerald-50
                          transition
                        "
                        title="View Store"
                      >
                        <FiEye size={17} />
                      </button>

                      <button
                        className="
                          w-9 h-9 rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                        "
                        title="Edit Store"
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        className="
                          w-9 h-9 rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-red-600
                          hover:bg-red-50
                          transition
                        "
                        title="Delete Store"
                      >
                        <FiTrash2 size={16} />
                      </button>

                      <button
                        className="
                          w-9 h-9 rounded-lg
                          flex items-center justify-center
                          text-gray-400
                          hover:text-gray-700
                          hover:bg-gray-100
                          transition
                        "
                      >
                        <FiMoreHorizontal size={17} />
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
            <span className="font-semibold text-gray-700">842</span> stores
          </p>

          <div className="flex items-center gap-2">
            <button
              className="
                px-3 py-2
                rounded-lg
                border border-gray-200
                text-xs text-gray-400
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

export default AllStores;
