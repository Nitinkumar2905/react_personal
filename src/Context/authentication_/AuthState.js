import { useContext } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  return <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>;
};

export default AuthState;
