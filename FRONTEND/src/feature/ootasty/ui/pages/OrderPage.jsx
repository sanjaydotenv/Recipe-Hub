import React from "react";
import { useSelector } from "react-redux";
import { FiArrowLeft, FiCheck, FiClock, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router";
import NoOrders from "../components/NoOrders ";
import { useCheckUserAuthorizeOrNot } from "../../hooks/orderHook";
import OrderConfirmed from "../components/OrderConfirmed ";

const OrderPage = () => {
  const { isOrderPlaced , setIsOrderPlaced } = useCheckUserAuthorizeOrNot();

  const { oneFood } = useSelector((state) => state.foods);
  const navigate = useNavigate();

  const quantity = 1;
  const itemPrice = Number(oneFood?.foodPrice || 0);
  const deliveryFee = 0;
  const totalPrice = itemPrice * quantity + deliveryFee;

  const handlePlaceOrder = () => {
    navigate("/order/confirm-order")
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 md:px-8">
      {oneFood ? (
        <div className="mx-auto max-w-6xl">
          {/* Back */}
          <button
            onClick={() => navigate("/explore")}
            className="mb-6 flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-black"
          >
            <FiArrowLeft />
            Back to food
          </button>

          {/* Heading */}
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Checkout
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900">
              Review Your Order
            </h1>

            <p className="mt-2 text-gray-500">
              Check your order details before placing your order.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
            {/* LEFT */}
            <div className="space-y-6">
              {/* Food Card */}
              <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.07)]">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative h-64 w-full md:h-[300px] md:w-[42%]">
                    <img
                      src={oneFood?.foodImage}
                      alt={oneFood?.foodTitle}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold shadow-lg backdrop-blur">
                      ⭐ 4.8
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-500">
                        Food Item
                      </span>

                      <h2 className="mt-4 text-3xl font-black text-gray-900">
                        {oneFood?.foodTitle}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {oneFood?.foodDescription}
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-gray-400">
                          Price
                        </p>

                        <h3 className="mt-1 text-2xl font-black text-gray-900">
                          ₹{itemPrice}
                        </h3>
                      </div>

                      {/* Quantity */}
                      <div>
                        <p className="mb-2 text-xs font-medium text-gray-400">
                          Quantity
                        </p>

                        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
                          <span className="font-bold">{quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-[28px] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl text-green-600">
                    <FiClock />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Super fast delivery
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Your food will reach you in around 10 minutes.
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-gray-100" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-xl text-orange-500">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Delivery Address
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Your saved delivery address
                    </p>
                  </div>

                  <button className="ml-auto text-sm font-bold text-orange-500">
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT - SUMMARY */}
            <div className="h-fit rounded-[28px] bg-gray-900 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Order Summary
              </p>

              <h2 className="mt-3 text-2xl font-black">Your Order</h2>

              {/* Item */}
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={oneFood?.foodImage}
                  alt={oneFood?.foodTitle}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <p className="font-bold">{oneFood?.foodTitle}</p>

                  <p className="mt-1 text-sm text-gray-400">Qty × {quantity}</p>
                </div>

                <p className="font-bold">₹{itemPrice}</p>
              </div>

              <div className="my-7 h-px bg-white/10" />

              {/* Price */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Item price</span>
                  <span>₹{itemPrice}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Delivery fee</span>
                  <span className="text-green-400">FREE</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Discount</span>
                  <span>₹0</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-400">Total amount</p>

                  <h2 className="mt-1 text-3xl font-black">₹{totalPrice}</h2>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                  Pay on delivery
                </span>
              </div>

              {/* Confirm */}
              <button
                onClick={handlePlaceOrder}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-5 py-4 text-base font-black text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 active:translate-y-0"
              >
                <FiCheck className="text-xl" />
                Confirm & Place Order
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                By placing this order, you agree to our order terms and
                conditions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <NoOrders />
      )}

    </div>
  );
};

export default OrderPage;
