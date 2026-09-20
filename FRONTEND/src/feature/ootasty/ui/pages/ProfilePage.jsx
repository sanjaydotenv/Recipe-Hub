import React, { useState } from "react";
import {
  Camera,
  Mail,
  Phone,
  CalendarDays,
  Store,
  ShoppingBag,
  Heart,
  Pencil,
  MapPin,
} from "lucide-react";
import BecomeASellerCard from "../components/BecomeASellerCard";
import { useProfile } from "../../hooks/profileHook";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { handleBecomeASellerCard, isShow, backToProfile } = useProfile();

  const { user } = useSelector((state) => state.authUser);

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-5 py-6 md:px-10">
      <div className="mx-auto max-w-8xl">
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-end">
          {/* Create Store */}
          <button className="flex items-center gap-2 rounded-xl bg-[#16a34a] px-6 py-3 text-sm font-bold text-white shadow-md shadow-green-200 transition hover:bg-green-600">
            <Store size={18} />
            Create Store
          </button>
        </div>

        {/* ================= PROFILE HERO ================= */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          {/* Green Cover */}
          <div className="relative h-36 bg-gradient-to-r from-green-600 via-green-500 to-emerald-400">
            {/* Decorative circles */}
            <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute right-32 top-12 h-20 w-20 rounded-full bg-white/10" />
          </div>

          {/* Profile Content */}
          <div className="relative px-6 pb-7 md:px-9">
            {/* Profile Image */}
            <div className="-mt-16 flex items-end justify-between">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-[6px] border-white bg-gray-100 shadow-xl">
                  <img
                    src="https://i.pravatar.cc/300?img=12"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Camera */}
                <button className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-black text-white shadow-lg">
                  <Camera size={17} />
                </button>
              </div>

              {/* Edit */}
              <button className="mb-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50">
                <Pencil size={16} />
                Edit Profile
              </button>
            </div>

            {/* Name */}
            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-black tracking-tight text-gray-900">
                  {user?.fullName}
                </h2>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                  {user?.role}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Food lover • Exploring delicious recipes
              </p>
            </div>

            {/* Stats */}
            <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xl font-black text-gray-900">12</p>

                <p className="mt-1 text-xs font-medium text-gray-400">Orders</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xl font-black text-gray-900">05</p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  Favorites
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xl font-black text-gray-900">02</p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LOWER SECTION ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* ================= PERSONAL INFO ================= */}
          <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                  Personal
                </p>

                <h2 className="mt-1 text-2xl font-black text-gray-900">
                  Profile Information
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Mail size={18} />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="rounded-2xl bg-[#f7f7f7] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Email</p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl bg-[#f7f7f7] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Phone</p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      +91 {user?.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Joined */}
              <div className="rounded-2xl bg-[#f7f7f7] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                    <CalendarDays size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Joined</p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      September 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl bg-[#f7f7f7] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Location</p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SELLER CARD ================= */}
          <div className="relative overflow-hidden rounded-[28px] bg-gray-950 p-7 text-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            {/* Background */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/20 blur-2xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500">
                <Store size={22} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                Seller Program
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Become a Recipe Seller
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Create your own store and share your delicious recipes with the
                Tasty community.
              </p>

              {/* Benefits */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <p className="text-sm text-gray-300">
                    Create your own food store
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <p className="text-sm text-gray-300">
                    Manage recipes and orders
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <p className="text-sm text-gray-300">
                    Track your store earnings
                  </p>
                </div>
              </div>

              <button
                onClick={handleBecomeASellerCard}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 text-sm font-black text-white transition hover:bg-green-400"
              >
                <Store size={18} />
                Create Your Store
              </button>
            </div>
          </div>
        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="group cursor-pointer rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <ShoppingBag size={21} />
              </div>

              <div>
                <h3 className="font-black text-gray-900">My Orders</h3>

                <p className="mt-1 text-xs text-gray-400">
                  View your order history
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                <Heart size={21} />
              </div>

              <div>
                <h3 className="font-black text-gray-900">Favorites</h3>

                <p className="mt-1 text-xs text-gray-400">
                  Your saved food items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isShow && <BecomeASellerCard onClose={backToProfile} />}
    </div>
  );
};

export default ProfilePage;
