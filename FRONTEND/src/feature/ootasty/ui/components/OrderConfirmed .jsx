import React, { useEffect, useState } from "react";
import {
  FiCheck,
  FiClock,
  FiMapPin,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const OrderConfirmed = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(true);

  const { oneFood } = useSelector((state) => state.foods);

  if (!oneFood){
    return <Navigate to={"/explore"} />
  }

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowSuccess(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {showSuccess && (
  <div className="text-center">

    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-green-200 blur-xl" />

      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-xl">
        <FiCheck className="text-4xl" />
      </div>
    </div>

    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
      Order Confirmed
    </p>

    <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900">
      Your food is on the way!
    </h1>

    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
      Your order has been successfully placed.
      We'll get it to you as soon as possible.
    </p>

    <p className="mt-4 text-sm font-bold text-gray-900">
      Order ID:{" "}
      <span className="text-orange-500">
        #FD48291
      </span>
    </p>

  </div>
)}

        {/* Main Card */}
        <div className="mt-10 overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          {/* Food */}
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:p-8">
            <img
              src={oneFood?.foodImage}
              alt={oneFood?.foodTitle}
              className="h-28 w-full rounded-2xl object-cover md:h-28 md:w-36"
            />

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                Your Order
              </span>

              <h2 className="mt-2 text-2xl font-black text-gray-900">
                {oneFood?.foodTitle || "Pizza Delicious"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">Quantity × 1</p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs text-gray-400">Total</p>

              <p className="mt-1 text-2xl font-black text-gray-900">
                ₹{oneFood?.foodPrice || 149}
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Delivery Info */}
          <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
            <div className="rounded-2xl bg-orange-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <FiClock />
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Estimated Delivery
                  </p>

                  <p className="mt-1 font-black text-gray-900">
                    Within 10 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Delivering To
                  </p>

                  <p className="mt-1 font-black text-gray-900">
                    Your saved address
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking */}
          <div className="px-6 pb-8 md:px-8">
            <h2 className="text-xl font-black text-gray-900">Order Status</h2>

            <div className="mt-7">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    <FiCheck />
                  </div>

                  <div className="h-12 w-0.5 bg-green-500" />
                </div>

                <div className="pb-7">
                  <p className="font-bold text-gray-900">Order Placed</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your order has been received.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                    <FiShoppingBag />
                  </div>

                  <div className="h-12 w-0.5 bg-gray-200" />
                </div>

                <div className="pb-7">
                  <p className="font-bold text-gray-900">Preparing Your Food</p>

                  <p className="mt-1 text-sm text-gray-500">
                    The restaurant is preparing your order.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiArrowRight />
                  </div>

                  <div className="h-12 w-0.5 bg-gray-200" />
                </div>

                <div className="pb-7">
                  <p className="font-bold text-gray-400">Out for Delivery</p>

                  <p className="mt-1 text-sm text-gray-400">
                    Your order will be on its way soon.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <FiCheck />
                </div>

                <div>
                  <p className="font-bold text-gray-400">Delivered</p>

                  <p className="mt-1 text-sm text-gray-400">Enjoy your meal!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate("/orders")}
            className="flex-1 rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white transition hover:bg-orange-500"
          >
            View My Orders
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="flex-1 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-bold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
          >
            Continue Exploring...
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
