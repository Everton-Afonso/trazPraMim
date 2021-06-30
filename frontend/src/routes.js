import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Profile from "./pages/Profile";
import UserRegister from "./pages/Register/UserRegister";
import TravelerRegister from "./pages/Register/TravelerRegister";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/userRegister" component={UserRegister} />
        <Route path="/travelerRegister" component={TravelerRegister} />

        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
