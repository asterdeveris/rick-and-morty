import React from "react";
import SearchPanel from "../Search-panel/Search-panel";
import logo from "./PngItem.png";
import "./Header.scss";

const Header = ({ onSearchChange, handleInput }) => {
  return (
    <div className="main-header">
      <img src={logo} alt="logo" />
      <SearchPanel onSearchChange={onSearchChange} handleInput={handleInput} />
    </div>
  );
};

export default Header;
