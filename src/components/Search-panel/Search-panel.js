import React, { useState } from "react";
import "./Search-panel.scss";
import icon from "./Icon.svg";

const SearchPanel = ({ onSearchChange }) => {
  const [handleValue, setHandleValue] = useState("");
  const onSearch = (e) => {
    setHandleValue(e.target.value);
    onSearchChange(e.target.value);
  };
  return (
    <div className="search">
      <img src={icon} alt="icon" className="icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Filter by name..."
        onChange={onSearch}
        value={handleValue}
      ></input>
    </div>
  );
};

export default SearchPanel;
