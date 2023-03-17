import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../Main-page/main-page";
import CharacterDetails from "../Character-details/Character-details";
import LoginPage from "../Login-page/Login-page";
import Navbar from "../Navbar/Navbar";
import "./App.scss";

function App() {
  const user = false;
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/character-details/:id"
          element={user ? <CharacterDetails /> : <Navigate to="/login-page" />}
        />
        <Route
          path="/login-page"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
