import React, { useContext } from "react";
import Main from "../Main";
import Login from "../Login";
import LoginContext from "../../LoginContext";

const Display = () => {
  const { isLogin } = useContext(LoginContext);

  return <>{isLogin ? <Main /> : <Login />}</>;
};
export default Display;
