import React, { useContext } from "react";
import UserContext from "../../../../src/components/auth/context/userContext";
import NewPostTable from "./New_Post_Table"
import NotLogged from "./Not_Logged";
export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <NewPostTable/>
      ) : (
        <>
          <NotLogged/>
        </>
      )}
    </div>
  );
}
