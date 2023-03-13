import React from "react";
import "./Character-details.scss";

const CharacterDetails = () => {
  return (
    <div className="info">
      <div className="info-header">
        <img src="/" alt="image of a character" />
        <h1>Rick Sanchez</h1>
      </div>
      <div className="info-details">
        <h2>Information</h2>
        <ul className="info-list">
          <li>
            <h3>Gender</h3>
            <p>Male</p>
          </li>
          <li>
            <h3>Status</h3>
            <p>Alive</p>
          </li>
          <li>
            <h3>Sh3ecie</h3>
            <p>Human</p>
          </li>
          <li>
            <h3>Origin</h3>
            <p>Earth(C-137)</p>
          </li>
          <li>
            <h3>Tyh3e</h3>
            <p>Unknown</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
