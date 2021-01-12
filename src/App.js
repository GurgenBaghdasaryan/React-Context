import React, { useState } from "react";
import Display from "./components/Display";
import LoginContext from "./LoginContext";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Display />
import "./App.css";
import Component from "./components/Component";

export const LoginContext = React.createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <div>
        <Component />
      </div>
    </LoginContext.Provider>
  );
};

export default App;
