import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import CloseHeader from "../../../Add_post/close_header";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:301/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/posts");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page" style= {{ height:"100vh", background:"#C72481",color:"white" }}>
      <CloseHeader/>
      <h2 style={{width:"60%", margin:"auto", paddingTop:'80px'}}>Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <div style={{width:"60%", margin:"auto", paddingTop:"20vh"}}>
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
        className="input"
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
        className="input"
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input className="btn btn-dark btn-lg" type="submit" value="Log in" />
      </form>
    </div>
    </div>
  );
}
