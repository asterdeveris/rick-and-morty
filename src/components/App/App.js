import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../Main-page/main-page";
import CharacterDetails from "../Character-details/Character-details";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/character-details/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
