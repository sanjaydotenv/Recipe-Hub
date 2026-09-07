import React from "react";
import FoodCard from "../components/FoodCard";
import { handleFoodsData } from "../../api/foods";
import DetailFoodCard from "../components/DetailFoodCard";

const ExplorePage = () => {
  handleFoodsData();

  const num = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <div className="w-full px-5 md:px-10 py-6">
      <div className="w-full">
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
          {/* Search */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search for food, restaurants..."
              className="w-full h-13 pl-12 pr-4 rounded-xl bg-gray-50 outline-none border border-transparent focus:border-gray-300 focus:bg-white transition-all"
            />
          </div>

          {/* Category */}
          <div className="relative w-55">
            <select
              defaultValue=""
              className="appearance-none w-full h-13 px-4 pr-10 rounded-xl bg-gray-50 border border-transparent focus:border-gray-300 outline-none text-gray-600 cursor-pointer"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="pizza">🍕 Pizza</option>
              <option value="burger">🍔 Burger</option>
              <option value="biryani">🍛 Biryani</option>
              <option value="chinese">🥡 Chinese</option>
              <option value="dessert">🍰 Desserts</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              ▼
            </span>
          </div>

          {/* Search Button */}
          <button className="h-13 px-8 rounded-xl bg-black text-white font-medium hover:bg-gray-800 active:scale-95 transition-all">
            Search
          </button>
        </div>
      </div>

      <DetailFoodCard />

      <div className="foods pt-10 flex flex-wrap gap-15">
        {num.map(() => {
          return <FoodCard />;
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
