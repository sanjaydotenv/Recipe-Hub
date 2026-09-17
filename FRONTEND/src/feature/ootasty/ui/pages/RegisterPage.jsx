import React, { useState } from "react";
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useHandleData } from "../../hooks/userHook";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { handleChange, handleSubmit } = useHandleData();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#1f1f1f]">
      {/* ================= HEADER ================= */}
      <header className="h-16 bg-white flex items-center px-8 sm:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center">
            <span className="text-lg font-black">∞</span>
          </div>

          <span className="text-xl font-bold text-gray-900">Tasty</span>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="h-[calc(100vh-64px)] bg-white flex items-center justify-center px-5">
        <div className="w-full max-w-[430px]">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#f59e0b]/10 mb-1">
              <span className="text-xl">🍴</span>
            </div>

            <h1 className="text-[30px] leading-tight font-bold text-gray-900">
              Create Account
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Welcome to Tasty. Let's get you started.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="fullName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    w-full
                    h-11
                    pl-10
                    pr-3
                    rounded-lg
                    bg-gray-50
                    border
                    border-gray-200
                    outline-none
                    text-[15px]
                    text-gray-800
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:border-[#f59e0b]
                    focus:ring-2
                    focus:ring-[#f59e0b]/10
                    transition
                  "
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    h-11
                    pl-10
                    pr-3
                    rounded-lg
                    bg-gray-50
                    border
                    border-gray-200
                    outline-none
                    text-[15px]
                    text-gray-800
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:border-[#f59e0b]
                    focus:ring-2
                    focus:ring-[#f59e0b]/10
                    transition
                  "
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    w-full
                    h-11
                    pl-10
                    pr-3
                    rounded-lg
                    bg-gray-50
                    border
                    border-gray-200
                    outline-none
                    text-[15px]
                    text-gray-800
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:border-[#f59e0b]
                    focus:ring-2
                    focus:ring-[#f59e0b]/10
                    transition
                  "
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="
                    w-full
                    h-11
                    pl-10
                    pr-11
                    rounded-lg
                    bg-gray-50
                    border
                    border-gray-200
                    outline-none
                    text-[15px]
                    text-gray-800
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:border-[#f59e0b]
                    focus:ring-2
                    focus:ring-[#f59e0b]/10
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3.5
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-gray-700
                    transition
                  "
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* ================= BUTTON ================= */}
            <button
              type="submit"
              className="
                group
                w-full
                h-11
                mt-1
                rounded-lg
                bg-[#f59e0b]
                hover:bg-[#d97706]
                text-white
                text-[15px]
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition
                shadow-md
                shadow-orange-200
              "
            >
              Create Account
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* ================= LOGIN ================= */}
          <p className="text-center text-sm text-gray-500 mt-3">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="
                ml-1
                font-semibold
                text-[#d97706]
                hover:underline
              "
            >
              Login
            </button>
          </p>

          {/* ================= FOOTER ================= */}
          <p className="text-center text-[11px] text-gray-400 mt-2">
            By creating an account, you agree to our Terms & Conditions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
