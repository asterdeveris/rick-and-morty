import React from "react";
import "./Character-list-item.scss";

const CharacterListItem = ({ name, species, image }) => {
  return (
    <div className="card">
      <img src={image} alt="image of character" />
      <div className="label">
        <p className="character-name">{name}</p>
        <p className="character-species">{species}</p>
      </div>
    </div>
  );
};

export default CharacterListItem;
