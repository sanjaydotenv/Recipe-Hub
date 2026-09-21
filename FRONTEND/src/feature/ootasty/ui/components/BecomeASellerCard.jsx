import React from "react";
import { useSeller } from "../../hooks/createSellerHook";
import { createSeller } from "../../api/seller";

const BecomeASellerCard = ({ onClose }) => {



  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/30 px-4 backdrop-blur-sm"
    >
      {/* Glass Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-[30px] border border-white/60 bg-white/75 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-7 md:p-8"
      >
        {/* ================= BACK BUTTON ================= */}

        <button
          onClick={onClose}
          className="absolute left-5 top-5 z-30 flex h-10 items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 text-sm font-bold text-gray-700 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-x-1 hover:bg-white hover:text-green-600"
        >
          <span className="text-lg leading-none">←</span>
          <span>Back</span>
        </button>

        {/* ================= GLOW ================= */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-400/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-emerald-300/20 blur-3xl" />

        {/* ================= CONTENT ================= */}

        <div className="relative pt-12">
          {/* Badge */}

          <div className="mb-3 inline-flex items-center rounded-full border border-green-200 bg-green-50/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-green-600">
            Recipe Hub · Seller Program
          </div>

          {/* Heading */}

          <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Become a Recipe Seller
          </h1>

          <p className="mt-2 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            Create your own seller account and turn your recipes into a
            business. Set up your store, share your recipes, and manage
            everything from your own dashboard.
          </p>

          {/* ================= HOW IT WORKS ================= */}

          <div className="mt-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-gray-900">
              How it works
            </h2>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {/* 01 */}

              <div className="rounded-xl border border-white/80 bg-white/60 p-3 backdrop-blur">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-500 text-[10px] font-black text-white">
                    01
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-gray-900">
                      Create seller account
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      Fill out the seller form and create your account.
                    </p>
                  </div>
                </div>
              </div>

              {/* 02 */}

              <div className="rounded-xl border border-white/80 bg-white/60 p-3 backdrop-blur">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-500 text-[10px] font-black text-white">
                    02
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-gray-900">
                      Set up your store
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      Create your store and add your delicious recipes.
                    </p>
                  </div>
                </div>
              </div>

              {/* 03 */}

              <div className="rounded-xl border border-white/80 bg-white/60 p-3 backdrop-blur">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-500 text-[10px] font-black text-white">
                    03
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-gray-900">
                      Reach customers
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      We help your recipes reach customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* 04 */}

              <div className="rounded-xl border border-white/80 bg-white/60 p-3 backdrop-blur">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-500 text-[10px] font-black text-white">
                    04
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-gray-900">
                      Track your earnings
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      Monitor sales, earnings and analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PLATFORM FEE ================= */}

          <div className="mt-4 flex items-center justify-between rounded-xl border border-green-100 bg-green-50/70 px-4 py-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-green-600">
                Platform Fee
              </p>

              <p className="mt-0.5 text-xs text-gray-600">
                Only 10% from each sale
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-black text-green-600">10%</p>

              <p className="text-[9px] font-medium text-gray-400">
                Platform Fee
              </p>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[10px] leading-4 text-gray-400 sm:text-xs">
              You keep the remaining{" "}
              <span className="font-bold text-gray-700">90%</span> of every
              sale.
            </p>

            <button onClick={createSeller} className="shrink-0 rounded-xl bg-green-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-500 sm:px-6 sm:text-sm">
              Create Seller Account →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeASellerCard;
