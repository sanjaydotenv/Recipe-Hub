import React from "react";
import { NavLink, useNavigate } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import OoTasty from "../../../../assets/OoTasty.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Order", path: "/order" },
  ];

  return (
    <nav className="sticky top-3 z-50 mx-3 flex items-center justify-between rounded-2xl border border-black/10 bg-[var(--primary-color)] px-4 py-3 shadow-lg backdrop-blur-xl md:mx-6 md:px-6">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex w-32 cursor-pointer items-center"
      >
        <img
          src={OoTasty}
          alt="OoTasty"
          className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Navigation */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-xl bg-black/10 p-1 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-white text-[var(--primary-color)] shadow-md"
                  : "text-black/70 hover:bg-white/30 hover:text-black"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Profile */}
      <div
        onClick={() => navigate("/profile")}
        className="group flex cursor-pointer items-center gap-2 rounded-xl border border-black/10 bg-white/20 px-2 py-2 transition-all duration-300 hover:bg-white hover:shadow-md"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/10 text-black transition-all duration-300 group-hover:bg-[var(--primary-color)]">
          <FaCircleUser size={22} />
        </div>

        <div className="hidden text-left leading-tight sm:block">
          <p className="text-sm font-bold text-black">Profile</p>
          <p className="text-[10px] text-black/50">Account</p>
        </div>

        <FiChevronDown
          size={15}
          className="mr-1 text-black/50 transition-transform duration-300 group-hover:translate-y-0.5"
        />
      </div>
    </nav>
  );
};

export default Navbar;
