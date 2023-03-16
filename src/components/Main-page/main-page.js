import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import CharacterList from "../Character-list/Character-list";
import { getCharacters } from "rickmortyapi";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [handleInput, setHandleInput] = useState("");

  useEffect(() => {
    const func = async () => {
      const res = await getCharacters();
      setListOfCharacters(res.data.results);
      setIsLoading(false);
    };
    func();
  }, []);

  const searchCharacter = (arr, handleInput) => {
    if (handleInput.length === 0) {
      return arr;
    } else {
      return arr.filter(
        (character) =>
          character.name.toLowerCase().indexOf(handleInput.toLowerCase()) > -1
      );
    }
  };

  const onSearchChange = (inputValue) => {
    setHandleInput(inputValue);
  };

  const filteredCharacters = searchCharacter(listOfCharacters, handleInput);
  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <CharacterList
        listOfCharacters={filteredCharacters}
        isLoading={isLoading}
      />
    </>
  );
};

export default MainPage;
