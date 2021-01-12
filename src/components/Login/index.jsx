import React, { useContext, useState } from "react";
import LoginContext from "../../LoginContext";

const Login = () => {
  const { setIsLogin } = useContext(LoginContext);
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const logIn = () => {
    if (!loginField.trim() || !passwordField.trim()) return;
    setIsLogin(true)
  }

  return (
    <>
      <input
        onChange={(e) => setLoginField(e.target.value)}
        type="text"
        placeholder="Enter Login"
      />
      <input
        onChange={(e) => setPasswordField(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={logIn}>Log In</button>
    </>
  );
}

export default Login;
