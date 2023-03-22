import React from "react";
import "./Login-page.scss";
import googleIcon from "./icons/search.png";

const LoginPage = () => {
  const googleLogIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login-page">
      <h1>Please, login before continue</h1>
      <button onClick={googleLogIn}>
        <span>
          <img src={googleIcon} />
        </span>
        Continue with Google
      </button>
    </div>
  );
};

export default LoginPage;
