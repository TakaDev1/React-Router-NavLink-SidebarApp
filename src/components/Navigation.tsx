import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="my-10">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${isActive ? "bg-blue-500 text-whiet" : "text-gray-500"} px-4 py-2`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `${isActive ? "bg-blue-500 text-whiet" : "text-gray-500"} px-4 py-2`
        }
      >
        Users
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          `${isActive ? "bg-blue-500 text-whiet" : "text-gray-500"} px-4 py-2`
        }
      >
        settings
      </NavLink>
    </nav>
  );
};

export default Navigation;
