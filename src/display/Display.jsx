import React, { useContext, useState } from "react";
import { LoginContext } from "../App";

const Display = () => {
  const { setIsLogin, isLogin } = useContext(LoginContext);
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const checkLogin = () => {
    if (
      loginField == "" ||
      loginField == " " ||
      passwordField == "" ||
      passwordField == " "
    ) {
      return;
    }

    setIsLogin((prevLogin) => !prevLogin);
  };

  if (!isLogin) {
    return (
      <>
        <h1>Hello</h1>
        <button type="checkbox" onClick={checkLogin}>
          Exit
        </button>
      </>
    );
  }

  return (
    <>
      <input
        onChange={(e) => setLoginField(e.target.value)}
        type="text"
        placeholder="Enter Login"
      ></input>
      <input
        onChange={(e) => setPasswordField(e.target.value)}
        type="password"
        placeholder="Enter Password"
      ></input>
      <button type="checkbox" onClick={checkLogin}>
        Enter
      </button>
    </>
  );
};

export default Display;
