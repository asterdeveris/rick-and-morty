import React from "react";
import "./Login-page.scss";

const LoginPage = () => {
  const googleLogIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login-page">
      <h1>Log in</h1>
      <button onClick={googleLogIn}>Continue with Google</button>
      <button>Continue with Facebook</button>
    </div>
  );
};

export default LoginPage;
