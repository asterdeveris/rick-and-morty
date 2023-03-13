import React from "react";
import img from "./Media.png";
import "./Character-list-item.scss";

const CharacterListItem = () => {
  return (
    <div className="card">
      <img src={img} alt="image of character" />
      <div className="label">
        <p className="character-name">Rick Sanchez</p>
        <p className="character-type">Human</p>
      </div>
    </div>
  );
};

export default CharacterListItem;
