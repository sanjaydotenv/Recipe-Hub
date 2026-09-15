import React from "react";
import { CiStar } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const FoodCard = ({ data }) => {

  return (
    <div className="group w-70 overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.foodImage}
          alt={data.foodTitle}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-sm font-medium shadow-sm">
          <CiStar className="text-yellow-500 text-lg" />
          <span>4.8</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-lg font-semibold text-gray-900 leading-tight">
            {data.foodTitle}
          </h1>
        </div>

        <p className="mt-2 text-sm leading-5 text-gray-500 line-clamp-2">
          {data.foodDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-bold text-gray-900">
              ₹{data.foodPrice}
            </p>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-90">
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;