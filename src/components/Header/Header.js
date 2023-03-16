import React from "react";
import SearchPanel from "../Search-panel/Search-panel";
import logo from "./PngItem.png";
import "./Header.scss";

const Header = ({ onSearchChange }) => {
  return (
    <div className="main-header">
      <img src={logo} alt="logo" />
      <SearchPanel onSearchChange={onSearchChange} />
    </div>
  );
};

export default Header;
