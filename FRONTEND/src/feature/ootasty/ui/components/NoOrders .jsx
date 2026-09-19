import React from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router";

const NoOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5 py-10">
      <div className="w-full max-w-xl text-center">

        {/* Icon */}
        <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-200/50 blur-2xl" />

          {/* Circle */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_15px_45px_rgba(0,0,0,0.10)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
              <FiShoppingBag className="text-3xl text-orange-500" />
            </div>
          </div>
        </div>

        {/* Small Badge */}
        <div className="mx-auto w-fit rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
          Your Orders
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
          No orders yet
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 md:text-base">
          Looks like you haven't placed an order yet.
          Discover something delicious and your next meal
          will appear here.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/explore")}
          className="group mx-auto mt-8 flex items-center gap-3 rounded-2xl bg-gray-900 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          Browse Food

          <FiArrowRight className="text-lg transition duration-300 group-hover:translate-x-1" />
        </button>

        {/* Bottom hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Fresh food • Fast delivery • Easy ordering
        </div>

      </div>
    </div>
  );
};

export default NoOrders;