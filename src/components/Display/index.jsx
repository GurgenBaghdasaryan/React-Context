import React, { useContext } from "react";
import Login from "../Login";
import Main from "../Main";
import LoginContext from "../../LoginContext";

const Display = () => {
  const { isLogin } = useContext(LoginContext);

  return <>{isLogin ? <Main /> : <Login />}</>;
};
export default Display;
