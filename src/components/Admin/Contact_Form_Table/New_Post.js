import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../../src/components/auth/context/userContext";
import New_Post_Table from "./New_Post_Table"
import Not_Logged from "./Not_Logged";
export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <New_Post_Table/>
      ) : (
        <>
          <Not_Logged/>
        </>
      )}
    </div>
  );
}
