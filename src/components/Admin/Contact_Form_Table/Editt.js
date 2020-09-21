import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../auth/context/userContext";
import Approved_Table from "./Edit"
export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <Approved_Table/>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )}
    </div>
  );
}
