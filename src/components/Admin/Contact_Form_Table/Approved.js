import React, { useContext } from "react";
import UserContext from "../../../../src/components/auth/context/userContext";
import ApprovedTable from "./Approved_Table"
import NotLogged from "./Not_Logged";
export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <ApprovedTable/>
      ) : (
        <>
          {/* <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link> */}
          <NotLogged/>
        </>
      )}
    </div>
  );
}
