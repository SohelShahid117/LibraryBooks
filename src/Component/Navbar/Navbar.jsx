import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mr-4 text-primary" : "mr-4"
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/listedBooks"
            className={({ isActive }) =>
              isActive ? "mr-4 text-primary" : "mr-4"
            }
          >
            <a>Listed Books</a>
          </NavLink>
          <NavLink
            to="/pagesRead"
            className={({ isActive }) =>
              isActive ? "mr-4 text-primary" : "mr-4"
            }
          >
            <a>Pages to Read</a>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
