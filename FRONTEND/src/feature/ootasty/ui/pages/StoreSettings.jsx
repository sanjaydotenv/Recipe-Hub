import React, { useState } from "react";

import {
  FiShoppingBag,
  FiUser,
  FiMail,
  FiPhone,
  FiShield,
  FiCalendar,
  FiTag,
  FiLogOut,
  FiChevronRight,
  FiCheckCircle,
  FiLock,
  FiClock,
  FiHash,
  FiAlertCircle,
} from "react-icons/fi";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const StoreSettings = () => {
  const navigate = useNavigate();

  // Redux user state
  const user = useSelector((state) => state.authUser);

  const [activeTab, setActiveTab] = useState("store");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Store details
  // Replace fallback data with your backend API response.
  const store = {
    _id: user?.storeID || "6aca535079761045b332e826",
    storeName: "joy's Food",
    category: ["Pizza", "Breakfast", "Beverages"],
    owner: user?._id || "6aca530e79761045b332e825",
    createdAt: "2026-10-10T15:01:36.930Z",
  };

  // Owner details
  const owner = {
    fullName: user?.fullName || "joy",
    email: user?.email || "joy@gmail.com",
    phone: user?.phone || "7272910381",
    role: user?.role || "seller",
    createdAt: user?.createdAt || "2026-10-10T15:00:30.942Z",
  };

  // Format date
  const formatDate = (date) => {
    if (!date) return "Not available";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Not available";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Settings tabs
  const tabs = [
    {
      id: "store",
      label: "Store Information",
      icon: FiShoppingBag,
    },
    {
      id: "owner",
      label: "Owner Information",
      icon: FiUser,
    },
    {
      id: "security",
      label: "Account & Security",
      icon: FiShield,
    },
  ];

  // Logout handler
  const handleLogout = async () => {
    // TODO:
    // 1. Call your backend logout API.
    // 2. Clear the Redux authentication state.
    // 3. Invalidate the refresh-token cookie on the server.

    setShowLogoutModal(false);
    navigate("/login", { replace: true });
  };

  // Reusable information card
  const InfoCard = ({ icon: Icon, label, value, description }) => {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087f5b]">
            <Icon size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-slate-500">
              {label}
            </p>

            <p className="mt-1 break-words text-sm font-semibold text-slate-900">
              {value || "Not available"}
            </p>

            {description && (
              <p className="mt-1 text-xs text-slate-400">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-full bg-[#f9f7f7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
            <span>Seller Studio</span>
            <FiChevronRight size={13} />
            <span className="text-[#087f5b]">Settings</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your store, account details and security.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-3">
          <FiCheckCircle className="text-[#087f5b]" size={18} />

          <div>
            <p className="text-xs font-semibold text-slate-800">
              Account Active
            </p>

            <p className="text-[10px] text-slate-400">
              Seller account
            </p>
          </div>
        </div>
      </div>

      {/* Store Hero */}
      <section className="relative mb-7 overflow-hidden rounded-3xl bg-[#06251c] p-6 text-white sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0a4938] opacity-70" />

        <div className="pointer-events-none absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-[#087f5b]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#f8a90a] shadow-lg">
            <FiShoppingBag size={36} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#087f5b]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                Seller Store
              </span>

              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] text-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            <h2 className="break-words text-2xl font-bold sm:text-3xl">
              {store.storeName}
            </h2>

            <p className="mt-2 text-sm text-emerald-100/60">
              Your store information and account preferences in one place.
            </p>
          </div>

          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-emerald-100/50">
              Store owner
            </p>

            <p className="mt-1 font-semibold">
              {owner.fullName}
            </p>

            <p className="mt-1 text-xs capitalize text-emerald-100/60">
              {owner.role}
            </p>
          </div>
        </div>
      </section>

      {/* Main Settings Layout */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">

        {/* Settings Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-3">
          <p className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            General Settings
          </p>

          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    active
                      ? "bg-emerald-50 text-[#087f5b]"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />

                  <span className="flex-1 text-sm font-medium">
                    {tab.label}
                  </span>

                  {active && <FiChevronRight size={15} />}
                </button>
              );
            })}
          </div>

          <div className="my-4 border-t border-slate-100" />

          {/* Logout */}
          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-red-500 transition hover:bg-red-50"
          >
            <FiLogOut size={18} />

            <span className="flex-1 text-sm font-medium">
              Logout
            </span>

            <FiChevronRight size={15} />
          </button>

          <div className="mt-5 rounded-xl bg-[#f9f7f7] p-4">
            <div className="flex items-center gap-2 text-[#087f5b]">
              <FiShield size={16} />

              <span className="text-xs font-semibold">
                Your account
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Keep your account information accurate and never share your password.
            </p>
          </div>
        </aside>

        {/* Settings Content */}
        <section className="min-w-0 space-y-6">

          {/* STORE INFORMATION */}
          {activeTab === "store" && (
            <>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Store Information
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Details about your registered food store.
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                    <FiShoppingBag size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <InfoCard
                    icon={FiShoppingBag}
                    label="Store Name"
                    value={store.storeName}
                    description="Your registered business name"
                  />

                  <InfoCard
                    icon={FiHash}
                    label="Store ID"
                    value={store._id}
                    description="Unique store identifier"
                  />

                  <InfoCard
                    icon={FiCalendar}
                    label="Registration Date"
                    value={formatDate(store.createdAt)}
                    description="When your store was created"
                  />

                  <InfoCard
                    icon={FiUser}
                    label="Store Owner"
                    value={owner.fullName}
                    description="Registered store owner"
                  />
                </div>

                {/* Categories */}
                <div className="mt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <FiTag className="text-[#087f5b]" size={18} />

                    <h4 className="text-sm font-bold text-slate-800">
                      Store Categories
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {store.category.map((category) => (
                      <span
                        key={category}
                        className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-[#087f5b]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    Your store is registered under these food categories.
                  </p>
                </div>
              </div>

              {/* Store Identity */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <h3 className="text-base font-bold text-slate-900">
                  Store Identity
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Unique identifiers associated with your store.
                </p>

                <div className="mt-5 rounded-xl bg-[#f9f7f7] p-4">
                  <p className="mb-2 text-xs font-medium text-slate-500">
                    Registered Owner ID
                  </p>

                  <p className="break-all font-mono text-xs text-slate-700 sm:text-sm">
                    {store.owner}
                  </p>
                </div>

                <div className="mt-3 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-4">
                  <FiAlertCircle
                    className="mt-0.5 shrink-0 text-amber-600"
                    size={17}
                  />

                  <p className="text-xs leading-5 text-slate-600">
                    Store IDs are system-generated identifiers. Contact support if you need help with your registered store.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* OWNER INFORMATION */}
          {activeTab === "owner" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#06251c] text-xl font-bold uppercase text-[#f8a90a]">
                  {owner.fullName?.charAt(0) || "S"}
                </div>

                <div className="min-w-0">
                  <h3 className="break-words text-xl font-bold text-slate-900">
                    {owner.fullName}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Store Owner
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-[#087f5b]">
                    {owner.role}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={FiUser}
                  label="Full Name"
                  value={owner.fullName}
                />

                <InfoCard
                  icon={FiMail}
                  label="Email Address"
                  value={owner.email}
                  description="Registered email"
                />

                <InfoCard
                  icon={FiPhone}
                  label="Phone Number"
                  value={owner.phone}
                  description="Registered contact number"
                />

                <InfoCard
                  icon={FiCalendar}
                  label="Account Created"
                  value={formatDate(owner.createdAt)}
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-100 bg-[#f9f7f7] p-4">
                <div className="flex items-center gap-2">
                  <FiShield className="text-[#087f5b]" size={18} />

                  <p className="text-sm font-semibold text-slate-800">
                    Account Role
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your account is registered as a seller and is associated with your food store.
                </p>
              </div>
            </div>
          )}

          {/* ACCOUNT & SECURITY */}
          {activeTab === "security" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Account & Security
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Information about your account and security.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-slate-100 p-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-[#087f5b]">
                    <FiLock size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Password Protection
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your password should remain private. Password changes should be handled through a secure backend endpoint.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-100 p-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-[#087f5b]">
                    <FiShield size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Account Role
                    </p>

                    <p className="mt-1 text-xs capitalize text-slate-500">
                      {owner.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-100 p-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-[#087f5b]">
                    <FiClock size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Account Created
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {formatDate(owner.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Logout */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="font-semibold text-slate-900">
                  Sign out
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Sign out of your seller account on this device.
                </p>

                <button
                  type="button"
                  onClick={() => setShowLogoutModal(true)}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <FiLogOut size={17} />
                  Logout from account
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-title"
            className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <FiLogOut size={25} />
            </div>

            <h3
              id="logout-title"
              className="text-xl font-bold text-slate-900"
            >
              Logout from account?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Are you sure you want to sign out of your seller account?
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreSettings;