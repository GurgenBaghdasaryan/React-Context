import React, { useState } from "react";
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
