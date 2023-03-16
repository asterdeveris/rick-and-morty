import React from "react";
import "./Character-list-item.scss";
import { Link } from "react-router-dom";

const CharacterListItem = ({ name, species, image, id }) => {
  const link = `/character-details/${id}`;
  return (
    <div className="card">
      <Link to={link}>
        <img src={image} alt="image of character" />
        <div className="label">
          <p className="character-name">{name}</p>
          <p className="character-species">{species}</p>
        </div>
      </Link>
    </div>
  );
};

export default CharacterListItem;
