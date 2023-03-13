import React from "react";
import CharacterListItem from "../Character-list-item/Character-list-item";
import "./Character-list.scss";

const CharacterList = () => {
  return (
    <div className="list-container">
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
      <CharacterListItem />
    </div>
  );
};

export default CharacterList;
