import React from "react";
import CharacterDetails from "../Character-details/Character-details";
import CharacterList from "../Character-list/Character-list";
import Header from "../Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <CharacterList />
      <CharacterDetails />
    </div>
  );
}

export default App;
