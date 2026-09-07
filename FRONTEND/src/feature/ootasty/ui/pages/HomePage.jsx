import React from "react";
import chef from "../../../../assets/chef svg.png";
import FoodOverview from "../components/FoodOverview";
import { useOverview } from "../../hooks/homeOverViewHook";

const HomePage = () => {
  const { overViewData, redirectExplorePage } = useOverview();

  return (
    <div>
      <div className="hero h-[90vh] w-full flex  px-10">
        <div className="hero-left h-full w-[70%] flex flex-col gap-8 pt-20">
          <div className="heading leading-10">
            <h1 className="text-7xl">Cook something</h1>
            <h1 className="text-[4.2rem]">
              <span className="text-[var(--primary-color)] font-semibold">
                amazing
              </span>{" "}
              today.
            </h1>
          </div>
          <div className="para w-105">
            <p>
              Discover delicious recipes made for every mood and occasion. From
              quick bites to hearty meals, find something inspiring to cook and
              enjoy today.
            </p>
          </div>
          <div className="btn">
            <button className="px-5 py-2 bg-[var(--primary-color)] text-2xl rounded-sm">
              Explore Recipes
            </button>
          </div>
          <div className="overView flex gap-5">
            {overViewData.map((data) => {
              return (
                <FoodOverview
                  data={data}
                  redirectExplorePage={redirectExplorePage}
                />
              );
            })}
          </div>
        </div>

        <div className="hero-right h-full w-[100%]">
          <img className="h-[100%] w-[50vw] scale-x-[-1]" src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
