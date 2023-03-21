import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../Character-details/arrow_back.svg";
import "./Login-page.scss";

const LoginPage = () => {
  const googleLogIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login-page">
      <Link to="/">
        <div className="back-to-main-link">
          <img src={arrowIcon} />
          Go back
        </div>
      </Link>
      <h1>Log in</h1>
      <button onClick={googleLogIn}>Continue with Google</button>
      <button>Continue with Facebook</button>
    </div>
  );
};

export default LoginPage;
