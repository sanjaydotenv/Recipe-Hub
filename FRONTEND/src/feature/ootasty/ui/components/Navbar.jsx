import React from "react";
import { NavLink } from "react-router";
import OoTasty from "../../../../assets/OoTasty.svg";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between rounded bg-[var(--primary-color)] items-center p-2">
      <div className="logo w-25">
        <img className="mt-2 h-10" src={OoTasty} alt="" />
      </div>
      <div className="text-2xl flex gap-10 font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-black"
          }
          to={""}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-black"
          }
          to={"/explore"}
        >
          Explore
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-black"
          }
          to={"/order"}
        >
          Order
        </NavLink>
      </div>
      <div className="profile-logo">
        <FaCircleUser size={40} />
      </div>
    </div>
  );
};

export default Navbar;
