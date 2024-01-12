import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          Product
        </NavLink>
        <NavLink
          to="dashboard"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="login"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          login
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
