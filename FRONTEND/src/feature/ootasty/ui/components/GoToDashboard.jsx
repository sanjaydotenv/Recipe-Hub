import React from "react";
import { ArrowRight, LayoutDashboard, Store } from "lucide-react";
import { useNavigate } from "react-router";

const GoToDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,78,59,0.95), rgba(15,23,42,0.96))",
          borderColor: "rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
              <Store size={27} className="text-emerald-300" />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  Store Active
                </span>
              </div>

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Your store is ready 🚀
              </h2>

              <p className="mt-1 max-w-md text-sm leading-6 text-slate-300">
                Manage your products, orders and store from your dashboard.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/store/dashboard")}
            className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            <LayoutDashboard size={18} />

            <span>Go to Dashboard</span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToDashboard;
