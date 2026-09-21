import React from "react";
import {
  Mail,
  Phone,
  CalendarDays,
  Store,
  ShoppingBag,
  Heart,
  Pencil,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import BecomeASellerCard from "../components/BecomeASellerCard";
import { useProfile } from "../../hooks/profileHook";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProfilePage = () => {
  const { handleBecomeASellerCard, isShow, backToProfile } = useProfile();

  const { user  , isAuthenticated} = useSelector((state) => state.authUser);

  if (!isAuthenticated){
    return <Navigate to={"/"} />
  }

  return (
    <div className="min-h-screen bg-[#f5f7f5] px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* ================= TOP HEADER ================= */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Account
            </p>

            <h1 className="mt-1 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
              My Profile
            </h1>
          </div>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-700">
            <Pencil size={16} />
            <span className="hidden sm:block">Edit Profile</span>
          </button>
        </div>

        {/* ================= PROFILE HERO ================= */}
        <section className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
          {/* Cover */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-400 sm:h-40">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10" />

            <div className="absolute right-28 top-10 h-20 w-20 rounded-full bg-white/10 blur-sm" />

            <div className="absolute bottom-0 left-0 h-20 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute bottom-10 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
              <ShieldCheck size={14} />
              Verified Account
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="relative -mt-7 flex flex-col gap-5 sm:-mt-8 sm:flex-row sm:items-end sm:justify-between">
              {/* User Identity */}
              <div className="flex items-end gap-4">
                {/* Initial Avatar - No Image */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border-[5px] border-white bg-gradient-to-br from-green-500 to-emerald-700 text-2xl font-black text-white shadow-xl sm:h-24 sm:w-24 sm:text-3xl">
                  {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
                      {user?.fullName || "User"}
                    </h2>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-green-700">
                      {user?.role || "User"}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    Food lover • Exploring delicious recipes
                  </p>
                </div>
              </div>

              {/* Member */}
              <div className="hidden rounded-2xl bg-gray-50 px-5 py-3 sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Member Since
                </p>

                <p className="mt-1 text-sm font-black text-gray-800">
                  September 2026
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:bg-green-50">
                <p className="text-xl font-black text-gray-950">12</p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Orders
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:bg-green-50">
                <p className="text-xl font-black text-gray-950">05</p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Favorites
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:bg-green-50">
                <p className="text-xl font-black text-gray-950">02</p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ================= PERSONAL INFORMATION ================= */}
          <section className="rounded-[28px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-green-600">
                  Personal
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-gray-950">
                  Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Your personal account details
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <ShieldCheck size={19} />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {/* EMAIL */}
              <div className="group rounded-2xl border border-gray-100 bg-[#f8f9f8] p-4 transition hover:border-green-100 hover:bg-green-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm transition group-hover:text-green-600">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-400">
                      Email Address
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-gray-800">
                      {user?.email || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="group rounded-2xl border border-gray-100 bg-[#f8f9f8] p-4 transition hover:border-green-100 hover:bg-green-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm transition group-hover:text-green-600">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Phone Number
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      {user?.phone ? `+91 ${user.phone}` : "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* JOINED */}
              <div className="group rounded-2xl border border-gray-100 bg-[#f8f9f8] p-4 transition hover:border-green-100 hover:bg-green-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm transition group-hover:text-green-600">
                    <CalendarDays size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400">Joined</p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      September 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="group rounded-2xl border border-gray-100 bg-[#f8f9f8] p-4 transition hover:border-green-100 hover:bg-green-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm transition group-hover:text-green-600">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-800">
                      Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SELLER CARD ================= */}
          <section className="relative overflow-hidden rounded-[28px] bg-[#101512] p-6 text-white shadow-[0_15px_50px_rgba(0,0,0,0.12)] sm:p-7">
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />

            <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 shadow-lg shadow-green-500/20">
                  <Store size={22} />
                </div>

                <ArrowUpRight size={20} className="text-gray-600" />
              </div>

              <p className="mt-7 text-[11px] font-black uppercase tracking-[0.2em] text-green-400">
                Seller Program
              </p>

              <h2 className="mt-2 max-w-sm text-3xl font-black leading-tight">
                Become a Recipe Seller
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                Create your own store and share your delicious recipes with the
                Tasty community.
              </p>

              {/* Benefits */}
              <div className="mt-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <p className="text-sm font-medium text-gray-300">
                    Create your own food store
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <p className="text-sm font-medium text-gray-300">
                    Manage recipes and orders
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <p className="text-sm font-medium text-gray-300">
                    Track your store earnings
                  </p>
                </div>
              </div>

              <button
                onClick={handleBecomeASellerCard}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 text-sm font-black text-white shadow-lg shadow-green-500/10 transition hover:bg-green-400 active:scale-[0.98]"
              >
                <Store size={18} />
                Create Your Store
                <ChevronRight size={17} />
              </button>
            </div>
          </section>
        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* ORDERS */}
          <button className="group flex items-center justify-between rounded-[24px] border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-100">
                <ShoppingBag size={21} />
              </div>

              <div>
                <h3 className="font-black text-gray-900">My Orders</h3>

                <p className="mt-1 text-xs text-gray-400">
                  View your order history
                </p>
              </div>
            </div>

            <ChevronRight
              size={19}
              className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-gray-600"
            />
          </button>

          {/* FAVORITES */}
          <button className="group flex items-center justify-between rounded-[24px] border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition group-hover:bg-red-100">
                <Heart size={21} />
              </div>

              <div>
                <h3 className="font-black text-gray-900">Favorites</h3>

                <p className="mt-1 text-xs text-gray-400">
                  Your saved food items
                </p>
              </div>
            </div>

            <ChevronRight
              size={19}
              className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-gray-600"
            />
          </button>
        </div>
      </div>

      {/* ================= SELLER MODAL ================= */}
      {isShow && <BecomeASellerCard onClose={backToProfile} />}
    </div>
  );
};

export default ProfilePage;
