import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="settings">settings</NavLink>
    </nav>
  );
};

export default Navigation;
