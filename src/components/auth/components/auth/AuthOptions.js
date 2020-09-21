import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <button className="btn btn-dark text-white" onClick={logout}>Log out</button>
      ) : (
        <>
          <button className="btn btn-dark text-white"  onClick={register}>Register</button>
          <button className="btn btn-dark text-white"  onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}
