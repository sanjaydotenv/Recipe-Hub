import React from "react";
import { useCheckUserAuthorizeOrNot } from "../../hooks/orderHook";
import { useSelector } from "react-redux";

const DetailFoodCard = ({ oneFood }) => {
  const {check , handleBackExplorePage} = useCheckUserAuthorizeOrNot();

  return (
    <div className="min-h-screen flex px-4 py-10">
      <div className="container w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/10 md:h-[620px] md:flex">
        {/* Image Section */}
        <div className="relative h-[320px] w-full overflow-hidden bg-[#eee] md:h-full md:w-[50%]">
          <img
            src={oneFood?.foodImage}
            alt={oneFood?.foodTitle}
            className="h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Back Button */}
          <button onClick={handleBackExplorePage} className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl shadow-lg backdrop-blur transition hover:scale-105">
            ←
          </button>

          {/* Rating */}
          <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-lg">
            ⭐ 4.8
          </div>

          {/* Image Bottom Text */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-white/80">
              Delicious choice
            </p>

            <h2 className="text-3xl font-bold">{oneFood?.foodTitle}</h2>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex w-full flex-col justify-between p-7 md:w-[50%] md:p-10">
          <div>
            {/* Category */}
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-600">
              Food
            </span>

            {/* Title & Price */}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {oneFood?.foodTitle}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Delicious food from our store
                </p>
              </div>

              <h1 className="text-3xl font-extrabold text-orange-500">
                ₹{oneFood?.foodPrice}
              </h1>
            </div>

            {/* Delivery Time */}
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-green-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
                ⚡
              </div>

              <div>
                <p className="text-sm font-bold text-green-700">
                  Super fast delivery
                </p>

                <h2 className="text-sm font-medium text-gray-600">
                  In your hands in 10 minutes
                </h2>
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-gray-500">
                Quantity
              </p>

              <div className="flex w-fit items-center gap-5 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xl font-semibold shadow-sm transition hover:bg-gray-100">
                  −
                </button>

                <span className="min-w-5 text-center text-lg font-bold">1</span>

                <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-xl font-semibold text-white shadow-sm transition hover:bg-orange-600">
                  +
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="mb-2 text-lg font-bold text-gray-900">
                About this food
              </h2>

              <p className="text-sm leading-7 text-gray-500">
                {oneFood?.foodDescription}
              </p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
            <div>
              <p className="text-xs text-gray-400">Total price</p>

              <h2 className="text-2xl font-extrabold text-gray-900">
                ₹{oneFood?.foodPrice}
              </h2>
            </div>

            <button
              onClick={() => {
                (check());
              }}
              className="flex-1 rounded-2xl bg-gray-900 px-6 py-3 text-xl font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700"
            >
              Order
            </button>
            <button className="flex-1 rounded-2xl bg-gray-900 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFoodCard;
