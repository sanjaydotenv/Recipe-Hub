import React, { useEffect } from "react";
import {
  FiSearch,
  FiPlus,
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiPackage,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { useProductHook } from "../../hooks/productHook";
import { useSelector } from "react-redux";

const Products = () => {
  const { getAllFoodsData } = useProductHook();
  const { allFoodsData } = useSelector((state) => state.foods);

  useEffect(() => {
    getAllFoodsData();
  }, []);

  console.log(allFoodsData);

  // Safe data
  const foods = allFoodsData || [];

  return (
    <div className="min-h-screen bg-[#f6f8f7] px-8 py-7">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#91a09b]">Seller Studio</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#102019]">
            Products
          </h1>

          <p className="mt-1 text-sm text-[#8b9994]">
            Manage all your food products from one place.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-[#0a9f55] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07894a]">
          <FiPlus size={18} />
          Add Food
        </button>
      </div>

      {/* =====================================================
          STATS
      ====================================================== */}
      <div className="mb-6 grid grid-cols-3 gap-5">
        {/* TOTAL */}
        <div className="rounded-2xl border border-[#e3e9e6] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#87958f]">Total Foods</p>

              <h2 className="mt-2 text-2xl font-bold text-[#102019]">
                {foods.length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f0] text-[#0a9f55]">
              <FiPackage size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-[#87958f]">
            Total products in your store
          </p>
        </div>

        {/* AVAILABLE */}
        <div className="rounded-2xl border border-[#e3e9e6] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#87958f]">
                Available Foods
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#102019]">
                {
                  foods.filter(
                    (food) =>
                      !food.status ||
                      food.status?.toLowerCase() === "available",
                  ).length
                }
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f0] text-[#0a9f55]">
              <FiCheckCircle size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-[#0a9f55]">Currently available</p>
        </div>

        {/* RECENT */}
        <div className="rounded-2xl border border-[#e3e9e6] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#87958f]">
                Latest Products
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#102019]">
                {foods.length > 0 ? foods.length : 0}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff7e8] text-[#d88a00]">
              <FiClock size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-[#87958f]">
            Products added to your store
          </p>
        </div>
      </div>

      {/* =====================================================
          PRODUCT TABLE
      ====================================================== */}
      <div className="overflow-hidden rounded-2xl border border-[#e3e9e6] bg-white">
        {/* =================================================
            TABLE HEADER / FILTER
        ================================================== */}
        <div className="flex items-center justify-between border-b border-[#edf1ef] px-6 py-5">
          <div>
            <h2 className="font-bold text-[#15231d]">All Products</h2>

            <p className="mt-1 text-xs text-[#8c9994]">
              {foods.length} food products found
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <div className="flex w-64 items-center gap-2 rounded-xl bg-[#f5f7f6] px-4 py-2.5">
              <FiSearch className="shrink-0 text-[#9aa7a2]" size={18} />

              <input
                type="text"
                placeholder="Search foods..."
                className="w-full bg-transparent text-sm text-[#17231e] outline-none placeholder:text-[#9ca8a4]"
              />
            </div>

            {/* FILTER */}
            <button className="flex items-center gap-2 rounded-xl border border-[#e2e8e5] px-4 py-2.5 text-sm font-medium text-[#53615c] transition hover:bg-[#f7f9f8]">
              All Products
              <FiChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* =================================================
            TABLE
        ================================================== */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-[#edf1ef] bg-[#fafcfb] text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Product
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Product ID
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Price
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Created At
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#84918c]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {foods.length > 0 ? (
                foods.map((food) => (
                  <tr
                    key={food.id}
                    className="border-b border-[#edf1ef] transition hover:bg-[#fbfdfc]"
                  >
                    {/* =====================================
                        PRODUCT
                    ====================================== */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f1f4f2]">
                          <img
                            src={food.foodImage}
                            alt={food.foodTitle}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="max-w-[260px] truncate font-semibold text-[#17231e]">
                            {food.foodTitle}
                          </p>

                          <p className="mt-1 text-xs text-[#96a29d]">
                            Food Product
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* =====================================
                        ID
                    ====================================== */}
                    <td className="px-5 py-4">
                      <div className="max-w-[170px]">
                        <p className="truncate rounded-lg bg-[#f6f8f7] px-3 py-2 font-mono text-xs text-[#64726c]">
                          {food._id}
                        </p>
                      </div>
                    </td>

                    {/* =====================================
                        PRICE
                    ====================================== */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#17231e]">
                        ₹{food.foodPrice}
                      </p>
                    </td>

                    {/* =====================================
                        CREATED AT
                    ====================================== */}
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-[#596761]">
                        {food.createdAt
                          ? new Date(food.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              },
                            )
                          : "—"}
                      </p>

                      <p className="mt-1 text-xs text-[#9aa5a1]">
                        {food.createdAt
                          ? new Date(food.createdAt).toLocaleTimeString(
                              "en-IN",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )
                          : ""}
                      </p>
                    </td>

                    {/* =====================================
                        STATUS
                    ====================================== */}
                    <td className="px-5 py-4">
                      {!food.status ||
                      food.status?.toLowerCase() === "available" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8f0] px-3 py-1.5 text-xs font-semibold text-[#0a9650]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0a9650]" />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff2e9] px-3 py-1.5 text-xs font-semibold text-[#d97706]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                          {food.status}
                        </span>
                      )}
                    </td>

                    {/* =====================================
                        ACTIONS
                    ====================================== */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          className="rounded-lg p-2 text-[#7e8b86] transition hover:bg-[#eef8f2] hover:text-[#0a9f55]"
                          title="View"
                        >
                          <FiEye size={17} />
                        </button>

                        <button
                          className="rounded-lg p-2 text-[#7e8b86] transition hover:bg-[#f5f7f6] hover:text-[#17231e]"
                          title="Edit"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        <button
                          className="rounded-lg p-2 text-[#7e8b86] transition hover:bg-[#fff1f1] hover:text-red-500"
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>

                        <button className="rounded-lg p-2 text-[#7e8b86] transition hover:bg-[#f1f5f3]">
                          <FiMoreVertical size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                /* =========================================
                   EMPTY STATE
                ========================================== */
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef8f2] text-[#0a9f55]">
                      <FiPackage size={24} />
                    </div>

                    <h3 className="mt-4 font-semibold text-[#17231e]">
                      No foods found
                    </h3>

                    <p className="mt-1 text-sm text-[#8b9792]">
                      Add your first food product to see it here.
                    </p>

                    <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0a9f55] px-4 py-2.5 text-sm font-semibold text-white">
                      <FiPlus size={17} />
                      Add Food
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}
        {foods.length > 0 && (
          <div className="flex items-center justify-between border-t border-[#edf1ef] px-6 py-4">
            <p className="text-sm text-[#8b9792]">
              Showing{" "}
              <span className="font-semibold text-[#3c4944]">
                {foods.length}
              </span>{" "}
              products
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-[#e1e7e4] px-3 py-2 text-sm text-[#9aa5a1]">
                Previous
              </button>

              <button className="rounded-lg bg-[#0a9f55] px-3.5 py-2 text-sm font-semibold text-white">
                1
              </button>

              <button className="rounded-lg border border-[#e1e7e4] px-3.5 py-2 text-sm text-[#53615c]">
                2
              </button>

              <button className="rounded-lg border border-[#e1e7e4] px-3.5 py-2 text-sm text-[#53615c]">
                3
              </button>

              <button className="rounded-lg border border-[#e1e7e4] px-3 py-2 text-sm text-[#53615c]">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
