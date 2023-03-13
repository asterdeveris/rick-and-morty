import React from "react";
import "./Search-panel.scss";
import icon from "./Icon.svg";

const SearchPanel = () => {
  return (
    <div className="search">
      <img src={icon} alt="icon" className="icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Filter by name..."
      ></input>
    </div>
  );
};

export default SearchPanel;
