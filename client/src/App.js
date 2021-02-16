import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedInUser = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-item", "");
        token = "";
      }
      
      const tokenRes = await Axios.post("http://localhost:2021/users/tokenIsVerified", null, {headers : {"x-auth-token" : token}});
      if(tokenRes.data) {
        const userRes = await Axios.get("http://localhost:2021/users/", {header : {"x-auth-token" : token}});
        setUserData({
          token,
          user : userRes.data
        });
      }
    }

    checkLoggedInUser();
  }, [])

  return (
    <>
      <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
