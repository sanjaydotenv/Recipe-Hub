import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const FoodOverview = ({data , redirectExplorePage}) => {


  return (
    <div>
      <div  onClick={redirectExplorePage} className="food-container h-60 w-55 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden hover:scale-105 animation duration-200">
        <div className="img h-[70%]">
          <img className="h-[100%] w-[100%] object-cover" src={data.foodImage}  alt="" />
        </div>
        <div className="dets p-2 flex items-center">
          <div className="">
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <p className="text-sm">{data.para}</p>
          </div>
          <div className="arrow h-8 w-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOverview;
