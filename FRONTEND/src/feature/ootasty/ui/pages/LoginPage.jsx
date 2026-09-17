import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useHandleData } from "../../hooks/userHook";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { handleChangeLoginUser, handleSubmitLoginUser } = useHandleData();

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
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f59e0b]/10 mb-2">
              <span className="text-xl">🍴</span>
            </div>

            <h1 className="text-[30px] leading-tight font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Login to continue exploring delicious food.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmitLoginUser} className="space-y-3">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  onChange={handleChangeLoginUser}
                  name="email"
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

            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-semibold text-[#d97706] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  onChange={handleChangeLoginUser}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="
                group
                w-full
                h-11
                mt-2
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
              Login
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* ================= REGISTER ================= */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Don't have an account?
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="
                ml-1
                font-semibold
                text-[#d97706]
                hover:underline
              "
            >
              Register
            </button>
          </p>

          {/* ================= FOOTER ================= */}
          <p className="text-center text-[11px] text-gray-400 mt-4">
            Secure login • Fresh food • Better experience
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
