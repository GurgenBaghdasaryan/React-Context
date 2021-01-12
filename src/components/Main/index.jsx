import React, { useContext } from "react";
import LoginContext from "../../LoginContext";

const Main = () => {
  const { setIsLogin } = useContext(LoginContext);

  return (
    <>
      <div>Hello</div>
      <button onClick={() => setIsLogin(false)}>Log Out</button>
    </>
  );
};

export default Main;
