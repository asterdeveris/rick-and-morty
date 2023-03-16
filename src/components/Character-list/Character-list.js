import React, { useEffect, useState } from "react";
import CharacterListItem from "../Character-list-item/Character-list-item";
import { getCharacters } from "rickmortyapi";
import spinner from "./DoubleRing.svg";
import "./Character-list.scss";

const CharacterList = () => {
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const func = async () => {
      const res = await getCharacters();
      setListOfCharacters(res.data.results);
      setIsLoading(false);
    };
    func();
  }, []);

  const populatedList = listOfCharacters.map(({ name, species, image, id }) => {
    return (
      <CharacterListItem name={name} image={image} species={species} key={id} />
    );
  });

  if (isLoading) {
    return <img src={spinner} />;
  }
  return <div className="list-container">{populatedList}</div>;
};

export default CharacterList;
