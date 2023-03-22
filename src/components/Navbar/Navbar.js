import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "./arrow_back.svg";
import "./Navbar.scss";

const Navbar = ({ user, isMainPage }) => {
  const logOut = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return user ? (
    <nav className="navbar">
      <Link to="/">
        <div
          className="back-to-main-link"
          style={isMainPage ? { display: "none" } : { display: "block" }}
        >
          <img src={arrowIcon} />
          Go back
        </div>
      </Link>
      <ul>
        <li>
          <img
            src={user.photos[0].value}
            alt="user"
            referrerPolicy="no-referrer"
          />
        </li>
        <li>
          <button className="navbar-btn" onClick={logOut}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navbar">
      <Link to="/">
        <div
          className="back-to-main-link"
          style={isMainPage ? { display: "none" } : { display: "block" }}
        >
          <img src={arrowIcon} />
          Go back
        </div>
      </Link>
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
