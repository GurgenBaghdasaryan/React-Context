import React, { useState } from "react";
import LoginContext from "./LoginContext";
import Display from "./components/Display";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Display />
    </LoginContext.Provider>
  );
};

export default App;
