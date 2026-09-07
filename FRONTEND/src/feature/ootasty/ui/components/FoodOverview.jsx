import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const FoodOverview = ({ data, redirectExplorePage }) => {
  return (
    <div
      onClick={redirectExplorePage}
      className="group h-60 w-55 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_4px_18px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
    >
      {/* Image */}
      <div className="relative h-[68%] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={data.foodImage}
          alt={data.name}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Details */}
      <div className="flex h-[32%] items-center justify-between gap-2 px-3">

        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold text-gray-900">
            {data.name}
          </h1>

          <p className="mt-1 line-clamp-1 text-sm text-gray-500">
            {data.para}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]">
          <FaLongArrowAltRight size={16} />
        </div>

      </div>
    </div>
  );
};

export default FoodOverview;