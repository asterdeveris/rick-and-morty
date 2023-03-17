import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ user }) => {
  return user ? (
    <nav className="navbar">
      <ul>
        <li>
          <img src="/" alt="user-image" />
        </li>
        <li>
          <button className="navbar-btn">Logout</button>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/login-page">
            <button className="navbar-btn">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
