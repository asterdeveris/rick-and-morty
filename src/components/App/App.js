import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../Main-page/main-page";
import CharacterDetails from "../Character-details/Character-details";
import LoginPage from "../Login-page/Login-page";
import Navbar from "../Navbar/Navbar";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("authentication has been failed");
          }
          console.log(response);
          return response.json();
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject.user);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  console.log(user);
  return (
    <div className="container">
      <Navbar user={user} />
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
