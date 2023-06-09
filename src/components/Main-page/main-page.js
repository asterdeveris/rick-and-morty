import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import CharacterList from "../Character-list/Character-list";
import Navbar from "../Navbar/Navbar";
import { getCharacters } from "rickmortyapi";

const MainPage = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [handleInput, setHandleInput] = useState(
    localStorage.getItem("searchInput") || ""
  );

  useEffect(() => {
    (async () => {
      const res = await getCharacters();
      setListOfCharacters(res.data.results);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("searchInput", handleInput);
  }, [handleInput]);

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
      <Navbar user={user} isMainPage={true} />
      <Header onSearchChange={onSearchChange} handleInput={handleInput} />
      <CharacterList
        listOfCharacters={filteredCharacters}
        isLoading={isLoading}
      />
    </>
  );
};

export default MainPage;
