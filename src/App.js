import React, { useState } from "react";
import "./App.css";
import Display from "./display/Display";

export const LoginContext = React.createContext();

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <div>
          <Display />
        </div>
      </LoginContext.Provider>
    </>
  );
}

export default App;
