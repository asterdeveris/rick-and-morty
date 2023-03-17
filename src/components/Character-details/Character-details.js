import React, { useEffect, useState } from "react";
import "./Character-details.scss";
import { useParams, Link } from "react-router-dom";
import { getCharacter } from "rickmortyapi";
import spinner from "../Character-list/DoubleRing.svg";
import arrowIcon from "./arrow_back.svg";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name, gender, image, species, status, type, origin } = character;

  useEffect(() => {
    (async () => {
      const character = await getCharacter(+id);
      setCharacter(character.data);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <img src={spinner} />
  ) : (
    <div className="info">
      <Link to="/">
        <div className="back-to-main-link">
          <img src={arrowIcon} />
          Go back
        </div>
      </Link>
      <div className="info-header">
        <img src={image} alt="image of a character" />
        <h1>{name}</h1>
      </div>
      <div className="info-details">
        <h2>Information</h2>
        <ul className="info-list">
          <li>
            <h3>Gender</h3>
            <p>{gender}</p>
          </li>
          <li>
            <h3>Status</h3>
            <p>{status}</p>
          </li>
          <li>
            <h3>Species</h3>
            <p>{species}</p>
          </li>
          <li>
            <h3>Origin</h3>
            <p>{origin.name}</p>
          </li>
          <li>
            <h3>Type</h3>
            <p>{type}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
