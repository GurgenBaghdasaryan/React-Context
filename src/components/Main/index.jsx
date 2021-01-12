import React, { useContext } from "react";
import LoginContext from "../../LoginContext";

const Main = () => {
  const { setIsLogin } = useContext(LoginContext);

  return (
    <>
      <div>You are now logged in!</div>
      <button onClick={() => setIsLogin(false)}>Log Out</button>
    </>
  );
};

export default Main;
