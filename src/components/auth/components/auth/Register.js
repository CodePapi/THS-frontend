import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import CloseHeader from "../../../Add_post/close_header";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:301/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:301/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page" style= {{ height:"100vh", background:"#C72481",color:"white" }}>
     <CloseHeader/>
      <h2 style={{width:"60%", margin:"auto", paddingTop:'80px'}}>Register</h2>
      <h2 style={{width:"60%", margin:"auto",height:'40px'}}>
      {error && (
        
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
     </h2>
       <div style={{width:"60%", margin:"auto", paddingTop:"20vh"}}>
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
        className="input"
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
        className="input"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        className="input"
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name">Display name</label>
        <input
        className="input"
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input className="btn btn-lg btn-dark" type="submit" value="Register" />
      </form>
      </div>
    </div>
  );
}
