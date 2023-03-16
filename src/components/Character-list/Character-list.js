import React from "react";
import CharacterListItem from "../Character-list-item/Character-list-item";
import spinner from "./DoubleRing.svg";
import "./Character-list.scss";

const CharacterList = ({ listOfCharacters, isLoading }) => {
  const populatedList = listOfCharacters
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, species, image, id }) => {
      return (
        <CharacterListItem
          name={name}
          image={image}
          species={species}
          key={id}
          id={id}
        />
      );
    });
  return isLoading ? (
    <img src={spinner} />
  ) : (
    <div className="list-container">{populatedList}</div>
  );
};

export default CharacterList;
