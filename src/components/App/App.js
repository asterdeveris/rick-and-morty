import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Main-page/main-page";
import CharacterDetails from "../Character-details/Character-details";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character-details" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
