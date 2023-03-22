import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "./arrow_back.svg";
import "./Navbar.scss";

const Navbar = ({ isMainPage }) => {
  const logOut = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
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
    </nav>
  );
};

export default Navbar;
