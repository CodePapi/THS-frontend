import React,{useState, useEffect} from 'react';
import { Cube} from 'react-preloaders';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home/index';
import Add_post from './components/Add_post/index'
import About from "./components/About/index"
import All_Posts from "./components/Admin/Contact_Form_Table/index"
import Delete_Post from "./components/Admin/Contact_Form_Table/DeleteContact"
import Edit from "./components/Admin/Contact_Form_Table/Edit"
import Approved from "./components/Admin/Contact_Form_Table/Approved_Table"
import Register from '../src/components/auth/components/auth/Register';



import Axios from "axios";
import Header from "../src/components/auth/components/layout/Header";
import HomeLog from "../src/components/auth/components/pages/Home";
import Login from "../src/components/auth/components/auth/Login";

import UserContext from "../src/components/auth/context/userContext";
function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:301/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:301/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
   <Cube color="#C72481" background="white"/>
   <UserContext.Provider value={{ userData, setUserData }}>
    <Switch>
 <Route path="/" exact component={Home} />
 <Route path="/add_post" exact component={Add_post} />
 <Route path="/about" exact component={About} />
 <Route path="/posts" exact component={All_Posts} />
 <Route path="/delete_post/:id" exact component={Delete_Post}/>
 <Route path="/edit/:id" exact component={Edit}/>
 <Route path="/approved" exact component={Approved}/>
 <Route path="/register" exact component={Register}/>


 <Route exact path="/test" component={HomeLog} />
              <Route path="/login" component={Login} />
              
 {/* <Route path="/posts/:id" exact component={All_Posts}/> */}
 </Switch>
 </UserContext.Provider>
 </BrowserRouter>
  );
}

export default App;
